import React, { useState, useEffect, useRef } from 'react';
import { RRATEntry } from '../types/rrat';
import { Download, Maximize2, Minimize2, Sliders, RefreshCw, ZoomIn } from 'lucide-react';

interface DynamicSpectraViewerProps {
  rrat: RRATEntry;
  compact?: boolean;
}

type ColormapName = 'viridis' | 'inferno' | 'plasma' | 'greys';

export const DynamicSpectraViewer: React.FC<DynamicSpectraViewerProps> = ({ rrat, compact = false }) => {
  const [dedispersed, setDedispersed] = useState<boolean>(true);
  const [colormap, setColormap] = useState<ColormapName>('inferno');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const centerFreq = rrat.discovery_info.detection_frequency_mhz ?? 920.5;
  const bandwidth = 288;
  const dm = rrat.properties.best_dm_pc_cm3 ?? rrat.discovery_info.detection_dm_pc_cm3 ?? 20.0;
  const snr = rrat.discovery_info.detection_snr ?? 12.0;
  const widthMs = rrat.properties.w50_burst_width_ms ?? 15.0;

  // Render waterfall plot on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear
    ctx.fillStyle = '#060913';
    ctx.fillRect(0, 0, width, height);

    // Margins for axes
    const marginLeft = compact ? 35 : 55;
    const marginBottom = compact ? 25 : 40;
    const marginTop = compact ? 15 : 45; // top profile area
    const marginRight = compact ? 10 : 45; // right spectrum area

    const plotWidth = width - marginLeft - marginRight;
    const plotHeight = height - marginTop - marginBottom;

    // Time window in ms
    const timeSpanMs = Math.max(80, widthMs * 6);
    const t0 = timeSpanMs / 2;

    const nFreqChans = 64;
    const nTimeBins = 128;

    // Seeded random for consistent look per source
    let seed = 0;
    for (let i = 0; i < rrat.source_name.length; i++) {
      seed = (seed * 31 + rrat.source_name.charCodeAt(i)) % 100000;
    }
    const pseudoRandom = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    // Pre-calculate scintillation blobs (scintles)
    const scintleCount = Math.max(3, Math.min(12, Math.floor(dm / 10) + 3));
    const scintles: { freqNorm: number; timeNorm: number; scaleFreq: number; scaleTime: number }[] = [];
    for (let s = 0; s < scintleCount; s++) {
      scintles.push({
        freqNorm: pseudoRandom(),
        timeNorm: pseudoRandom(),
        scaleFreq: 0.15 + pseudoRandom() * 0.25,
        scaleTime: 0.2 + pseudoRandom() * 0.3,
      });
    }

    // Colormap mapper: value 0..1 to [r, g, b]
    const getColormapRGB = (v: number, map: ColormapName): [number, number, number] => {
      const val = Math.max(0, Math.min(1, v));
      if (map === 'greys') {
        const c = Math.floor(val * 255);
        return [c, c, c];
      }
      if (map === 'plasma') {
        const r = Math.floor(255 * Math.sin(val * Math.PI * 0.5));
        const g = Math.floor(200 * Math.pow(val, 1.8));
        const b = Math.floor(255 * (1 - Math.cos(val * Math.PI * 0.5)));
        return [r, g, b];
      }
      if (map === 'viridis') {
        const r = Math.floor(255 * (0.2 + 0.8 * Math.pow(val, 2)));
        const g = Math.floor(255 * (0.1 + 0.8 * val));
        const b = Math.floor(255 * (0.4 + 0.6 * (1 - val)));
        return [r, g, b];
      }
      // default: inferno
      const r = Math.floor(Math.min(255, 300 * Math.pow(val, 1.2)));
      const g = Math.floor(Math.min(255, 230 * Math.pow(val, 2.5)));
      const b = Math.floor(Math.min(255, 255 * Math.pow(val, 4)));
      return [r, g, b];
    };

    // Calculate matrix
    const matrix: number[][] = [];
    const timeProfile: number[] = new Array(nTimeBins).fill(0);
    const freqSpectrum: number[] = new Array(nFreqChans).fill(0);

    const fTop = centerFreq + bandwidth / 2;
    const fBottom = centerFreq - bandwidth / 2;

    for (let fIdx = 0; fIdx < nFreqChans; fIdx++) {
      matrix[fIdx] = [];
      const freq = fTop - (fIdx / (nFreqChans - 1)) * bandwidth; // top to bottom

      // Dispersive delay relative to highest frequency
      // delta_t = 4.1488e3 * DM * (f_GHz^-2 - fTop_GHz^-2) ms
      let delayMs = 0;
      if (!dedispersed) {
        const fGHz = freq / 1000;
        const fTopGHz = fTop / 1000;
        delayMs = 4.1488e-3 * dm * (1 / (fGHz * fGHz) - 1 / (fTopGHz * fTopGHz));
      }

      for (let tIdx = 0; tIdx < nTimeBins; tIdx++) {
        const tMs = (tIdx / (nTimeBins - 1)) * timeSpanMs;

        // Pulse position in time
        const pulseCenter = t0 + delayMs;
        const dt = tMs - pulseCenter;
        const gaussian = Math.exp(-0.5 * Math.pow(dt / (widthMs * 0.45), 2));

        // Background noise
        const noise = (pseudoRandom() - 0.5) * 0.25 + (pseudoRandom() - 0.5) * 0.25;

        // Scintillation modulation
        let scintMod = 0.8;
        for (const sc of scintles) {
          const df = (fIdx / nFreqChans - sc.freqNorm) / sc.scaleFreq;
          const dTime = (tIdx / nTimeBins - sc.timeNorm) / sc.scaleTime;
          scintMod += 0.5 * Math.exp(-0.5 * (df * df + dTime * dTime));
        }

        const signal = gaussian * (snr / 18.0) * scintMod;
        const intensity = Math.max(0, noise + signal);

        matrix[fIdx][tIdx] = intensity;
        timeProfile[tIdx] += intensity;
        freqSpectrum[fIdx] += intensity;
      }
    }

    // Draw Waterfall pixels
    const cellW = plotWidth / nTimeBins;
    const cellH = plotHeight / nFreqChans;

    for (let fIdx = 0; fIdx < nFreqChans; fIdx++) {
      for (let tIdx = 0; tIdx < nTimeBins; tIdx++) {
        const val = matrix[fIdx][tIdx];
        const [r, g, b] = getColormapRGB(val, colormap);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(
          marginLeft + tIdx * cellW,
          marginTop + fIdx * cellH,
          Math.ceil(cellW) + 0.5,
          Math.ceil(cellH) + 0.5
        );
      }
    }

    // Draw Axes & Labels
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    ctx.strokeRect(marginLeft, marginTop, plotWidth, plotHeight);

    // Ticks & Labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = compact ? '9px monospace' : '11px monospace';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';

    // Frequency Y-ticks
    ctx.fillText(`${fTop.toFixed(0)}`, marginLeft - 6, marginTop + 4);
    ctx.fillText(`${centerFreq.toFixed(0)}`, marginLeft - 6, marginTop + plotHeight / 2);
    ctx.fillText(`${fBottom.toFixed(0)}`, marginLeft - 6, marginTop + plotHeight - 4);

    // Frequency axis title (rotated)
    if (!compact) {
      ctx.save();
      ctx.translate(14, marginTop + plotHeight / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = 'center';
      ctx.font = '11px sans-serif';
      ctx.fillText('Frequency (MHz)', 0, 0);
      ctx.restore();
    }

    // Time X-ticks
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('0', marginLeft, marginTop + plotHeight + 6);
    ctx.fillText(`${(timeSpanMs / 2).toFixed(0)}`, marginLeft + plotWidth / 2, marginTop + plotHeight + 6);
    ctx.fillText(`${timeSpanMs.toFixed(0)}`, marginLeft + plotWidth, marginTop + plotHeight + 6);

    // Time axis title
    if (!compact) {
      ctx.fillText('Time (ms)', marginLeft + plotWidth / 2, marginTop + plotHeight + 22);
    }

    // Top Dedispersed Time Profile (Mini 1D plot)
    if (!compact) {
      const maxProfile = Math.max(...timeProfile, 1);
      ctx.beginPath();
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.5;
      for (let tIdx = 0; tIdx < nTimeBins; tIdx++) {
        const x = marginLeft + tIdx * cellW;
        const normY = timeProfile[tIdx] / maxProfile;
        const y = marginTop - 4 - normY * (marginTop - 8);
        if (tIdx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Top label
      ctx.fillStyle = '#38bdf8';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('Dedispersed Pulse Profile', marginLeft + 4, 12);
    }

    // Corner Legend
    ctx.fillStyle = 'rgba(6, 9, 19, 0.75)';
    ctx.fillRect(marginLeft + 6, marginTop + 6, compact ? 80 : 130, compact ? 18 : 34);
    ctx.fillStyle = '#38bdf8';
    ctx.font = compact ? '9px monospace' : '11px monospace';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(`${dedispersed ? 'DEDISPERSED' : 'DISPERSED'}`, marginLeft + 10, marginTop + 9);
    if (!compact) {
      ctx.fillStyle = '#94a3b8';
      ctx.fillText(`DM: ${dm.toFixed(1)} pc cm⁻³`, marginLeft + 10, marginTop + 22);
    }

  }, [rrat, dedispersed, colormap, compact]);

  const handleDownloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `${rrat.source_name}_dynamic_spectra_${dedispersed ? 'dedispersed' : 'raw'}.png`;
    a.click();
  };

  return (
    <div className={`relative bg-obsidian-950 border border-obsidian-800 rounded-xl overflow-hidden p-3 ${isFullscreen ? 'fixed inset-4 z-50 flex flex-col justify-center items-center shadow-2xl bg-obsidian-950/98' : ''}`}>
      {/* Top Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-obsidian-800 text-xs font-mono">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-[#C4B2FB]">
            {rrat.source_name}
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">
            S/N: <strong className="text-white">{snr.toFixed(1)}</strong>
          </span>
        </div>

        <div className="flex items-center space-x-2">
          {/* Dispersion Mode Button */}
          <button
            onClick={() => setDedispersed(!dedispersed)}
            className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors border ${
              dedispersed
                ? 'bg-violet-950/80 text-[#C4B2FB] border-[#9F80F8]/50 hover:bg-violet-900/60'
                : 'bg-obsidian-850 text-slate-300 border-obsidian-750 hover:bg-obsidian-800'
            }`}
            title="Toggle between dedispersed and raw sweep view"
          >
            {dedispersed ? 'Dedispersed' : 'Dispersed Sweep'}
          </button>

          {/* Colormap Selector */}
          <select
            value={colormap}
            onChange={(e) => setColormap(e.target.value as ColormapName)}
            style={{ backgroundColor: '#090b10', color: '#f1f5f9' }}
            className="bg-[#090b10] text-slate-200 border border-obsidian-750 rounded px-2 py-1 text-xs focus:outline-none focus:border-[#9F80F8]"
            title="Color Palette"
          >
            <option value="inferno" style={{ backgroundColor: '#0e1118', color: '#ffffff' }}>Inferno</option>
            <option value="viridis" style={{ backgroundColor: '#0e1118', color: '#ffffff' }}>Viridis</option>
            <option value="plasma" style={{ backgroundColor: '#0e1118', color: '#ffffff' }}>Plasma</option>
            <option value="greys" style={{ backgroundColor: '#0e1118', color: '#ffffff' }}>Greys</option>
          </select>

          {/* Download Plot */}
          <button
            onClick={handleDownloadImage}
            className="p-1 rounded bg-obsidian-850 hover:bg-obsidian-800 text-slate-300 hover:text-white border border-obsidian-750 transition-colors"
            title="Download PNG Plot"
          >
            <Download className="w-3.5 h-3.5 text-[#9F80F8]" />
          </button>

          {/* Fullscreen */}
          {!compact && (
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1 rounded bg-obsidian-850 hover:bg-obsidian-800 text-slate-300 hover:text-white border border-obsidian-750 transition-colors"
              title={isFullscreen ? 'Exit Fullscreen' : 'Expand Plot'}
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          )}
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="flex justify-center items-center bg-black/60 rounded-lg p-1 overflow-x-auto">
        <canvas
          ref={canvasRef}
          width={compact ? 340 : isFullscreen ? 800 : 540}
          height={compact ? 220 : isFullscreen ? 480 : 340}
          className="rounded max-w-full shadow-inner border border-obsidian-850"
        />
      </div>

      {/* Caption & Metadata */}
      <div className="mt-2 text-[11px] text-slate-400 flex flex-wrap justify-between items-center px-1 font-mono">
        <span>
          BW: <strong className="text-slate-300">{bandwidth} MHz</strong> ({centerFreq.toFixed(1)} MHz center)
        </span>
        <span>
          W₅₀: <strong className="text-slate-300">{widthMs.toFixed(1)} ms</strong>
        </span>
        <span>
          DM: <strong className="text-[#9F80F8]">{dm.toFixed(1)} pc cm⁻³</strong>
        </span>
      </div>
    </div>
  );
};
