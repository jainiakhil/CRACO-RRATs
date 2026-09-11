import React from 'react';
import { RRATEntry } from '../types/rrat';
import { ChevronRight, Radio, Compass, Clock, Activity, Zap } from 'lucide-react';

interface RRATCardProps {
  rrat: RRATEntry;
  onSelect: (rrat: RRATEntry) => void;
}

export const RRATCard: React.FC<RRATCardProps> = ({ rrat, onSelect }) => {
  const dm = rrat.properties.best_dm_pc_cm3 ?? rrat.discovery_info.detection_dm_pc_cm3 ?? 0;
  const isLowDm = dm < 20.0;
  const isUltraHighDm = dm > 500.0;
  const hasPeriod = rrat.properties.period_s !== null;

  return (
    <div
      onClick={() => onSelect(rrat)}
      className="group relative bg-obsidian-900/90 border border-obsidian-800 hover:border-[#9F80F8]/50 rounded-2xl p-5 shadow-lg shadow-black/40 hover:shadow-[#9F80F8]/10 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden reticle-box"
    >
      {/* Glow highlight on hover */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-[#9F80F8]/5 rounded-full blur-2xl group-hover:bg-[#9F80F8]/15 transition-all" />

      <div>
        {/* Header: Name + Badges */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-obsidian-850 border border-obsidian-750 flex items-center justify-center text-[#9F80F8] group-hover:border-[#9F80F8]/40 group-hover:scale-105 transition-all">
              <Radio className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-mono font-bold text-lg text-white group-hover:text-[#C4B2FB] transition-colors tracking-tight">
                {rrat.source_name}
              </h3>
              <span className="text-[10px] text-slate-500 font-mono">
                {rrat.additional_info.associated_survey ?? 'ASKAP CRACO'}
              </span>
            </div>
          </div>

          {/* DM & SNR Badges */}
          <div className="flex flex-col items-end space-y-1">
            <span
              className={`text-[11px] font-mono px-2 py-0.5 rounded-full font-semibold border ${
                isLowDm
                  ? 'bg-emerald-950/70 text-emerald-300 border-emerald-500/40'
                  : isUltraHighDm
                  ? 'bg-rose-950/70 text-rose-300 border-rose-500/40'
                  : 'bg-violet-950/70 text-[#C4B2FB] border-[#9F80F8]/40'
              }`}
            >
              DM {dm.toFixed(1)}
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              S/N <strong className="text-white">{rrat.discovery_info.detection_snr?.toFixed(1) ?? 'N/A'}</strong>
            </span>
          </div>
        </div>

        {/* FRONT & CENTRE: Discovery Info & Properties */}
        <div className="space-y-2.5 text-xs mt-3 pt-3 border-t border-obsidian-800">
          
          {/* Coordinates */}
          <div className="flex justify-between items-center bg-obsidian-950 px-2.5 py-1.5 rounded-lg border border-obsidian-800 font-mono text-[11px]">
            <span className="text-slate-400 flex items-center space-x-1">
              <Compass className="w-3 h-3 text-[#9F80F8]" />
              <span>J2000:</span>
            </span>
            <span className="text-slate-200">
              {rrat.properties.ra_j2000.split('.')[0]}, {rrat.properties.dec_j2000.split('.')[0]}
            </span>
          </div>

          {/* Property Rows */}
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="bg-obsidian-850/60 p-2 rounded-lg border border-obsidian-800">
              <span className="text-slate-400 block text-[10px]">Burst Width (W₅₀)</span>
              <span className="font-mono text-white font-medium">
                {rrat.properties.w50_burst_width_ms ? `${rrat.properties.w50_burst_width_ms} ms` : '—'}
              </span>
            </div>
            <div className="bg-obsidian-850/60 p-2 rounded-lg border border-obsidian-800">
              <span className="text-slate-400 block text-[10px]">Distance (NE2025)</span>
              <span className="font-mono text-cyan-300 font-medium">
                {rrat.properties.distance_kpc.ne2025 ? `${rrat.properties.distance_kpc.ne2025} kpc` : '—'}
              </span>
            </div>
          </div>

          {/* Spin Period or Status */}
          <div className="flex justify-between items-center py-1 text-xs">
            <span className="text-slate-400 flex items-center space-x-1">
              <Clock className="w-3 h-3 text-[#9F80F8]" />
              <span>Rotation Period (P₀):</span>
            </span>
            <span className="font-mono font-medium">
              {hasPeriod ? (
                <span className="text-emerald-400">{rrat.properties.period_s?.toFixed(3)} s</span>
              ) : (
                <span className="text-slate-500 text-[11px] italic">Timing in progress</span>
              )}
            </span>
          </div>

          {/* Pulses & Burst Activity */}
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400 flex items-center space-x-1">
              <Zap className="w-3 h-3 text-cyan-400" />
              <span>Observed Pulses:</span>
            </span>
            <span className="font-mono text-slate-200">
              {rrat.discovery_info.total_pulses ?? 1}{' '}
              {rrat.discovery_info.burst_rate_per_hr && (
                <span className="text-slate-400 text-[10px]">({rrat.discovery_info.burst_rate_per_hr}/hr)</span>
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Footer / Trigger Details */}
      <div className="mt-4 pt-3 border-t border-obsidian-800 flex items-center justify-between text-xs text-[#9F80F8] group-hover:text-[#C4B2FB] transition-colors font-mono">
        <span className="font-medium text-[11px]">View Dynamic Spectra & Details</span>
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};
