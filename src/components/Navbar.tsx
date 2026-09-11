import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Radio, Database, BookOpen, Info, Github, Menu, X, ExternalLink, LineChart, Globe, Cpu } from 'lucide-react';
import logoImg from '../assets/logo.png';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: Radio },
    { name: 'Project', path: '/project', icon: Cpu },
    { name: 'Data Release', path: '/data-release', icon: Database },
    { name: 'Visualisations', path: '/visualisations', icon: LineChart },
    { name: 'Publications', path: '/publications', icon: BookOpen },
    { name: 'About', path: '/about', icon: Info },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-obsidian-950/90 border-b border-obsidian-750 transition-all">
      {/* Top Telemetry Header Stripe */}
      <div className="border-b border-obsidian-800/80 px-4 py-1 text-[10px] font-mono flex justify-between items-center text-slate-400 bg-obsidian-950">
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="tracking-wider">CRACO BACKEND // ONLINE</span>
          </span>
          <span className="hidden sm:inline text-obsidian-600">|</span>
          <span className="hidden sm:inline text-slate-500">MRO 26°42′15″S 116°40′17″E</span>
        </div>
        <div className="flex items-center space-x-3 font-mono">
          <span className="text-amber-400">37 DISCOVERIES</span>
          <span className="text-obsidian-600">|</span>
          <span className="text-slate-500">RES: 3.0 / 13.8 ms</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={logoImg}
              alt="CRACO RRATs Logo"
              className="w-9 h-9 rounded-full border border-purple-500/40 group-hover:border-amber-400 group-hover:shadow-[0_0_14px_rgba(168,85,247,0.4)] transition-all object-cover"
            />
            <div>
              <span className="text-base font-bold font-mono tracking-tight text-white flex items-center space-x-1.5">
                <span>CRACO</span>
                <span className="text-amber-400 font-extrabold">RRATs</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 text-xs font-mono">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md transition-all ${
                    active
                      ? 'bg-obsidian-850 text-amber-400 border border-amber-500/40 shadow-sm shadow-amber-500/10 font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-obsidian-850/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${active ? 'text-amber-400' : 'text-slate-500'}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action: GitHub Repository Link */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="h-4 w-px bg-obsidian-800" />
            <a
              href="https://github.com/jainiakhil/CRACO-RRATs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-xs font-mono text-slate-400 hover:text-amber-300 transition-colors py-1 px-2 rounded-md hover:bg-obsidian-850 border border-transparent hover:border-obsidian-750"
              title="GitHub Repository"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GH/CRACO-RRATs</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-obsidian-850 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-obsidian-800 bg-obsidian-950/98 px-4 pt-2 pb-4 space-y-1 font-mono text-xs">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg ${
                  active
                    ? 'bg-obsidian-850 text-amber-400 border border-amber-500/40'
                    : 'text-slate-300 hover:text-white hover:bg-obsidian-850/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.name}</span>
              </Link>
            );
          })}
          <div className="pt-2 border-t border-obsidian-850">
            <a
              href="https://github.com/jainiakhil/CRACO-RRATs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 text-xs text-slate-400 hover:text-amber-300"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
