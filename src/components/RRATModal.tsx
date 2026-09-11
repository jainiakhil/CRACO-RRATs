import React, { useState } from 'react';
import { RRATEntry } from '../types/rrat';
import { DynamicSpectraViewer } from './DynamicSpectraViewer';
import {
  X,
  ExternalLink,
  Download,
  Copy,
  Check,
  Radio,
  Clock,
  Compass,
  FileText,
  Activity,
  Layers,
  Sparkles,
} from 'lucide-react';

interface RRATModalProps {
  rrat: RRATEntry | null;
  onClose: () => void;
}

export const RRATModal: React.FC<RRATModalProps> = ({ rrat, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'spectra' | 'additional' | 'json'>('overview');

  if (!rrat) return null;

  const getLinkUrl = (type: string | null, url?: string | null) => {
    if (url) return url;
    if (!type) return 'https://data.csiro.au/domain/casda';
    if (type.toLowerCase().includes('realtime')) {
      return `https://research.csiro.au/casda/`;
    }
    if (type.toLowerCase().includes('casda') || type.toLowerCase().includes('archive')) {
      return `https://data.csiro.au/domain/casda`;
    }
    return `https://data.csiro.au/domain/casda`;
  };

  const linkTargetUrl = getLinkUrl(rrat.additional_info.link_type, rrat.additional_info.link_url);

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(rrat, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(rrat, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${rrat.source_name}_craco_discovery.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-obsidian-900 border border-obsidian-750 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden reticle-box">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-obsidian-800 bg-obsidian-950/80">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-violet-950/80 border border-[#9F80F8]/40 flex items-center justify-center text-[#9F80F8]">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white font-mono tracking-tight">
                  {rrat.source_name}
                </h2>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-cyan-950/70 text-cyan-300 border border-cyan-500/30 font-mono">
                  S/N {rrat.discovery_info.detection_snr ?? 'N/A'}
                </span>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-violet-950/70 text-[#C4B2FB] border border-[#9F80F8]/40 font-mono">
                  DM {rrat.discovery_info.detection_dm_pc_cm3 ?? 'N/A'}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                ASKAP CRACO Coherent Discovery • {rrat.additional_info.associated_survey ?? 'Commensal'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleDownloadJson}
              className="hidden sm:flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-obsidian-850 hover:bg-obsidian-800 text-slate-200 border border-obsidian-750 transition"
              title="Download JSON"
            >
              <Download className="w-3.5 h-3.5 text-[#9F80F8]" />
              <span>JSON</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-obsidian-800 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex px-6 pt-2 border-b border-obsidian-800 bg-obsidian-950/50 text-sm overflow-x-auto font-mono">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2.5 px-3 font-medium transition-colors border-b-2 flex items-center space-x-1.5 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-[#9F80F8] text-[#C4B2FB]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-4 h-4 text-[#9F80F8]" />
            <span>Overview & Properties</span>
          </button>
          <button
            onClick={() => setActiveTab('spectra')}
            className={`pb-2.5 px-3 font-medium transition-colors border-b-2 flex items-center space-x-1.5 whitespace-nowrap ${
              activeTab === 'spectra'
                ? 'border-[#9F80F8] text-[#C4B2FB]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Dynamic Spectra</span>
          </button>
          <button
            onClick={() => setActiveTab('additional')}
            className={`pb-2.5 px-3 font-medium transition-colors border-b-2 flex items-center space-x-1.5 whitespace-nowrap ${
              activeTab === 'additional'
                ? 'border-[#9F80F8] text-[#C4B2FB]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <ExternalLink className="w-4 h-4 text-emerald-400" />
            <span>Additional Info & Links</span>
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`pb-2.5 px-3 font-medium transition-colors border-b-2 flex items-center space-x-1.5 whitespace-nowrap ${
              activeTab === 'json'
                ? 'border-[#9F80F8] text-[#C4B2FB]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-4 h-4 text-purple-400" />
            <span>Raw JSON</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Primary Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Discovery Parameters Card */}
                <div className="bg-obsidian-850/80 border border-obsidian-800 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-obsidian-800 pb-2">
                    <div className="flex items-center space-x-2 text-[#9F80F8] font-semibold text-sm font-mono">
                      <Sparkles className="w-4 h-4" />
                      <span>Discovery Parameters</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      MJD {rrat.discovery_info.detection_mjd?.toFixed(4) ?? 'N/A'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs font-mono">
                    <div>
                      <span className="text-slate-400 block font-sans">Detection S/N</span>
                      <span className="text-white font-medium text-sm">
                        {rrat.discovery_info.detection_snr?.toFixed(2) ?? 'N/A'}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-sans">Detection DM</span>
                      <span className="text-[#9F80F8] font-medium text-sm">
                        {rrat.discovery_info.detection_dm_pc_cm3?.toFixed(2) ?? 'N/A'} <span className="text-[10px] text-slate-400">pc cm⁻³</span>
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-sans">Time Resolution</span>
                      <span className="text-white">
                        {rrat.discovery_info.time_resolution_ms ?? 'N/A'} ms
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-sans">Boxcar Width</span>
                      <span className="text-white">
                        {rrat.discovery_info.boxcar_width_samples ?? 0} samples
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-sans">Observation Dwell</span>
                      <span className="text-white">
                        {rrat.discovery_info.observation_length_hr !== null ? `${rrat.discovery_info.observation_length_hr} hr` : '—'}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-sans">Total Pulses</span>
                      <span className="text-white">
                        {rrat.discovery_info.total_pulses ?? '1'}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-400 block font-sans">Burst Activity Rate</span>
                      <span className="text-[#C4B2FB]">
                        {rrat.discovery_info.burst_rate_per_hr !== null ? `${rrat.discovery_info.burst_rate_per_hr} bursts / hr` : 'Single event observed'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Astrometric & Physical Properties Card */}
                <div className="bg-obsidian-850/80 border border-obsidian-800 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-obsidian-800 pb-2">
                    <div className="flex items-center space-x-2 text-[#9F80F8] font-semibold text-sm font-mono">
                      <Compass className="w-4 h-4" />
                      <span>Astrometry & Properties</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">J2000 Coordinates</span>
                  </div>

                  <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs font-mono">
                    <div className="col-span-2 bg-obsidian-950 p-2 rounded-lg border border-obsidian-800">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400 font-sans">Right Ascension (RA):</span>
                        <span className="text-[#C4B2FB] font-semibold">
                          {rrat.properties.ra_j2000}
                          {rrat.properties.ra_uncertainty_arcsec && (
                            <span className="text-slate-500 text-[10px]"> (±{rrat.properties.ra_uncertainty_arcsec}")</span>
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-xs mt-1">
                        <span className="text-slate-400 font-sans">Declination (Dec):</span>
                        <span className="text-[#C4B2FB] font-semibold">
                          {rrat.properties.dec_j2000}
                          {rrat.properties.dec_uncertainty_arcsec && (
                            <span className="text-slate-500 text-[10px]"> (±{rrat.properties.dec_uncertainty_arcsec}")</span>
                          )}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-slate-400 block font-sans">Best Fit DM</span>
                      <span className="text-[#9F80F8] font-medium">
                        {rrat.properties.best_dm_pc_cm3 ?? rrat.discovery_info.detection_dm_pc_cm3} pc cm⁻³
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-sans">Burst Width (W₅₀)</span>
                      <span className="text-white font-medium">
                        {rrat.properties.w50_burst_width_ms ?? 'N/A'} ms
                      </span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-400 block font-sans">Underlying Rotation Period (P₀)</span>
                      <span className="text-sm font-semibold">
                        {rrat.properties.period_s !== null ? (
                          <span className="text-emerald-400">{rrat.properties.period_s} seconds</span>
                        ) : (
                          <span className="text-slate-500 text-xs italic font-sans">Unconstrained (Timing follow-up required)</span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Distance Estimates Panel */}
              <div className="bg-obsidian-850/60 border border-obsidian-800 rounded-xl p-4">
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono mb-3">
                  // Galactic Electron Density Distance Estimates (kpc)
                </h4>
                <div className="grid grid-cols-3 gap-3 text-center font-mono">
                  <div className="bg-obsidian-950 p-3 rounded-lg border border-obsidian-800">
                    <span className="text-[11px] text-slate-400 block mb-1 font-sans">NE2001 Model</span>
                    <span className="font-bold text-white text-base">
                      {rrat.properties.distance_kpc.ne2001 !== null ? `${rrat.properties.distance_kpc.ne2001} kpc` : '—'}
                    </span>
                  </div>
                  <div className="bg-obsidian-950 p-3 rounded-lg border border-obsidian-800">
                    <span className="text-[11px] text-slate-400 block mb-1 font-sans">NE2025 Model</span>
                    <span className="font-bold text-cyan-300 text-base">
                      {rrat.properties.distance_kpc.ne2025 !== null ? `${rrat.properties.distance_kpc.ne2025} kpc` : '—'}
                    </span>
                  </div>
                  <div className="bg-obsidian-950 p-3 rounded-lg border border-obsidian-800">
                    <span className="text-[11px] text-slate-400 block mb-1 font-sans">YMW16 Model</span>
                    <span className="font-bold text-[#9F80F8] text-base">
                      {rrat.properties.distance_kpc.ymw16 !== null ? `${rrat.properties.distance_kpc.ymw16} kpc` : '—'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Dynamic Spectra Preview */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
                    // Dynamic Spectra Preview
                  </h4>
                  <button
                    onClick={() => setActiveTab('spectra')}
                    className="text-xs text-[#9F80F8] hover:text-[#C4B2FB] flex items-center space-x-1 font-mono transition"
                  >
                    <span>Expand view</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
                <DynamicSpectraViewer rrat={rrat} compact={true} />
              </div>
            </div>
          )}

          {/* TAB 2: DYNAMIC SPECTRA (FULL VIEW) */}
          {activeTab === 'spectra' && (
            <div className="space-y-4">
              <div className="bg-obsidian-850/70 p-4 rounded-xl border border-obsidian-800 text-xs text-slate-300 leading-relaxed font-sans">
                <p>
                  <strong className="text-white">About this dynamic spectrum:</strong> Dynamic spectra (waterfall plots) represent received 
                  flux intensity across frequency channels over time. The CRACO image-plane pipeline recovers 
                  sporadic single bursts directly from complex visibilities without requiring destructive zero-DM filtering.
                  Toggle between <em>Dedispersed</em> and <em>Dispersed Sweep</em> to inspect the characteristic 
                  dispersion sweep (&Delta;t &prop; DM &middot; f<sup>-2</sup>).
                </p>
              </div>
              <DynamicSpectraViewer rrat={rrat} compact={false} />
            </div>
          )}

          {/* TAB 3: ADDITIONAL INFO & LINKS */}
          {activeTab === 'additional' && (
            <div className="space-y-6">
              <div className="bg-obsidian-850/80 border border-obsidian-800 rounded-xl p-5 space-y-4">
                <div className="flex items-center space-x-2 text-[#9F80F8] font-semibold text-sm border-b border-obsidian-800 pb-2 font-mono">
                  <Layers className="w-4 h-4" />
                  <span>Observation Metadata & Survey Link</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="bg-obsidian-950 p-3 rounded-lg border border-obsidian-800">
                    <span className="text-slate-400 block mb-1 font-sans">Discovery SBID</span>
                    <span className="text-white text-base font-semibold">
                      {rrat.additional_info.discovery_sbid ?? 'N/A'}
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-0.5 font-sans">ASKAP Scheduling Block ID</span>
                  </div>

                  <div className="bg-obsidian-950 p-3 rounded-lg border border-obsidian-800">
                    <span className="text-slate-400 block mb-1 font-sans">PAF Beam Number</span>
                    <span className="text-white text-base font-semibold">
                      Beam {rrat.additional_info.beam ?? 'N/A'}
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-0.5 font-sans">Phased Array Feed digital beam index</span>
                  </div>

                  <div className="bg-obsidian-950 p-3 rounded-lg border border-obsidian-800">
                    <span className="text-slate-400 block mb-1 font-sans">Survey Field</span>
                    <span className="text-[#C4B2FB] text-base font-semibold">
                      {rrat.additional_info.field ?? 'General Survey Field'}
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-0.5 font-sans">ASKAP Survey Tile identifier</span>
                  </div>

                  <div className="bg-obsidian-950 p-3 rounded-lg border border-obsidian-800">
                    <span className="text-slate-400 block mb-1 font-sans">Start Time (UTC)</span>
                    <span className="text-white text-sm">
                      {rrat.additional_info.start_time_utc ?? 'N/A'}
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-0.5 font-sans">Observation Epoch</span>
                  </div>

                  <div className="bg-obsidian-950 p-3 rounded-lg border border-obsidian-800">
                    <span className="text-slate-400 block mb-1 font-sans">Central Frequency</span>
                    <span className="text-white text-base font-semibold">
                      {rrat.additional_info.central_freq_mhz ?? rrat.discovery_info.detection_frequency_mhz ?? 920.5} MHz
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-0.5 font-sans">Observing band centre</span>
                  </div>

                  <div className="bg-obsidian-950 p-3 rounded-lg border border-obsidian-800">
                    <span className="text-slate-400 block mb-1 font-sans">Parkes Follow-Up Status</span>
                    <span className="text-emerald-400 text-sm font-semibold">
                      {rrat.additional_info.followup_status ?? 'Archival Follow-up'}
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-0.5 font-sans">Murriyang 64m Medusa Campaign</span>
                  </div>
                </div>

                {/* External Link Section */}
                <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-violet-950/40 via-obsidian-900 to-obsidian-950 border border-[#9F80F8]/30">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs uppercase tracking-wider font-mono text-[#C4B2FB] font-semibold">
                          External Data Link ({rrat.additional_info.link_type ?? 'Data Portal'})
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded bg-violet-950 text-[#C4B2FB] border border-[#9F80F8]/40 font-mono">
                          {rrat.additional_info.link_type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 font-sans">
                        Direct access to observation archive, raw candidate data, or CASDA scheduling blocks.
                      </p>
                    </div>
                    <a
                      href={linkTargetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#9F80F8] hover:bg-[#845EF6] text-obsidian-950 font-bold text-xs font-mono transition shadow-lg shadow-[#9F80F8]/20"
                    >
                      <span>Open Link ({rrat.additional_info.link_type})</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Scientific Notes */}
                {rrat.additional_info.notes && (
                  <div className="bg-obsidian-950 p-3.5 rounded-lg border border-obsidian-800 text-xs">
                    <span className="text-slate-400 block font-semibold mb-1 font-mono">// Scientific Notes:</span>
                    <p className="text-slate-300 leading-relaxed font-sans">
                      {rrat.additional_info.notes}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: RAW JSON */}
          {activeTab === 'json' && (
            <div className="space-y-3 font-mono">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">// Machine-Readable Discovery JSON</span>
                <div className="flex space-x-2">
                  <button
                    onClick={handleCopyJson}
                    className="flex items-center space-x-1 px-2.5 py-1 rounded bg-obsidian-850 hover:bg-obsidian-800 text-slate-300 text-xs transition border border-obsidian-750"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy JSON'}</span>
                  </button>
                  <button
                    onClick={handleDownloadJson}
                    className="flex items-center space-x-1 px-2.5 py-1 rounded bg-violet-950/70 hover:bg-violet-900/80 text-[#C4B2FB] border border-[#9F80F8]/40 text-xs transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download File</span>
                  </button>
                </div>
              </div>

              <pre className="p-4 bg-obsidian-950 border border-obsidian-800 rounded-xl text-xs font-mono text-[#C4B2FB] overflow-x-auto max-h-96">
                {JSON.stringify(rrat, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-obsidian-800 bg-obsidian-950/90 flex flex-wrap justify-between items-center text-xs text-slate-400 font-mono">
          <div className="flex items-center space-x-2">
            <span>Cite as:</span>
            <span className="text-slate-300">Jaini et al. (2026), MNRAS</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-obsidian-850 hover:bg-obsidian-800 text-white font-medium text-xs transition border border-obsidian-750"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
