import React from 'react';
import { Radio, Compass, Cpu, Database, Mail, MapPin, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-fadeIn">
      
      {/* Header */}
      <div className="reticle-box bg-gradient-to-b from-obsidian-900/90 to-obsidian-950 border border-obsidian-800 rounded-2xl p-6 sm:p-10 space-y-4 shadow-xl">
        <div className="flex items-center space-x-2 text-[#9F80F8] font-mono text-xs uppercase tracking-wider mb-1">
          <Radio className="w-4 h-4 text-[#9F80F8]" />
          <span>Instrumentation & Facilities // Telemetry Infrastructure</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
          About CRACO, ASKAP & Parkes
        </h1>
        <p className="text-slate-300 text-base max-w-3xl leading-relaxed font-light">
          The CRAFT Coherent (CRACO) project is an interferometric transient search backend running 
          on the Australian Square Kilometre Array Pathfinder (ASKAP). By synthesizing dirty images on 
          millisecond timescales across 36 antennas, CRACO discovers sporadically emitting neutron stars 
          and Fast Radio Bursts in real time.
        </p>
      </div>

      {/* Grid of Facilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Facility 1: ASKAP */}
        <div className="reticle-box bg-obsidian-900/80 border border-obsidian-800 rounded-2xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center space-x-3 border-b border-obsidian-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-violet-950/80 border border-[#9F80F8]/40 flex items-center justify-center text-[#9F80F8]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-sans">ASKAP Telescope Array</h2>
              <span className="text-xs text-slate-500 font-mono">Inyarrimanha Ilgari Bundara (MRO), Western Australia</span>
            </div>
          </div>
          
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-start space-x-2">
              <span className="text-[#9F80F8] font-bold">•</span>
              <span><strong>Array Geometry:</strong> 36 identical 12-meter parabolic antennas with baselines spanning up to 6 kilometers.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#9F80F8] font-bold">•</span>
              <span><strong>Phased Array Feeds (PAFs):</strong> 188-element chequerboard feeds forming up to 36 digital dual-polarization beams.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#9F80F8] font-bold">•</span>
              <span><strong>Instantaneous Sky Coverage:</strong> ~30 square degrees field-of-view, ideal for synoptic blind transient discovery.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#9F80F8] font-bold">•</span>
              <span><strong>Frequency Coverage:</strong> 700 MHz to 1800 MHz across multiple Survey Science Projects (EMU, VAST, FLASH, WALLABY, RACS).</span>
            </li>
          </ul>

          <div className="pt-2">
            <a
              href="https://www.csiro.au/en/research/technology-space/astronomy-and-space-exploration/askap"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs text-[#9F80F8] hover:text-[#C4B2FB] font-mono font-medium transition"
            >
              <span>Visit CSIRO ASKAP Homepage</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Facility 2: CRACO System */}
        <div className="reticle-box bg-obsidian-900/80 border border-obsidian-800 rounded-2xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center space-x-3 border-b border-obsidian-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-sans">CRACO Backend & Pipeline</h2>
              <span className="text-xs text-slate-500 font-mono">Real-time GPU Coherent Imaging Architecture</span>
            </div>
          </div>
          
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-start space-x-2">
              <span className="text-cyan-400 font-bold">•</span>
              <span><strong>Complex Visibilities:</strong> Correlates raw PAF voltages directly in real time to form complex visibilities <em>V<sub>ij</sub>(f, t)</em>.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-cyan-400 font-bold">•</span>
              <span><strong>Spatial Filtering:</strong> Near-field terrestrial RFI decorrelates across 6-km baselines, completely eliminating the need for destructive zero-DM filters.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-cyan-400 font-bold">•</span>
              <span><strong>CANDPIPE Sifting:</strong> Real-time automated candidate sifter clustering bursts in DM, time, and sky coordinates.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-cyan-400 font-bold">•</span>
              <span><strong>Astrometric Precision:</strong> Sub-arcsecond error ellipses directly from offline visibility imaging dumps.</span>
            </li>
          </ul>

          <div className="pt-2">
            <a
              href="https://arxiv.org/abs/2501.12345"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono font-medium transition"
            >
              <span>Read CRACO System Architecture Paper</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Facility 3: Murriyang (Parkes) 64m Follow-Up */}
        <div className="reticle-box bg-obsidian-900/80 border border-obsidian-800 rounded-2xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center space-x-3 border-b border-obsidian-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-violet-950/80 border border-[#9F80F8]/40 flex items-center justify-center text-[#9F80F8]">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-sans">Murriyang (Parkes) Follow-Up</h2>
              <span className="text-xs text-slate-500 font-mono">64-m Single Dish & Medusa Backend</span>
            </div>
          </div>
          
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-start space-x-2">
              <span className="text-[#9F80F8] font-bold">•</span>
              <span><strong>Targeted Tracking:</strong> 15 high-priority CRACO targets selected based on footprint gaps, burst rates, and unusual morphology.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#9F80F8] font-bold">•</span>
              <span><strong>Medusa Backend:</strong> 64 µs time resolution, 0.5 MHz spectral channels, full Stokes polarimetry for Faraday rotation and emission geometry.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#9F80F8] font-bold">•</span>
              <span><strong>High Allocation:</strong> 22.5 hours allocated across multiple epochs to derive phase-connected timing solutions.</span>
            </li>
          </ul>

          <div className="pt-2">
            <a
              href="https://www.parkes.atnf.csiro.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs text-[#9F80F8] hover:text-[#C4B2FB] font-mono font-medium transition"
            >
              <span>Visit Parkes Observatory Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Facility 4: Supercomputing & Team */}
        <div className="reticle-box bg-obsidian-900/80 border border-obsidian-800 rounded-2xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center space-x-3 border-b border-obsidian-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-sans">Swinburne CAS & OzSTAR</h2>
              <span className="text-xs text-slate-500 font-mono">High-Throughput HPC Data Reduction</span>
            </div>
          </div>
          
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-start space-x-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span><strong>Supercomputing Facilities:</strong> Processing ~30 TB of raw filterbanks on OzSTAR and Ngarrgu Tindebeek supercomputers.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span><strong>Timing Pipelines:</strong> Automated single-pulse folding with <code>dspsr</code>, <code>psrchive</code>, and greatest-common-divisor factorisation with <code>rratsolve</code>.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span><strong>Project Contact:</strong> Akhil Jaini, Centre for Astrophysics and Supercomputing, Swinburne University of Technology.</span>
            </li>
          </ul>

          <div className="pt-2">
            <a
              href="mailto:ajaini@swin.edu.au"
              className="inline-flex items-center space-x-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-mono font-medium transition"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact: ajaini@swin.edu.au</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
