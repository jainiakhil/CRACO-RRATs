import React from 'react';
import { Cpu, Radio, Compass, Zap, Layers, Sparkles, BookOpen, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProjectPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 animate-fadeIn">
      
      {/* Page Header */}
      <div className="bg-obsidian-900 border border-obsidian-800 rounded-2xl p-6 sm:p-10 space-y-3 reticle-box">
        <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs uppercase tracking-wider">
          <Cpu className="w-4 h-4" />
          <span>Scientific Mission & System Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
          The CRACO RRATs Project
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed font-light">
          A comprehensive overview of the astrophysical motivations, the mathematical challenge of 
          low-DM blindness in traditional single-dish surveys, and how the CRACO coherent image-plane upgrade 
          to ASKAP and Murriyang / Parkes follow-up are resolving the true Galactic population of sporadic neutron stars.
        </p>
      </div>

      {/* SECTION 1: What is an RRAT? */}
      <section className="space-y-4">
        <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 uppercase tracking-wider border-b border-obsidian-800 pb-2">
          <Radio className="w-4 h-4" />
          <span>Section 01 // Astrophysical Nature of RRATs</span>
        </div>
        <h2 className="text-2xl font-bold text-white font-sans">
          Sporadic Radio-Quiet Neutron Stars
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs text-slate-300 leading-relaxed">
          <div className="lg:col-span-2 space-y-3">
            <p>
              Rotating Radio Transients (RRATs) represent a class of sporadically emitting, radio-quiet neutron stars 
              characterised by infrequent, short (2–30 ms), and relatively bright single pulses of radio emission 
              (100 mJy to ~10 Jy at 1.4 GHz) rather than continuous, periodic pulse trains. Discovered in 2006 through 
              re-analysis of archival data from the Parkes Multi-beam Pulsar Survey (PMPS, McLaughlin et al. 2006), 
              their extreme intermittency prevents them from being detected in standard Fourier-domain periodicity searches; 
              instead, they must be found through single-pulse search pipelines.
            </p>
            <p>
              When placed on the period–period derivative (<em>P</em>–<em>Ṗ</em>) diagram, timed RRATs generally occupy a distinct 
              phase space, exhibiting long spin periods (typically 1 to 7 seconds) and surface magnetic field strengths 
              of order 10<sup>12</sup> G. Situated close to the theoretical radio pulsar deathline, the RRAT phenomenon likely 
              represents a late evolutionary phase where the star's emission mechanism becomes increasingly unstable, 
              leading to extreme nulling fractions exceeding 99%.
            </p>
          </div>

          <div className="bg-obsidian-900 border border-obsidian-800 rounded-xl p-4 space-y-2.5 font-mono text-xs">
            <span className="text-amber-400 font-semibold block text-[11px] uppercase tracking-wider">
              Key Physical Parameters
            </span>
            <div className="flex justify-between border-b border-obsidian-800 pb-1.5">
              <span className="text-slate-400">Burst Widths (W₅₀):</span>
              <span className="text-white">2 – 30 ms</span>
            </div>
            <div className="flex justify-between border-b border-obsidian-800 pb-1.5">
              <span className="text-slate-400">Rotation Periods (P₀):</span>
              <span className="text-white">0.7 – 7.8 s</span>
            </div>
            <div className="flex justify-between border-b border-obsidian-800 pb-1.5">
              <span className="text-slate-400">Nulling Fractions:</span>
              <span className="text-emerald-400">&gt; 99%</span>
            </div>
            <div className="flex justify-between border-b border-obsidian-800 pb-1.5">
              <span className="text-slate-400">Surface B-field:</span>
              <span className="text-white">~10¹² G</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-slate-400">Evolutionary State:</span>
              <span className="text-amber-300">Pulsar Deathline</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Low-DM Blindness */}
      <section className="space-y-4">
        <div className="flex items-center space-x-2 text-xs font-mono text-rose-400 uppercase tracking-wider border-b border-obsidian-800 pb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Section 02 // Selection Bias & Low-DM Blindness</span>
        </div>
        <h2 className="text-2xl font-bold text-white font-sans">
          The Zero-DM Filter Limitation in Single-Dish Surveys
        </h2>

        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            Traditional untargeted searches have historically relied on single-dish radio telescopes such as the 
            64-m Murriyang/Parkes dish and Green Bank Telescope. Single dishes operate in the time domain by incoherently 
            summing antenna feeds, rendering them exceptionally vulnerable to terrestrial Radio Frequency Interference (RFI).
          </p>

          {/* Mathematical formulation card */}
          <div className="bg-obsidian-900 border border-obsidian-800 p-5 rounded-xl font-mono text-xs space-y-2">
            <span className="text-amber-400 block text-[11px] uppercase tracking-wider">
              Zero-DM Common-Mode Subtraction Filter
            </span>
            <p className="text-slate-300 font-sans">
              To mitigate terrestrial RFI, standard pipelines calculate the band-averaged intensity across all channels 
              and subtract it from each individual channel at time sample $t_j$:
            </p>
            <div className="p-3 bg-obsidian-950 rounded-lg text-amber-300 overflow-x-auto text-center font-mono my-2 border border-obsidian-800">
              S'(f_i, t_j) = S(f_i, t_j) - (1 / N_chans) · &Sigma; S(f_k, t_j)
            </div>
            <p className="text-slate-400 font-sans">
              While this effectively removes broadband terrestrial interference, it introduces a severe physical selection 
              effect: For celestial sources in the local solar neighbourhood (DM &lt; 15 pc cm⁻³), the dispersive sweep across 
              the observing band is virtually non-existent. The genuine astronomical burst arrives almost simultaneously across all 
              channels, causing the filter to treat the cosmic pulse as terrestrial RFI and subtract it out entirely.
            </p>
          </div>

          <p>
            This <strong>"low-DM blindness"</strong> has systematically restricted historical surveys to high-DM sightlines along the 
            Galactic plane, creating a distorted view of the neutron star scale height and local birthrate.
          </p>
        </div>
      </section>

      {/* SECTION 3: CRACO Coherent Solution */}
      <section className="space-y-4">
        <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider border-b border-obsidian-800 pb-2">
          <Zap className="w-4 h-4" />
          <span>Section 03 // The CRACO Interferometric Solution</span>
        </div>
        <h2 className="text-2xl font-bold text-white font-sans">
          Real-Time Coherent Searching in the Image Plane
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed">
          <div className="space-y-3">
            <p>
              The CRAFT Coherent (CRACO) upgrade on ASKAP bypasses these limitations by operating directly in the 
              interferometric image plane. Raw channelised voltage data from phased array feeds (PAFs) across 36 antennas 
              are correlated in real time to form complex visibilities <em>V<sub>ij</sub>(f, t)</em> on millisecond timescales 
              (13.8 ms and 3 ms modes).
            </p>
            <p>
              Because terrestrial RFI originates locally in the near-field, it does not phase-cohere across the 6-kilometer 
              physical baselines of the ASKAP array. Local RFI decorrelates and is naturally suppressed during dirty imaging, 
              appearing as diffuse background noise rather than compact point sources.
            </p>
          </div>

          <div className="space-y-3 bg-obsidian-900 border border-obsidian-800 p-4 rounded-xl">
            <span className="text-cyan-400 font-mono font-semibold block text-[11px] uppercase tracking-wider">
              The Two Transformative Advantages:
            </span>
            <div className="space-y-2">
              <div>
                <strong className="text-white block font-mono text-xs">1. Full Sensitivity Down to DM &asymp; 0 pc cm⁻³</strong>
                <span className="text-slate-400">Zero-DM subtraction filters are never applied, fully restoring search sensitivity to the local Galactic volume.</span>
              </div>
              <div className="pt-2 border-t border-obsidian-800">
                <strong className="text-white block font-mono text-xs">2. Arcsecond Astrometry From Visibilities</strong>
                <span className="text-slate-400">Detected bursts trigger an automated dump of the voltage transient buffer, allowing sub-arcsecond offline localisation to rule out host galaxies and distinguish RRATs from FRBs.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ASKAP & Parkes Medusa Follow-up */}
      <section className="space-y-4">
        <div className="flex items-center space-x-2 text-xs font-mono text-indigo-400 uppercase tracking-wider border-b border-obsidian-800 pb-2">
          <Compass className="w-4 h-4" />
          <span>Section 04 // Commensal Operations & Murriyang Follow-Up</span>
        </div>
        <h2 className="text-2xl font-bold text-white font-sans">
          ASKAP Commensal Breadth & Parkes Medusa Timing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed">
          <div className="p-5 bg-obsidian-900 border border-obsidian-800 rounded-xl space-y-2">
            <span className="font-mono text-xs text-white font-bold block">ASKAP Commensal Surveys</span>
            <p>
              Operating commensally with Survey Science Projects (EMU, VAST, FLASH, WALLABY, RACS), CRACO covers ~30 square degrees 
              per pointing without dedicated telescope scheduling. This heterogeneous coverage ensures a completely unbiased, 
              serendipitous sampling of the Southern sky.
            </p>
          </div>

          <div className="p-5 bg-obsidian-900 border border-obsidian-800 rounded-xl space-y-2">
            <span className="font-mono text-xs text-white font-bold block">Murriyang (Parkes 64m) Follow-Up</span>
            <p>
              15 high-priority CRACO discoveries are tracked with the 64-m dish using the Medusa backend (22.5h allocation). 
              Operating with 64 &mu;s time resolution and 0.5 MHz frequency channels, coherent de-dispersion enables full-Stokes 
              polarimetry and period factorisation using <code>rratsolve</code>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: Next Steps CTA */}
      <div className="p-6 bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-obsidian-800 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="font-mono font-bold text-white text-base">Ready to inspect the discovered sources?</h3>
          <p className="text-xs text-slate-400 mt-0.5">Explore parameters, dynamic spectra, or 3D celestial sphere plots.</p>
        </div>
        <div className="flex space-x-3 font-mono text-xs">
          <Link
            to="/data-release"
            className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-obsidian-950 font-bold transition"
          >
            Data Release
          </Link>
          <Link
            to="/visualisations"
            className="px-4 py-2 rounded-lg bg-obsidian-800 hover:bg-obsidian-750 text-white border border-obsidian-700 transition"
          >
            Visualisations
          </Link>
        </div>
      </div>

    </div>
  );
};
