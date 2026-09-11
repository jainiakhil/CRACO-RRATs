import React from 'react';
import { ExternalLink, Radio, Globe, BookOpen, LineChart, Cpu, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian-950 border-t border-obsidian-800 text-slate-400 text-xs mt-20 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Overview */}
          <div className="md:col-span-2 space-y-3 font-sans">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-md bg-obsidian-900 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Radio className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-white text-sm font-mono tracking-tight">CRACO RRATs Survey</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-lg font-light">
              The CRAFT Coherent (CRACO) upgrade on the Australian Square Kilometre Array Pathfinder (ASKAP) 
              carries out real-time coherent image-plane fast transient searches across Southern sky surveys, 
              revealing the de-biased Galactic population of Rotating Radio Transients (RRATs).
            </p>
            <div className="text-[11px] text-slate-500 pt-1 font-mono">
              Centre for Astrophysics and Supercomputing (CAS), Swinburne University of Technology &amp; OzGrav.
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-3 uppercase tracking-wider text-amber-400">Observatory</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/project" className="hover:text-amber-400 transition-colors">
                  The Science Project
                </Link>
              </li>
              <li>
                <Link to="/data-release" className="hover:text-amber-400 transition-colors">
                  Data Release Catalog
                </Link>
              </li>
              <li>
                <Link to="/visualisations" className="hover:text-amber-400 transition-colors">
                  3D Orbit &amp; Visualisations
                </Link>
              </li>
              <li>
                <Link to="/publications" className="hover:text-amber-400 transition-colors">
                  Publications &amp; Preprints
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Facilities */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-3 uppercase tracking-wider text-amber-400">Facilities</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.csiro.au/en/research/technology-space/astronomy-and-space-exploration/askap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 hover:text-amber-400 transition-colors"
                >
                  <span>CSIRO ASKAP Array</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.parkes.atnf.csiro.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 hover:text-amber-400 transition-colors"
                >
                  <span>Murriyang (Parkes 64m)</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://data.csiro.au/domain/casda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 hover:text-amber-400 transition-colors"
                >
                  <span>CASDA Archive</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://rratalog.github.io/rratalog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 hover:text-amber-400 transition-colors"
                >
                  <span>RRATalog Database</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Traditional Custodians Acknowledgement */}
        <div className="pt-6 border-t border-obsidian-850 text-[11px] text-slate-500 leading-relaxed space-y-2">
          <p>
            We acknowledge the Wajarri Yamaji as the Traditional Owners and native title holders of Inyarrimanha Ilgari Bundara, 
            the CSIRO Murchison Radio-astronomy Observatory site where ASKAP is located. We also acknowledge the Wiradjuri people 
            as the traditional custodians of the Parkes Observatory site (Murriyang).
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 text-slate-500 text-[11px]">
            <p>© {new Date().getFullYear()} CRACO Team &amp; Centre for Astrophysics and Supercomputing, Swinburne University.</p>
            <p className="mt-2 sm:mt-0 text-slate-400">
              Curated by Akhil Jaini (<a href="mailto:ajaini@swin.edu.au" className="hover:text-amber-400 underline">ajaini@swin.edu.au</a>)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
