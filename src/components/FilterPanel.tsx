import React, { useRef } from 'react';
import { Search, Filter, Download, LayoutGrid, List, Upload, SlidersHorizontal } from 'lucide-react';
import { DmCategory, EpochCategory, TimingStatusCategory, RRATEntry } from '../types/rrat';

interface FilterPanelProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedDm: DmCategory;
  setSelectedDm: (dm: DmCategory) => void;
  selectedEpoch: EpochCategory;
  setSelectedEpoch: (epoch: EpochCategory) => void;
  selectedTiming: TimingStatusCategory;
  setSelectedTiming: (status: TimingStatusCategory) => void;
  viewMode: 'cards' | 'table';
  setViewMode: (mode: 'cards' | 'table') => void;
  totalResults: number;
  onExportCsv: () => void;
  onExportJson: () => void;
  onImportCustomJson: (newRrat: RRATEntry) => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  searchQuery,
  setSearchQuery,
  selectedDm,
  setSelectedDm,
  selectedEpoch,
  setSelectedEpoch,
  selectedTiming,
  setSelectedTiming,
  viewMode,
  setViewMode,
  totalResults,
  onExportCsv,
  onExportJson,
  onImportCustomJson,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (json.source_name && json.discovery_info) {
          onImportCustomJson(json as RRATEntry);
        } else {
          alert("Invalid RRAT JSON format. Please ensure it has source_name and discovery_info matching mockdata_test.json");
        }
      } catch (err) {
        alert("Could not parse JSON file: " + err);
      }
    };
    reader.readAsText(file);
    // Reset
    e.target.value = '';
  };

  return (
    <div className="bg-space-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
      {/* Top row: Search bar + View Toggle + Export */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        
        {/* Search input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2.5 bg-space-950 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 font-mono transition"
            placeholder="Search by source (e.g. J1743), survey field, or SBID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* View Toggle & Actions */}
        <div className="flex flex-wrap items-center gap-2">
          {/* View Mode Buttons */}
          <div className="flex bg-space-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                viewMode === 'cards'
                  ? 'bg-slate-800 text-cyan-400 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Grid Card View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cards</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                viewMode === 'table'
                  ? 'bg-slate-800 text-cyan-400 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Interactive Table View"
            >
              <List className="w-3.5 h-3.5" />
              <span>Table</span>
            </button>
          </div>

          {/* Export Dropdown / Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onExportCsv}
              className="flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
              title="Download Filtered Catalog as CSV"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>CSV</span>
            </button>
            <button
              onClick={onExportJson}
              className="flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
              title="Download Filtered Catalog as JSON"
            >
              <Download className="w-3.5 h-3.5 text-purple-400" />
              <span>JSON</span>
            </button>
            
            {/* Import JSON feature */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".json"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-medium bg-cyan-950/60 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-500/30 transition"
              title="Import local JSON file to catalog (e.g. mockdata_test.json)"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Import JSON</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Selectors */}
      <div className="pt-3 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        
        {/* DM Range */}
        <div>
          <label className="block text-slate-400 mb-1.5 font-medium flex items-center space-x-1">
            <SlidersHorizontal className="w-3 h-3 text-cyan-400" />
            <span>Dispersion Measure (DM)</span>
          </label>
          <select
            value={selectedDm}
            onChange={(e) => setSelectedDm(e.target.value as DmCategory)}
            className="w-full bg-space-950 border border-slate-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
          >
            <option value="all">All DMs</option>
            <option value="low">Low-DM (&lt; 20 pc cm⁻³)</option>
            <option value="medium">Intermediate (20 – 100 pc cm⁻³)</option>
            <option value="high">High-DM (&gt; 100 pc cm⁻³)</option>
          </select>
        </div>

        {/* Time Resolution Epoch */}
        <div>
          <label className="block text-slate-400 mb-1.5 font-medium">
            Time Resolution Epoch
          </label>
          <select
            value={selectedEpoch}
            onChange={(e) => setSelectedEpoch(e.target.value as EpochCategory)}
            className="w-full bg-space-950 border border-slate-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
          >
            <option value="all">All Epochs</option>
            <option value="3ms">3 ms High-Res Survey Mode</option>
            <option value="13.8ms">13.8 ms Nominal Survey Mode</option>
            <option value="110ms">110 ms Commissioning Epoch</option>
          </select>
        </div>

        {/* Timing / Period Status */}
        <div>
          <label className="block text-slate-400 mb-1.5 font-medium">
            Rotation Period Status
          </label>
          <select
            value={selectedTiming}
            onChange={(e) => setSelectedTiming(e.target.value as TimingStatusCategory)}
            className="w-full bg-space-950 border border-slate-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
          >
            <option value="all">All Sources</option>
            <option value="period_known">Period Identified (P₀ solved)</option>
            <option value="unresolved">Period Unconstrained</option>
          </select>
        </div>
      </div>

      {/* Results Count Banner */}
      <div className="flex justify-between items-center text-xs text-slate-400 pt-1">
        <span>
          Showing <strong className="text-cyan-300 font-mono">{totalResults}</strong> sources matching filters
        </span>
        {(searchQuery || selectedDm !== 'all' || selectedEpoch !== 'all' || selectedTiming !== 'all') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedDm('all');
              setSelectedEpoch('all');
              setSelectedTiming('all');
            }}
            className="text-cyan-400 hover:text-cyan-300 underline text-xs"
          >
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
};
