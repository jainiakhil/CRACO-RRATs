import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { INITIAL_RRATS_DATA } from '../data/rratsData';
import { RRATEntry } from '../types/rrat';
import { RRATModal } from '../components/RRATModal';
import {
  Globe,
  LineChart,
  RotateCcw,
  Sliders,
  Filter,
  CheckSquare,
  Square,
  Sparkles,
  Info,
  Maximize2,
  Download,
  Eye
} from 'lucide-react';

type AxisProperty = 
  | 'best_dm'
  | 'period'
  | 'dist_ne2025'
  | 'dist_ne2001'
  | 'dist_ymw16'
  | 'snr'
  | 'w50'
  | 'ra_deg'
  | 'dec_deg'
  | 'burst_rate'
  | 'pulses';

const PROPERTY_LABELS: Record<AxisProperty, string> = {
  best_dm: 'Dispersion Measure (pc cm⁻³)',
  period: 'Spin Period P₀ (seconds)',
  dist_ne2025: 'Distance NE2025 (kpc)',
  dist_ne2001: 'Distance NE2001 (kpc)',
  dist_ymw16: 'Distance YMW16 (kpc)',
  snr: 'Detection S/N',
  w50: 'Burst Width W₅₀ (ms)',
  ra_deg: 'Right Ascension (degrees)',
  dec_deg: 'Declination (degrees)',
  burst_rate: 'Burst Rate (bursts/hr)',
  pulses: 'Total Detected Pulses'
};

// Convert RA "17:43:12.750" to degrees
function raToDeg(raStr: string): number {
  const parts = raStr.split(':');
  if (parts.length < 2) return 0;
  const h = parseFloat(parts[0]) || 0;
  const m = parseFloat(parts[1]) || 0;
  const s = parseFloat(parts[2]) || 0;
  return (h + m / 60 + s / 3600) * 15;
}

// Convert Dec "-27:54:43.877" to degrees
function decToDeg(decStr: string): number {
  const isNeg = decStr.trim().startsWith('-');
  const clean = decStr.replace(/[+-]/g, '').trim();
  const parts = clean.split(':');
  if (parts.length < 2) return 0;
  const d = parseFloat(parts[0]) || 0;
  const m = parseFloat(parts[1]) || 0;
  const s = parseFloat(parts[2]) || 0;
  const val = d + m / 60 + s / 3600;
  return isNeg ? -val : val;
}

function getPropertyValue(rrat: RRATEntry, prop: AxisProperty): number | null {
  switch (prop) {
    case 'best_dm':
      return rrat.properties.best_dm_pc_cm3 ?? rrat.discovery_info.detection_dm_pc_cm3;
    case 'period':
      return rrat.properties.period_s;
    case 'dist_ne2025':
      return rrat.properties.distance_kpc.ne2025;
    case 'dist_ne2001':
      return rrat.properties.distance_kpc.ne2001;
    case 'dist_ymw16':
      return rrat.properties.distance_kpc.ymw16;
    case 'snr':
      return rrat.discovery_info.detection_snr;
    case 'w50':
      return rrat.properties.w50_burst_width_ms;
    case 'ra_deg':
      return raToDeg(rrat.properties.ra_j2000);
    case 'dec_deg':
      return decToDeg(rrat.properties.dec_j2000);
    case 'burst_rate':
      return rrat.discovery_info.burst_rate_per_hr;
    case 'pulses':
      return rrat.discovery_info.total_pulses;
    default:
      return null;
  }
}

export const VisualisationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'3d' | 'scatter'>('3d');
  const [selectedRratForModal, setSelectedRratForModal] = useState<RRATEntry | null>(null);

  // 3D Canvas Ref & State
  const container3dRef = useRef<HTMLDivElement | null>(null);
  const [hoveredRrat3d, setHoveredRrat3d] = useState<RRATEntry | null>(null);
  const [resetViewTrigger, setResetViewTrigger] = useState<number>(0);

  // Scatter Plot State
  const [xAxis, setXAxis] = useState<AxisProperty>('best_dm');
  const [yAxis, setYAxis] = useState<AxisProperty>('period');
  const [xLog, setXLog] = useState<boolean>(false);
  const [yLog, setYLog] = useState<boolean>(false);
  const [selectedSources, setSelectedSources] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    INITIAL_RRATS_DATA.forEach(r => { initial[r.source_name] = true; });
    return initial;
  });
  const [hoveredScatterPoint, setHoveredScatterPoint] = useState<{
    rrat: RRATEntry;
    xVal: number;
    yVal: number;
    posX: number;
    posY: number;
  } | null>(null);

  // --------------------------------------------------------------------------
  // 1. THREE.JS 3D CELESTIAL ORBIT LOGIC
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (activeTab !== '3d' || !container3dRef.current) return;

    const container = container3dRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 580;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050608);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 30, 75);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Center Earth Mesh
    const earthRadius = 2.5;
    const earthGeo = new THREE.SphereGeometry(earthRadius, 32, 32);
    const earthMat = new THREE.MeshBasicMaterial({
      color: 0x9F80F8,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    scene.add(earthMesh);

    // Earth Core Glow
    const coreGeo = new THREE.SphereGeometry(earthRadius * 0.9, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x4c2b9e });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // Coordinate Rings (Equator & Ecliptic in #9F80F8)
    const ringGeo = new THREE.RingGeometry(38, 38.3, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x9F80F8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    scene.add(ringMesh);

    // Celestial Grid Sphere (faint outer sphere)
    const sphereWireGeo = new THREE.SphereGeometry(40, 24, 16);
    const sphereWireMat = new THREE.MeshBasicMaterial({
      color: 0x1f2433,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const sphereWireMesh = new THREE.Mesh(sphereWireGeo, sphereWireMat);
    scene.add(sphereWireMesh);

    // Add RRAT Points
    const rratPointsGroup = new THREE.Group();
    const raycastMeshes: THREE.Mesh[] = [];

    INITIAL_RRATS_DATA.forEach((rrat) => {
      const raDeg = raToDeg(rrat.properties.ra_j2000);
      const decDeg = decToDeg(rrat.properties.dec_j2000);
      const dist = rrat.properties.distance_kpc.ne2025 ?? rrat.properties.distance_kpc.ne2001 ?? 2.0;

      // Coordinate transformation: Spherical to Cartesian
      const theta = (raDeg * Math.PI) / 180;
      const phi = (decDeg * Math.PI) / 180;
      // Logarithmic scaling for distance visualization (r in 10 to 38 radius units)
      const rScale = 8 + Math.log10(Math.max(0.1, dist) + 1) * 18;

      const x = rScale * Math.cos(phi) * Math.cos(theta);
      const y = rScale * Math.sin(phi);
      const z = rScale * Math.cos(phi) * Math.sin(theta);

      // Color coding by DM with #9F80F8 high-DM
      const dm = rrat.properties.best_dm_pc_cm3 ?? rrat.discovery_info.detection_dm_pc_cm3 ?? 20;
      let colorHex = 0x00f0ff; // cyan default
      if (dm < 20) colorHex = 0x10b981; // emerald low-DM
      else if (dm > 500) colorHex = 0xf43f5e; // ultra high DM (J1743, J1430)
      else if (dm > 80) colorHex = 0x9F80F8; // #9F80F8 violet high DM

      // Visual Star Mesh
      const starGeo = new THREE.SphereGeometry(0.85, 12, 12);
      const starMat = new THREE.MeshBasicMaterial({ color: colorHex });
      const starMesh = new THREE.Mesh(starGeo, starMat);
      starMesh.position.set(x, y, z);
      starMesh.userData = { rrat };
      rratPointsGroup.add(starMesh);
      raycastMeshes.push(starMesh);

      // Connecting line from Earth to source
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(x, y, z),
      ]);
      const lineMat = new THREE.LineBasicMaterial({
        color: colorHex,
        transparent: true,
        opacity: 0.15,
      });
      const lineMesh = new THREE.Line(lineGeo, lineMat);
      rratPointsGroup.add(lineMesh);
    });

    scene.add(rratPointsGroup);

    // Simple Smooth Orbit Controls via Mouse Drag (Stationary by default!)
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let rotX = 0.3;
    let rotY = 0.5;
    let zoomDist = 80;

    const updateCamera = () => {
      camera.position.x = zoomDist * Math.cos(rotX) * Math.sin(rotY);
      camera.position.y = zoomDist * Math.sin(rotX);
      camera.position.z = zoomDist * Math.cos(rotX) * Math.cos(rotY);
      camera.lookAt(0, 0, 0);
    };
    updateCamera();

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      // Rotate on Drag ONLY
      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        rotY += deltaX * 0.006;
        rotX += deltaY * 0.006;
        rotX = Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, rotX));
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
        updateCamera();
      }

      // Raycasting for Hover Tooltip
      const rect = renderer.domElement.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(raycastMeshes);

      if (intersects.length > 0) {
        const targetRrat = intersects[0].object.userData.rrat as RRATEntry;
        setHoveredRrat3d(targetRrat);
        container.style.cursor = 'pointer';
      } else {
        setHoveredRrat3d(null);
        container.style.cursor = isDragging ? 'grabbing' : 'grab';
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      zoomDist += e.deltaY * 0.05;
      zoomDist = Math.max(25, Math.min(180, zoomDist));
      updateCamera();
    };

    const onClick = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(raycastMeshes);

      if (intersects.length > 0) {
        const targetRrat = intersects[0].object.userData.rrat as RRATEntry;
        setSelectedRratForModal(targetRrat);
      }
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    dom.addEventListener('wheel', onWheel, { passive: false });
    dom.addEventListener('click', onClick);

    // Animation Loop (NO AUTOMATIC ROTATION - STATIONARY FRAME)
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 580;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('wheel', onWheel);
      dom.removeEventListener('click', onClick);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [activeTab, resetViewTrigger]);

  // --------------------------------------------------------------------------
  // 2. SCATTER PLOT LOGIC
  // --------------------------------------------------------------------------
  const activeScatterData = useMemo(() => {
    return INITIAL_RRATS_DATA.filter((r) => selectedSources[r.source_name]).map((r) => {
      const x = getPropertyValue(r, xAxis);
      const y = getPropertyValue(r, yAxis);
      return { rrat: r, x, y };
    }).filter((item): item is { rrat: RRATEntry; x: number; y: number } => {
      return item.x !== null && item.y !== null && !isNaN(item.x) && !isNaN(item.y);
    });
  }, [xAxis, yAxis, selectedSources]);

  // Min and Max for active scatter data
  const plotBounds = useMemo(() => {
    if (activeScatterData.length === 0) {
      return { minX: 0, maxX: 10, minY: 0, maxY: 10 };
    }
    const xVals = activeScatterData.map((d) => (xLog ? Math.max(0.001, d.x) : d.x));
    const yVals = activeScatterData.map((d) => (yLog ? Math.max(0.001, d.y) : d.y));

    let minX = Math.min(...xVals);
    let maxX = Math.max(...xVals);
    let minY = Math.min(...yVals);
    let maxY = Math.max(...yVals);

    // Padding
    const padX = (maxX - minX) * 0.1 || 1;
    const padY = (maxY - minY) * 0.1 || 1;

    return {
      minX: xLog ? minX * 0.8 : minX - padX,
      maxX: xLog ? maxX * 1.2 : maxX + padX,
      minY: yLog ? minY * 0.8 : minY - padY,
      maxY: yLog ? maxY * 1.2 : maxY + padY,
    };
  }, [activeScatterData, xLog, yLog]);

  // Coordinate mapper for 2D plot (SVG 700 x 480)
  const getCanvasCoords = (xVal: number, yVal: number, width = 700, height = 480) => {
    const padLeft = 65;
    const padRight = 30;
    const padTop = 30;
    const padBottom = 55;

    const plotW = width - padLeft - padRight;
    const plotH = height - padTop - padBottom;

    let normX = 0;
    let normY = 0;

    if (xLog) {
      const logMin = Math.log10(Math.max(0.0001, plotBounds.minX));
      const logMax = Math.log10(Math.max(0.0001, plotBounds.maxX));
      normX = (Math.log10(Math.max(0.0001, xVal)) - logMin) / (logMax - logMin || 1);
    } else {
      normX = (xVal - plotBounds.minX) / (plotBounds.maxX - plotBounds.minX || 1);
    }

    if (yLog) {
      const logMin = Math.log10(Math.max(0.0001, plotBounds.minY));
      const logMax = Math.log10(Math.max(0.0001, plotBounds.maxY));
      normY = (Math.log10(Math.max(0.0001, yVal)) - logMin) / (logMax - logMin || 1);
    } else {
      normY = (yVal - plotBounds.minY) / (plotBounds.maxY - plotBounds.minY || 1);
    }

    const cx = padLeft + normX * plotW;
    const cy = padTop + (1 - normY) * plotH;
    return { cx, cy };
  };

  const handleSelectAll = () => {
    const updated: Record<string, boolean> = {};
    INITIAL_RRATS_DATA.forEach((r) => { updated[r.source_name] = true; });
    setSelectedSources(updated);
  };

  const handleDeselectAll = () => {
    const updated: Record<string, boolean> = {};
    INITIAL_RRATS_DATA.forEach((r) => { updated[r.source_name] = false; });
    setSelectedSources(updated);
  };

  const toggleSource = (name: string) => {
    setSelectedSources((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn bg-dot-matrix">
      
      {/* Header Banner */}
      <div className="bg-obsidian-900 border border-obsidian-800 rounded-3xl p-6 sm:p-8 space-y-3 reticle-box">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-obsidian-800 pb-4">
          <div>
            <div className="flex items-center space-x-2 text-[#9F80F8] font-mono text-xs uppercase tracking-wider mb-1">
              <Globe className="w-4 h-4" />
              <span>Interactive Telemetry Engine</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Data Visualisations
            </h1>
          </div>

          {/* Mode Switcher */}
          <div className="flex bg-obsidian-950 p-1 rounded-xl border border-obsidian-800 font-mono text-xs">
            <button
              onClick={() => setActiveTab('3d')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition ${
                activeTab === '3d'
                  ? 'bg-[#9F80F8] text-obsidian-950 font-bold shadow-md shadow-[#9F80F8]/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>3D Celestial Orbit</span>
            </button>
            <button
              onClick={() => setActiveTab('scatter')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition ${
                activeTab === 'scatter'
                  ? 'bg-[#9F80F8] text-obsidian-950 font-bold shadow-md shadow-[#9F80F8]/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LineChart className="w-3.5 h-3.5" />
              <span>2D Property Plotter</span>
            </button>
          </div>
        </div>

        <p className="text-slate-400 text-xs sm:text-sm max-w-3xl">
          {activeTab === '3d'
            ? 'Interactive 3D celestial coordinate frame mapping all 37 CRACO RRATs around Earth based on Right Ascension, Declination, and Distance (kpc). Frame is stationary by default: click and drag to rotate the frame, scroll to zoom, and click any source for details.'
            : 'Interactive parameter-space diagram. Choose any property for the X and Y axes, toggle logarithmic scales, and selectively filter specific RRATs in real time.'}
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* TAB 1: 3D CELESTIAL ORBIT VIEW */}
      {/* ------------------------------------------------------------------ */}
      {activeTab === '3d' && (
        <div className="space-y-4">
          <div className="relative bg-obsidian-950 border border-obsidian-800 rounded-3xl overflow-hidden shadow-2xl reticle-box">
            {/* 3D WebGL Canvas Container */}
            <div
              ref={container3dRef}
              className="w-full h-[580px] cursor-grab active:cursor-grabbing"
            />

            {/* Top Overlay Controls */}
            <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2 text-xs font-mono">
              <div className="bg-obsidian-900/90 border border-obsidian-750 px-3 py-1.5 rounded-lg text-slate-300 backdrop-blur">
                <span className="text-[#9F80F8] font-bold">CLICK &amp; DRAG</span> to rotate • <span className="text-cyan-400">SCROLL</span> to zoom
              </div>
              <button
                onClick={() => setResetViewTrigger(Date.now())}
                className="flex items-center space-x-1.5 bg-obsidian-900/90 hover:bg-obsidian-800 border border-obsidian-750 px-3 py-1.5 rounded-lg text-slate-300 hover:text-white transition"
                title="Reset Camera Angle"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#9F80F8]" />
                <span>Reset Frame</span>
              </button>
            </div>

            {/* Top Right Legend Overlay */}
            <div className="absolute top-4 right-4 z-10 hidden sm:block bg-obsidian-900/90 border border-obsidian-750 p-3 rounded-xl text-[11px] font-mono space-y-1.5 backdrop-blur">
              <span className="text-slate-400 block font-semibold border-b border-obsidian-800 pb-1">
                // DM COLOUR PALETTE
              </span>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span className="text-slate-300">Low-DM (&lt; 20 pc cm⁻³)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <span className="text-slate-300">Intermediate (20–100)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#9F80F8]"></span>
                <span className="text-slate-300">High-DM (&gt; 100)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span className="text-slate-300">Extreme &gt; 900 (J1743, J1430)</span>
              </div>
            </div>

            {/* Bottom Hover Telemetry Card */}
            {hoveredRrat3d && (
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-10 bg-obsidian-900/95 border border-[#9F80F8]/50 p-4 rounded-xl text-xs font-mono shadow-2xl backdrop-blur animate-fadeIn">
                <div className="flex justify-between items-center border-b border-obsidian-800 pb-2 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#9F80F8] animate-pulse"></span>
                    <span className="font-bold text-white text-sm">{hoveredRrat3d.source_name}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-violet-950 text-[#C4B2FB] border border-[#9F80F8]/40 text-[10px]">
                    DM {hoveredRrat3d.properties.best_dm_pc_cm3 ?? hoveredRrat3d.discovery_info.detection_dm_pc_cm3}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                  <div>
                    <span className="text-slate-500 block text-[10px]">RA (J2000)</span>
                    <span className="text-white">{hoveredRrat3d.properties.ra_j2000}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Dec (J2000)</span>
                    <span className="text-white">{hoveredRrat3d.properties.dec_j2000}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Distance (NE2025)</span>
                    <span className="text-cyan-300">{hoveredRrat3d.properties.distance_kpc.ne2025 ?? '—'} kpc</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Rotation Period</span>
                    <span className="text-emerald-400">{hoveredRrat3d.properties.period_s ? `${hoveredRrat3d.properties.period_s.toFixed(3)}s` : 'Unsolved'}</span>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-obsidian-800 text-[10px] text-[#C4B2FB] flex justify-between items-center">
                  <span>Click point to open full spectrum &amp; metadata</span>
                  <Eye className="w-3 h-3 text-[#9F80F8]" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* TAB 2: REAL-TIME PROPERTY SCATTER PLOTTER */}
      {/* ------------------------------------------------------------------ */}
      {activeTab === 'scatter' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Left Column: Axis & Filter Controls */}
          <div className="space-y-5 bg-obsidian-900 border border-obsidian-800 p-5 rounded-2xl text-xs font-mono reticle-box">
            
            {/* Axis Selectors */}
            <div className="space-y-3">
              <span className="text-[#9F80F8] font-semibold block text-[11px] uppercase tracking-wider border-b border-obsidian-800 pb-1">
                // AXIS CONFIGURATION
              </span>
              
              {/* X-Axis */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-slate-300 font-medium">X-Axis Property</label>
                  <button
                    onClick={() => setXLog(!xLog)}
                    className={`px-2 py-0.5 rounded text-[10px] border transition ${
                      xLog
                        ? 'bg-violet-950 text-[#C4B2FB] border-[#9F80F8]/50'
                        : 'bg-obsidian-950 text-slate-400 border-obsidian-750'
                    }`}
                  >
                    {xLog ? 'Log' : 'Linear'}
                  </button>
                </div>
                <select
                  value={xAxis}
                  onChange={(e) => setXAxis(e.target.value as AxisProperty)}
                  style={{ backgroundColor: '#090b10', color: '#f1f5f9' }}
                  className="w-full bg-[#090b10] border border-obsidian-700 text-slate-100 rounded-lg px-2.5 py-2 text-xs focus:outline-none focus:border-[#9F80F8]"
                >
                  {Object.entries(PROPERTY_LABELS).map(([key, label]) => (
                    <option key={key} value={key} style={{ backgroundColor: '#0e1118', color: '#ffffff' }}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Y-Axis */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-slate-300 font-medium">Y-Axis Property</label>
                  <button
                    onClick={() => setYLog(!yLog)}
                    className={`px-2 py-0.5 rounded text-[10px] border transition ${
                      yLog
                        ? 'bg-violet-950 text-[#C4B2FB] border-[#9F80F8]/50'
                        : 'bg-obsidian-950 text-slate-400 border-obsidian-750'
                    }`}
                  >
                    {yLog ? 'Log' : 'Linear'}
                  </button>
                </div>
                <select
                  value={yAxis}
                  onChange={(e) => setYAxis(e.target.value as AxisProperty)}
                  style={{ backgroundColor: '#090b10', color: '#f1f5f9' }}
                  className="w-full bg-[#090b10] border border-obsidian-700 text-slate-100 rounded-lg px-2.5 py-2 text-xs focus:outline-none focus:border-[#9F80F8]"
                >
                  {Object.entries(PROPERTY_LABELS).map(([key, label]) => (
                    <option key={key} value={key} style={{ backgroundColor: '#0e1118', color: '#ffffff' }}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Source Selection & Deselection */}
            <div className="space-y-3 pt-3 border-t border-obsidian-800">
              <div className="flex justify-between items-center">
                <span className="text-[#9F80F8] font-semibold text-[11px] uppercase tracking-wider">
                  // RRAT SELECTION
                </span>
                <span className="text-slate-400 text-[10px]">
                  {Object.values(selectedSources).filter(Boolean).length} / {INITIAL_RRATS_DATA.length}
                </span>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={handleSelectAll}
                  className="flex-1 py-1 rounded bg-obsidian-800 hover:bg-obsidian-750 text-slate-200 text-[10px] border border-obsidian-750"
                >
                  Select All
                </button>
                <button
                  onClick={handleDeselectAll}
                  className="flex-1 py-1 rounded bg-obsidian-800 hover:bg-obsidian-750 text-slate-200 text-[10px] border border-obsidian-750"
                >
                  Clear All
                </button>
              </div>

              {/* Source chips list */}
              <div className="max-h-64 overflow-y-auto space-y-1 pr-1">
                {INITIAL_RRATS_DATA.map((rrat) => {
                  const isChecked = selectedSources[rrat.source_name] ?? true;
                  return (
                    <div
                      key={rrat.source_name}
                      onClick={() => toggleSource(rrat.source_name)}
                      className={`flex items-center justify-between px-2.5 py-1 rounded cursor-pointer transition text-[11px] ${
                        isChecked
                          ? 'bg-obsidian-850 text-white border border-[#9F80F8]/30'
                          : 'bg-obsidian-950 text-slate-500 border border-obsidian-850'
                      }`}
                    >
                      <span>{rrat.source_name}</span>
                      {isChecked ? (
                        <CheckSquare className="w-3.5 h-3.5 text-[#9F80F8]" />
                      ) : (
                        <Square className="w-3.5 h-3.5 text-slate-600" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic SVG / HTML5 Plot */}
          <div className="lg:col-span-3 bg-obsidian-950 border border-obsidian-800 rounded-2xl p-4 sm:p-6 flex flex-col justify-between shadow-2xl relative reticle-box">
            
            {/* Plot Top Info & Pinned Hover HUD (Prevents Flickering) */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-mono border-b border-obsidian-800 pb-3 mb-3 text-slate-400 gap-2">
              <div>
                Plotted: <strong className="text-white">{activeScatterData.length}</strong> sources
              </div>
              
              {/* Stable Hover Telemetry Badge */}
              <div className="h-6 flex items-center">
                {hoveredScatterPoint ? (
                  <div className="flex items-center space-x-2 text-[11px] bg-obsidian-900 border border-[#9F80F8]/50 px-3 py-1 rounded-full text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9F80F8] animate-pulse"></span>
                    <strong className="text-[#C4B2FB]">{hoveredScatterPoint.rrat.source_name}</strong>
                    <span className="text-slate-400">X: {hoveredScatterPoint.xVal.toFixed(2)}</span>
                    <span className="text-slate-400">Y: {hoveredScatterPoint.yVal.toFixed(2)}</span>
                  </div>
                ) : (
                  <span className="text-[11px] text-slate-500">
                    Hover over data points to inspect • Click to open details
                  </span>
                )}
              </div>
            </div>

            {/* SVG Plot Canvas */}
            <div className="relative w-full h-[480px] bg-obsidian-900/50 rounded-xl border border-obsidian-800/80 overflow-hidden">
              <svg className="w-full h-full select-none" viewBox="0 0 700 480">
                {/* Background gridlines */}
                {[0.25, 0.5, 0.75].map((pct) => (
                  <React.Fragment key={pct}>
                    <line
                      x1={65}
                      y1={30 + pct * 395}
                      x2={670}
                      y2={30 + pct * 395}
                      stroke="#1e2433"
                      strokeDasharray="3 3"
                    />
                    <line
                      x1={65 + pct * 605}
                      y1={30}
                      x2={65 + pct * 605}
                      y2={425}
                      stroke="#1e2433"
                      strokeDasharray="3 3"
                    />
                  </React.Fragment>
                ))}

                {/* Main Box Borders */}
                <rect
                  x="65"
                  y="30"
                  width="605"
                  height="395"
                  fill="none"
                  stroke="#333d52"
                  strokeWidth="1"
                />

                {/* Axes Labels */}
                <text
                  x="367"
                  y="460"
                  fill="#94a3b8"
                  fontSize="12"
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  {PROPERTY_LABELS[xAxis]} {xLog && '(Log Scale)'}
                </text>

                <text
                  x="-227"
                  y="22"
                  fill="#94a3b8"
                  fontSize="12"
                  textAnchor="middle"
                  fontFamily="monospace"
                  transform="rotate(-90)"
                >
                  {PROPERTY_LABELS[yAxis]} {yLog && '(Log Scale)'}
                </text>

                {/* Ticks X */}
                <text x="65" y="440" fill="#64748b" fontSize="10" textAnchor="start" fontFamily="monospace">
                  {plotBounds.minX.toFixed(1)}
                </text>
                <text x="670" y="440" fill="#64748b" fontSize="10" textAnchor="end" fontFamily="monospace">
                  {plotBounds.maxX.toFixed(1)}
                </text>

                {/* Ticks Y */}
                <text x="58" y="425" fill="#64748b" fontSize="10" textAnchor="end" fontFamily="monospace">
                  {plotBounds.minY.toFixed(1)}
                </text>
                <text x="58" y="36" fill="#64748b" fontSize="10" textAnchor="end" fontFamily="monospace">
                  {plotBounds.maxY.toFixed(1)}
                </text>

                {/* Data Points (Stabilized with generous hit area to prevent flickering) */}
                {activeScatterData.map(({ rrat, x, y }) => {
                  const { cx, cy } = getCanvasCoords(x, y, 700, 480);
                  const dm = rrat.properties.best_dm_pc_cm3 ?? rrat.discovery_info.detection_dm_pc_cm3 ?? 20;
                  const isHovered = hoveredScatterPoint?.rrat.source_name === rrat.source_name;

                  let fillColor = '#00f0ff';
                  if (dm < 20) fillColor = '#10b981';
                  else if (dm > 500) fillColor = '#f43f5e';
                  else if (dm > 80) fillColor = '#9F80F8';

                  return (
                    <g
                      key={rrat.source_name}
                      className="cursor-pointer"
                      onClick={() => setSelectedRratForModal(rrat)}
                      onMouseEnter={() => {
                        setHoveredScatterPoint({
                          rrat,
                          xVal: x,
                          yVal: y,
                          posX: cx,
                          posY: cy,
                        });
                      }}
                      onMouseLeave={() => {
                        setHoveredScatterPoint((prev) => 
                          prev?.rrat.source_name === rrat.source_name ? null : prev
                        );
                      }}
                    >
                      {/* Invisible stable hit-target */}
                      <circle cx={cx} cy={cy} r="14" fill="transparent" />

                      {/* Visible Star Point */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isHovered ? 8 : 5.5}
                        fill={fillColor}
                        fillOpacity={isHovered ? 1 : 0.85}
                        stroke={isHovered ? '#ffffff' : '#141822'}
                        strokeWidth={isHovered ? 2.5 : 1.2}
                      />
                      <text
                        x={cx + 8}
                        y={cy + 3}
                        fill={isHovered ? '#ffffff' : '#94a3b8'}
                        fontSize="9"
                        fontFamily="monospace"
                        className="pointer-events-none font-medium"
                      >
                        {rrat.source_name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Bottom Legend */}
            <div className="mt-3 flex flex-wrap justify-between items-center text-[11px] font-mono text-slate-500">
              <div className="flex items-center space-x-3">
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                  <span>Low-DM (&lt;20)</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>
                  <span>Intermediate</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-[#9F80F8] inline-block"></span>
                  <span>High-DM (&gt;80)</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-rose-500 inline-block"></span>
                  <span>Extreme (&gt;500)</span>
                </span>
              </div>

              <span>Hover for values • Click point to view full profile</span>
            </div>

          </div>

        </div>
      )}

      {/* Modal for Details */}
      <RRATModal
        rrat={selectedRratForModal}
        onClose={() => setSelectedRratForModal(null)}
      />

    </div>
  );
};
