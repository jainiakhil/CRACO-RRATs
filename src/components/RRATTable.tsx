import React, { useState } from 'react';
import { RRATEntry } from '../types/rrat';
import { ChevronUp, ChevronDown, ExternalLink, Download } from 'lucide-react';

interface RRATTableProps {
  data: RRATEntry[];
  onSelect: (rrat: RRATEntry) => void;
}

type SortField = 'name' | 'snr' | 'dm' | 'period' | 'w50' | 'pulses' | 'ra' | 'mjd';

export const RRATTable: React.FC<RRATTableProps> = ({ data, onSelect }) => {
  const [sortField, setSortField] = useState<SortField>('dm');
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const sortedData = [...data].sort((a, b) => {
    let valA: number | string = 0;
    let valB: number | string = 0;

    switch (sortField) {
      case 'name':
        valA = a.source_name;
        valB = b.source_name;
        break;
      case 'snr':
        valA = a.discovery_info.detection_snr ?? 0;
        valB = b.discovery_info.detection_snr ?? 0;
        break;
      case 'dm':
        valA = a.properties.best_dm_pc_cm3 ?? a.discovery_info.detection_dm_pc_cm3 ?? 0;
        valB = b.properties.best_dm_pc_cm3 ?? b.discovery_info.detection_dm_pc_cm3 ?? 0;
        break;
      case 'period':
        valA = a.properties.period_s ?? 9999;
        valB = b.properties.period_s ?? 9999;
        break;
      case 'w50':
        valA = a.properties.w50_burst_width_ms ?? 0;
        valB = b.properties.w50_burst_width_ms ?? 0;
        break;
      case 'pulses':
        valA = a.discovery_info.total_pulses ?? 0;
        valB = b.discovery_info.total_pulses ?? 0;
        break;
      case 'mjd':
        valA = a.discovery_info.detection_mjd ?? 0;
        valB = b.discovery_info.detection_mjd ?? 0;
        break;
      case 'ra':
        valA = a.properties.ra_j2000;
        valB = b.properties.ra_j2000;
        break;
    }

    if (valA < valB) return sortAsc ? -1 : 1;
    if (valA > valB) return sortAsc ? 1 : -1;
    return 0;
  });

  const renderSortIndicator = (field: SortField) => {
    if (sortField !== field) return null;
    return sortAsc ? (
      <ChevronUp className="w-3.5 h-3.5 inline ml-1 text-[#9F80F8]" />
    ) : (
      <ChevronDown className="w-3.5 h-3.5 inline ml-1 text-[#9F80F8]" />
    );
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-obsidian-800 bg-obsidian-950 shadow-xl reticle-box">
      <table className="w-full text-left text-xs border-collapse">
        <thead className="bg-obsidian-900/90 text-slate-300 font-mono text-[11px] uppercase tracking-wider border-b border-obsidian-800 sticky top-0 z-10 backdrop-blur">
          <tr>
            <th onClick={() => handleSort('name')} className="py-3.5 px-4 cursor-pointer hover:text-white">
              Source Name {renderSortIndicator('name')}
            </th>
            <th onClick={() => handleSort('dm')} className="py-3.5 px-3 cursor-pointer hover:text-white">
              DM (pc cm⁻³) {renderSortIndicator('dm')}
            </th>
            <th onClick={() => handleSort('snr')} className="py-3.5 px-3 cursor-pointer hover:text-white">
              S/N {renderSortIndicator('snr')}
            </th>
            <th onClick={() => handleSort('ra')} className="py-3.5 px-3 cursor-pointer hover:text-white">
              RA (J2000) {renderSortIndicator('ra')}
            </th>
            <th className="py-3.5 px-3">
              Dec (J2000)
            </th>
            <th onClick={() => handleSort('period')} className="py-3.5 px-3 cursor-pointer hover:text-white">
              Period P₀ (s) {renderSortIndicator('period')}
            </th>
            <th onClick={() => handleSort('w50')} className="py-3.5 px-3 cursor-pointer hover:text-white">
              W₅₀ (ms) {renderSortIndicator('w50')}
            </th>
            <th onClick={() => handleSort('pulses')} className="py-3.5 px-3 cursor-pointer hover:text-white">
              Pulses {renderSortIndicator('pulses')}
            </th>
            <th onClick={() => handleSort('mjd')} className="py-3.5 px-3 cursor-pointer hover:text-white">
              MJD {renderSortIndicator('mjd')}
            </th>
            <th className="py-3.5 px-4 text-right">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-obsidian-800/80 font-mono">
          {sortedData.map((rrat) => {
            const dm = rrat.properties.best_dm_pc_cm3 ?? rrat.discovery_info.detection_dm_pc_cm3 ?? 0;
            return (
              <tr
                key={rrat.source_name}
                onClick={() => onSelect(rrat)}
                className="hover:bg-obsidian-900/80 transition-colors cursor-pointer group"
              >
                <td className="py-3 px-4 font-bold text-white group-hover:text-[#C4B2FB]">
                  {rrat.source_name}
                </td>
                <td className="py-3 px-3 text-[#9F80F8] font-semibold">
                  {dm.toFixed(1)}
                </td>
                <td className="py-3 px-3 text-slate-200">
                  {rrat.discovery_info.detection_snr?.toFixed(1) ?? '—'}
                </td>
                <td className="py-3 px-3 text-slate-300">
                  {rrat.properties.ra_j2000}
                </td>
                <td className="py-3 px-3 text-slate-300">
                  {rrat.properties.dec_j2000}
                </td>
                <td className="py-3 px-3">
                  {rrat.properties.period_s !== null ? (
                    <span className="text-emerald-400 font-semibold">{rrat.properties.period_s.toFixed(3)}</span>
                  ) : (
                    <span className="text-slate-500 italic text-[10px]">Unsolved</span>
                  )}
                </td>
                <td className="py-3 px-3 text-slate-300">
                  {rrat.properties.w50_burst_width_ms ?? '—'}
                </td>
                <td className="py-3 px-3 text-slate-300">
                  {rrat.discovery_info.total_pulses ?? 1}
                </td>
                <td className="py-3 px-3 text-slate-400 text-[11px]">
                  {rrat.discovery_info.detection_mjd?.toFixed(2) ?? '—'}
                </td>
                <td className="py-3 px-4 text-right">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelect(rrat);
                    }}
                    className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-obsidian-850 hover:bg-violet-950/70 text-slate-300 hover:text-[#C4B2FB] text-xs transition border border-obsidian-750 hover:border-[#9F80F8]/40"
                  >
                    <span>Inspect</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
