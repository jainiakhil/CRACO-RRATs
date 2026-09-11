import React, { useState } from 'react';
import { PUBLICATIONS_DATA } from '../data/publicationsData';
import { Publication } from '../types/publication';
import { BookOpen, ExternalLink, Copy, Check, Search, FileText, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export const PublicationsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBibtex, setSelectedBibtex] = useState<Publication | null>(null);
  const [bibtexCopied, setBibtexCopied] = useState<boolean>(false);
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({
    'jaini-2026-craco-rrats': true
  });

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredPublications = PUBLICATIONS_DATA.filter(pub => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      pub.title.toLowerCase().includes(q) ||
      pub.leadAuthor.toLowerCase().includes(q) ||
      pub.authors.some(a => a.toLowerCase().includes(q)) ||
      pub.journal.toLowerCase().includes(q) ||
      pub.keywords.some(k => k.toLowerCase().includes(q))
    );
  });

  const handleCopyBibtex = (bibtex: string) => {
    navigator.clipboard.writeText(bibtex);
    setBibtexCopied(true);
    setTimeout(() => setBibtexCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="reticle-box bg-gradient-to-b from-obsidian-900/90 to-obsidian-950 border border-obsidian-800 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl">
        <div className="flex items-center space-x-2 text-[#9F80F8] font-mono text-xs uppercase tracking-wider mb-1">
          <BookOpen className="w-4 h-4 text-[#9F80F8]" />
          <span>Scientific Literature // Bibliography</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
          CRACO Publications & Preprints
        </h1>
        <p className="text-slate-300 text-sm max-w-2xl font-light leading-relaxed">
          Refereed journal publications and preprints describing discoveries of Rotating Radio Transients (RRATs), 
          the CRAFT Coherent (CRACO) backend on ASKAP, and Murriyang / Parkes follow-up timing.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
          <Search className="h-4 w-4 text-[#9F80F8]" />
        </div>
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2.5 bg-obsidian-950 border border-obsidian-750 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#9F80F8] font-mono transition"
          placeholder="Search by title, author, or keyword..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Publication Cards */}
      <div className="space-y-6">
        {filteredPublications.map((pub) => {
          const isExpanded = expandedAbstracts[pub.id] ?? false;

          return (
            <div
              key={pub.id}
              className={`p-6 rounded-2xl border transition-all ${
                pub.isHighlighted
                  ? 'bg-gradient-to-b from-obsidian-900/90 to-obsidian-950/90 border-[#9F80F8]/50 shadow-lg shadow-[#9F80F8]/10 reticle-box'
                  : 'bg-obsidian-900/70 border-obsidian-800 hover:border-obsidian-750'
              }`}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
                <div className="space-y-1">
                  {pub.isHighlighted && (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-violet-950 text-[#C4B2FB] border border-[#9F80F8]/40 mb-1">
                      <Sparkles className="w-3 h-3 text-[#9F80F8]" />
                      <span>Primary Discovery Paper</span>
                    </span>
                  )}
                  <h2 className="text-xl font-bold text-white tracking-tight leading-snug font-sans">
                    {pub.title}
                  </h2>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <span className="px-3 py-1 rounded-lg bg-obsidian-850 border border-obsidian-750 font-mono text-xs font-semibold text-slate-300">
                    {pub.year}
                  </span>
                </div>
              </div>

              {/* Authors & Journal */}
              <div className="space-y-1 text-xs mb-4">
                <div className="text-slate-300 font-medium">
                  {pub.authors.join(', ')}
                </div>
                <div className="text-[#9F80F8] font-mono text-[11px]">
                  {pub.journal} {pub.volume && `vol. ${pub.volume}`} {pub.pages && `pp. ${pub.pages}`}
                </div>
              </div>

              {/* Abstract */}
              <div className="text-xs text-slate-300 bg-obsidian-950 p-4 rounded-xl border border-obsidian-800/80 mb-4 leading-relaxed">
                <div className="flex justify-between items-center mb-1 cursor-pointer" onClick={() => toggleAbstract(pub.id)}>
                  <span className="font-semibold text-slate-400 uppercase tracking-wider font-mono text-[10px]">
                    // Abstract
                  </span>
                  <button className="text-slate-400 hover:text-white flex items-center space-x-1 text-[11px] font-mono">
                    <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                </div>
                <p className={`${isExpanded ? '' : 'line-clamp-2'} text-slate-300 font-sans`}>
                  {pub.abstract}
                </p>
              </div>

              {/* Keywords & Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {pub.keywords.map((kw, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-obsidian-850 border border-obsidian-800 text-slate-400 font-mono">
                      #{kw}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-2 font-mono">
                  <button
                    onClick={() => setSelectedBibtex(pub)}
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-obsidian-850 hover:bg-obsidian-800 text-slate-200 border border-obsidian-750 transition"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#9F80F8]" />
                    <span>Cite BibTeX</span>
                  </button>
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-violet-950/80 hover:bg-violet-900/80 text-[#C4B2FB] border border-[#9F80F8]/40 transition"
                    >
                      <span>DOI</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {pub.arxivId && (
                    <a
                      href={`https://arxiv.org/abs/${pub.arxivId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-obsidian-850 hover:bg-obsidian-800 text-slate-300 border border-obsidian-750 transition"
                    >
                      <span>arXiv</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* BibTeX Modal */}
      {selectedBibtex && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedBibtex(null);
          }}
        >
          <div className="bg-obsidian-900 border border-obsidian-750 rounded-2xl w-full max-w-xl p-6 shadow-2xl space-y-4 reticle-box">
            <div className="flex justify-between items-center border-b border-obsidian-800 pb-3">
              <h3 className="font-bold text-white text-base font-mono">
                BibTeX Entry: {selectedBibtex.id}
              </h3>
              <button
                onClick={() => setSelectedBibtex(null)}
                className="text-slate-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <pre className="p-4 bg-obsidian-950 rounded-xl border border-obsidian-800 text-xs font-mono text-[#C4B2FB] overflow-x-auto max-h-72">
              {selectedBibtex.bibtex}
            </pre>

            <div className="flex justify-end space-x-3 pt-2 font-mono">
              <button
                onClick={() => handleCopyBibtex(selectedBibtex.bibtex)}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#9F80F8] hover:bg-[#845EF6] text-obsidian-950 font-bold text-xs transition shadow-lg shadow-[#9F80F8]/20"
              >
                {bibtexCopied ? <Check className="w-4 h-4 text-emerald-950" /> : <Copy className="w-4 h-4" />}
                <span>{bibtexCopied ? 'Copied to Clipboard!' : 'Copy BibTeX'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
