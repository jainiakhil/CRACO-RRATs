import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectPage } from './pages/ProjectPage';
import { DataReleasePage } from './pages/DataReleasePage';
import { VisualisationsPage } from './pages/VisualisationsPage';
import { PublicationsPage } from './pages/PublicationsPage';
import { AboutPage } from './pages/AboutPage';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-obsidian-950 text-slate-100 selection:bg-[#9F80F8]/30 selection:text-[#C4B2FB] font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/data-release" element={<DataReleasePage />} />
            <Route path="/visualisations" element={<VisualisationsPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
