import React from 'react';
import { Link } from 'react-router-dom';
import { Database, LineChart, Cpu, ArrowRight, Radio, Compass, Zap, Layers, Sparkles, ExternalLink } from 'lucide-react';
import { INITIAL_RRATS_DATA, getSummaryStats } from '../data/rratsData';
import logoImg from '../assets/logo.png';

export const HomePage: React.FC = () => {
  const stats = getSummaryStats(INITIAL_RRATS_DATA);

  return (
    <div className="space-y-16 pb-16 bg-dot-matrix">
      
      {/* MINIMALIST HIGH-IMPACT HERO */}
      <section className="relative pt-12 pb-14 border-b border-obsidian-800 bg-gradient-to-b from-obsidian-900/80 to-obsidian-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          {/* Official Mission Emblem */}
          <div className="flex justify-center mb-1">
            <div className="relative group">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-purple-600 via-amber-500 to-cyan-500 opacity-30 group-hover:opacity-60 blur-lg transition duration-500"></div>
              <img
                src={logoImg}
                alt="CRACO RRATs Mission Patch"
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-2xl border-2 border-purple-500/40 group-hover:scale-105 transition-transform"
              />
            </div>
          </div>

          {/* Telemetry Status Pill */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-obsidian-900 border border-amber-500/30 text-amber-300 text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>ASKAP CRACO FAST TRANSIENT ARCHIVE</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold font-sans tracking-tight text-white leading-tight">
            Unveiling the <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">De-Biased Galactic</span> RRAT Population
          </h1>

          {/* Concise Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Real-time coherent image-plane search on the Australian Square Kilometre Array Pathfinder. 
            Overcoming historical low-DM blindness to recover the local and distant sporadic neutron star census.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-wrap justify-center items-center gap-3 pt-2 font-mono text-xs">
            <Link
              to="/data-release"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-obsidian-950 font-bold tracking-wide transition shadow-lg shadow-amber-500/20"
            >
              <Database className="w-4 h-4" />
              <span>EXPLORE DATA RELEASE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/visualisations"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-obsidian-850 hover:bg-obsidian-800 text-amber-300 border border-amber-500/40 transition"
            >
              <LineChart className="w-4 h-4 text-amber-400" />
              <span>3D ORBIT & PLOTS</span>
            </Link>

            <Link
              to="/project"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-obsidian-900 hover:bg-obsidian-850 text-slate-300 border border-obsidian-750 transition"
            >
              <Cpu className="w-4 h-4 text-slate-400" />
              <span>THE PROJECT</span>
            </Link>
          </div>

          {/* High-Contrast Telemetry Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-6">
            <div className="reticle-box bg-obsidian-900/90 border border-obsidian-800 p-4 rounded-xl text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                // CATALOGUED SOURCES
              </span>
              <span className="text-3xl font-extrabold font-mono text-white">
                {stats.total}
              </span>
              <span className="text-[10px] text-amber-400 font-mono block mt-1">Confirmed RRATs</span>
            </div>

            <div className="reticle-box bg-obsidian-900/90 border border-obsidian-800 p-4 rounded-xl text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                // LOWEST DM DETECTED
              </span>
              <span className="text-3xl font-extrabold font-mono text-emerald-400">
                {stats.minDm.toFixed(1)}
              </span>
              <span className="text-[10px] text-slate-400 font-mono block mt-1">pc cm⁻³ (J1606−0854)</span>
            </div>

            <div className="reticle-box bg-obsidian-900/90 border border-obsidian-800 p-4 rounded-xl text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                // HIGHEST RECORDED DM
              </span>
              <span className="text-3xl font-extrabold font-mono text-amber-400">
                {stats.maxDm.toFixed(1)}
              </span>
              <span className="text-[10px] text-slate-400 font-mono block mt-1">pc cm⁻³ (J1743−2754)</span>
            </div>

            <div className="reticle-box bg-obsidian-900/90 border border-obsidian-800 p-4 rounded-xl text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                // ASTROMETRIC ACCURACY
              </span>
              <span className="text-3xl font-extrabold font-mono text-cyan-400">
                &lt; 1″
              </span>
              <span className="text-[10px] text-slate-400 font-mono block mt-1">Direct visibility image</span>
            </div>
          </div>

        </div>
      </section>

      {/* THREE STRATEGIC PILLARS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-obsidian-800 pb-2">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center space-x-1.5">
            <Radio className="w-3.5 h-3.5" />
            <span>OBSERVATORY PORTALS</span>
          </span>
          <span className="text-[11px] font-mono text-slate-500">SYSTEM GATEWAYS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Gateway 1: Data Release */}
          <Link
            to="/data-release"
            className="group reticle-box bg-obsidian-900/70 hover:bg-obsidian-850 border border-obsidian-800 hover:border-amber-500/40 p-6 rounded-2xl transition duration-300 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <Database className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-white font-mono group-hover:text-amber-300 transition-colors">
                Data Release Catalog
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Browse all 37 CRACO discoveries. Inspect discovery parameters, multi-model distance estimates (NE2001, NE2025, YMW16), 
                and dynamic spectra waterfall plots.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-mono text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>View Source Catalog</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>

          {/* Gateway 2: Visualisations */}
          <Link
            to="/visualisations"
            className="group reticle-box bg-obsidian-900/70 hover:bg-obsidian-850 border border-obsidian-800 hover:border-cyan-500/40 p-6 rounded-2xl transition duration-300 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                <LineChart className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-white font-mono group-hover:text-cyan-300 transition-colors">
                Interactive Visualisations
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rotate a 3D celestial sphere around Earth showing 3D space positions, or plot any pair of physical properties in real-time with customizable X-Y axes.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
              <span>Launch Visual Tools</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>

          {/* Gateway 3: Project Science */}
          <Link
            to="/project"
            className="group reticle-box bg-obsidian-900/70 hover:bg-obsidian-850 border border-obsidian-800 hover:border-emerald-500/40 p-6 rounded-2xl transition duration-300 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-white font-mono group-hover:text-emerald-300 transition-colors">
                The Science Project
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Read how CRACO's coherent image-plane search eliminates zero-DM filter bias, alongside technical details on ASKAP PAFs and Murriyang / Parkes follow-up.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">
              <span>Read Science Architecture</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>

        </div>
      </section>

      {/* DISCOVERY SPOTLIGHTS (EXTREMES OF THE SURVEY) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex items-center justify-between border-b border-obsidian-800 pb-2">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
            // SPOTLIGHT DISCOVERIES
          </span>
          <span className="text-[11px] font-mono text-amber-400">KEY TRANSIENTS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          {/* Extreme 1: J1606-0854 */}
          <div className="p-4 bg-obsidian-900 border border-obsidian-800 rounded-xl space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-emerald-300">J1606−0854</span>
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[10px]">
                LOWEST DM: 4.5 pc cm⁻³
              </span>
            </div>
            <p className="text-slate-400 font-sans text-xs leading-relaxed">
              Empirical proof that CRACO is immune to the low-DM blindness of traditional surveys. Located in the solar neighbourhood with an established rotation period P₀ = 1.813 seconds.
            </p>
            <div className="pt-1 text-[11px] text-slate-500 flex justify-between">
              <span>S/N: 24.3</span>
              <span>Dist: 0.6 kpc (NE2025)</span>
            </div>
          </div>

          {/* Extreme 2: J1743-2754 */}
          <div className="p-4 bg-obsidian-900 border border-obsidian-800 rounded-xl space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-amber-300">J1743−2754</span>
              <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/30 text-[10px]">
                HIGHEST RRAT DM: 1011.9 pc cm⁻³
              </span>
            </div>
            <p className="text-slate-400 font-sans text-xs leading-relaxed">
              The highest recorded Dispersion Measure for any RRAT in astronomical history, demonstrating that CRACO retains sensitivity across extreme Galactic column densities.
            </p>
            <div className="pt-1 text-[11px] text-slate-500 flex justify-between">
              <span>S/N: 10.5</span>
              <span>Dist: 28.1 kpc (NE2025)</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
