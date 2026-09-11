import React, { useState, useMemo } from 'react';
import { INITIAL_RRATS_DATA } from '../data/rratsData';
import { RRATEntry, DmCategory, EpochCategory, TimingStatusCategory } from '../types/rrat';
import { RRATCard } from '../components/RRATCard';
import { RRATTable } from '../components/RRATTable';
import { RRATModal } from '../components/RRATModal';
import { FilterPanel } from '../components/FilterPanel';
import { Database, Sparkles, Map, Info, AlertCircle, CheckCircle2 } from 'lucide-react';

export const DataReleasePage: React.FC = () => {
  const [rrats, setRrats] = useState<RRATEntry[]>(INITIAL_RRATS_DATA);
  const [selectedRrat, setSelectedRrat] = useState<RRATEntry | null>(null);

  // Filter States
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDm, setSelectedDm] = useState<DmCategory>('all');
  const [selectedEpoch, setSelectedEpoch] = useState<EpochCategory>('all');
  const [selectedTiming, setSelectedTiming] = useState<TimingStatusCategory>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [importNotification, setImportNotification] = useState<string | null>(null);

  // Filtering Logic
  const filteredRrats = useMemo(() => {
    return rrats.filter((item) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.source_name.toLowerCase().includes(query);
        const matchesField = item.additional_info.field?.toLowerCase().includes(query) ?? false;
        const matchesSbid = item.additional_info.discovery_sbid?.toString().includes(query) ?? false;
        const matchesSurvey = item.additional_info.associated_survey?.toLowerCase().includes(query) ?? false;
        if (!matchesName && !matchesField && !matchesSbid && !matchesSurvey) {
          return false;
        }
      }

      // 2. DM Range
      const dm = item.properties.best_dm_pc_cm3 ?? item.discovery_info.detection_dm_pc_cm3 ?? 0;
      if (selectedDm === 'low' && dm >= 20.0) return false;
      if (selectedDm === 'medium' && (dm < 20.0 || dm > 100.0)) return false;
      if (selectedDm === 'high' && dm <= 100.0) return false;

      // 3. Epoch Filter
      const tres = item.discovery_info.time_resolution_ms;
      if (selectedEpoch === '3ms' && tres !== 3.0) return false;
      if (selectedEpoch === '13.8ms' && tres !== 13.8) return false;
      if (selectedEpoch === '110ms' && tres !== 110.0) return false;

      // 4. Timing / Period Filter
      const hasPeriod = item.properties.period_s !== null;
      if (selectedTiming === 'period_known' && !hasPeriod) return false;
      if (selectedTiming === 'unresolved' && hasPeriod) return false;

      return true;
    });
  }, [rrats, searchQuery, selectedDm, selectedEpoch, selectedTiming]);

  // Handle Export to CSV
  const handleExportCsv = () => {
    const headers = [
      'Source_Name',
      'Detection_MJD',
      'Detection_SNR',
      'Detection_DM',
      'Best_DM',
      'RA_J2000',
      'Dec_J2000',
      'Period_s',
      'W50_ms',
      'Total_Pulses',
      'Burst_Rate_hr',
      'Time_Res_ms',
      'Distance_NE2001_kpc',
      'Distance_NE2025_kpc',
      'Distance_YMW16_kpc',
      'Discovery_SBID',
      'PAF_Beam',
      'Field',
      'Link_Type',
      'Link_URL'
    ];

    const rows = filteredRrats.map((r) => [
      r.source_name,
      r.discovery_info.detection_mjd ?? '',
      r.discovery_info.detection_snr ?? '',
      r.discovery_info.detection_dm_pc_cm3 ?? '',
      r.properties.best_dm_pc_cm3 ?? '',
      `"${r.properties.ra_j2000}"`,
      `"${r.properties.dec_j2000}"`,
      r.properties.period_s ?? '',
      r.properties.w50_burst_width_ms ?? '',
      r.discovery_info.total_pulses ?? '',
      r.discovery_info.burst_rate_per_hr ?? '',
      r.discovery_info.time_resolution_ms ?? '',
      r.properties.distance_kpc.ne2001 ?? '',
      r.properties.distance_kpc.ne2025 ?? '',
      r.properties.distance_kpc.ymw16 ?? '',
      r.additional_info.discovery_sbid ?? '',
      r.additional_info.beam ?? '',
      r.additional_info.field ?? '',
      r.additional_info.link_type ?? '',
      r.additional_info.link_url ?? ''
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `craco_rrats_catalogue_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  // Handle Export to JSON
  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(filteredRrats, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `craco_rrats_catalogue_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Handle Custom JSON Ingestion
  const handleImportCustomJson = (newRrat: RRATEntry) => {
    // Check if source exists, if so update it; otherwise append
    const exists = rrats.some(r => r.source_name === newRrat.source_name);
    if (exists) {
      setRrats(prev => prev.map(r => r.source_name === newRrat.source_name ? newRrat : r));
      setImportNotification(`Updated entry for ${newRrat.source_name}`);
    } else {
      setRrats(prev => [newRrat, ...prev]);
      setImportNotification(`Successfully added ${newRrat.source_name} to the active catalogue`);
    }

    // Auto-open imported source
    setSelectedRrat(newRrat);

    setTimeout(() => {
      setImportNotification(null);
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="reticle-box bg-gradient-to-b from-obsidian-900/90 to-obsidian-950 border border-obsidian-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center space-x-2 text-[#9F80F8] font-mono text-xs uppercase tracking-wider mb-1">
              <Database className="w-4 h-4 text-[#9F80F8]" />
              <span>ASKAP CRACO Data Release // Catalogue</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Rotating Radio Transients Catalogue
            </h1>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl font-light leading-relaxed">
              Coherently detected single-pulse transients from the ASKAP CRACO image-plane pipeline, 
              including arcsecond astrometry, multi-model distance estimates, and dynamic spectra.
            </p>
          </div>

          {/* Quick Epoch Selector (similar to MSPSRPI phases) */}
          <div className="flex flex-wrap gap-1.5 bg-obsidian-950 p-1.5 rounded-xl border border-obsidian-800 text-xs font-mono">
            <button
              onClick={() => setSelectedEpoch('all')}
              className={`px-3 py-1.5 rounded-lg transition ${
                selectedEpoch === 'all'
                  ? 'bg-obsidian-800 text-white font-semibold shadow-sm border border-obsidian-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Epochs
            </button>
            <button
              onClick={() => setSelectedEpoch('3ms')}
              className={`px-3 py-1.5 rounded-lg transition ${
                selectedEpoch === '3ms'
                  ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              3 ms Mode
            </button>
            <button
              onClick={() => setSelectedEpoch('13.8ms')}
              className={`px-3 py-1.5 rounded-lg transition ${
                selectedEpoch === '13.8ms'
                  ? 'bg-violet-950/80 text-[#C4B2FB] border border-[#9F80F8]/50 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              13.8 ms Mode
            </button>
            <button
              onClick={() => setSelectedEpoch('110ms')}
              className={`px-3 py-1.5 rounded-lg transition ${
                selectedEpoch === '110ms'
                  ? 'bg-purple-950/80 text-purple-300 border border-purple-500/40 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              110 ms Pilot
            </button>
          </div>
        </div>

        {/* Live Notification Bar */}
        {importNotification && (
          <div className="flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 px-4 py-2.5 rounded-xl text-xs font-mono animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{importNotification}</span>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <FilterPanel
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedDm={selectedDm}
        setSelectedDm={setSelectedDm}
        selectedEpoch={selectedEpoch}
        setSelectedEpoch={setSelectedEpoch}
        selectedTiming={selectedTiming}
        setSelectedTiming={setSelectedTiming}
        viewMode={viewMode}
        setViewMode={setViewMode}
        totalResults={filteredRrats.length}
        onExportCsv={handleExportCsv}
        onExportJson={handleExportJson}
        onImportCustomJson={handleImportCustomJson}
      />

      {/* Results View: Cards or Table */}
      {filteredRrats.length === 0 ? (
        <div className="text-center py-16 bg-obsidian-900/40 border border-obsidian-800 rounded-2xl space-y-3">
          <AlertCircle className="w-10 h-10 text-slate-500 mx-auto" />
          <h3 className="text-lg font-bold text-white font-mono">No RRATs match your criteria</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Try clearing search queries or relaxing DM and epoch filters to view the full catalogue.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedDm('all');
              setSelectedEpoch('all');
              setSelectedTiming('all');
            }}
            className="px-4 py-2 rounded-xl bg-[#9F80F8] hover:bg-[#845EF6] text-obsidian-950 font-bold text-xs transition shadow-lg shadow-[#9F80F8]/20"
          >
            Reset All Filters
          </button>
        </div>
      ) : viewMode === 'cards' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRrats.map((rrat) => (
            <RRATCard
              key={rrat.source_name}
              rrat={rrat}
              onSelect={setSelectedRrat}
            />
          ))}
        </div>
      ) : (
        <RRATTable
          data={filteredRrats}
          onSelect={setSelectedRrat}
        />
      )}

      {/* Modal for Details ("behind another click") */}
      <RRATModal
        rrat={selectedRrat}
        onClose={() => setSelectedRrat(null)}
      />

    </div>
  );
};
