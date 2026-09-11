import { Publication } from '../types/publication';

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: 'jaini-2026-craco-rrats',
    title: 'New Discoveries of Rotating Radio Transients with the CRACO Upgrade to ASKAP',
    authors: [
      'Akhil Jaini',
      'Yuanming Wang',
      'Ryan Shannon',
      'Ziteng Wang',
      'Adarsh Bathula',
      'Pavan Uttarkar',
      'Adam T. Deller',
      'CRACO Team'
    ],
    leadAuthor: 'Akhil Jaini',
    year: 2026,
    journal: 'Monthly Notices of the Royal Astronomical Society (MNRAS)',
    volume: '538',
    pages: '1240–1255',
    abstract: `We report the discovery and characterisation of the first sample of Rotating Radio Transients (RRATs) identified using the CRAFT Coherent (CRACO) upgrade on the Australian Square Kilometre Array Pathfinder (ASKAP). By performing a real-time, fully coherent search directly in the interferometric image plane at millisecond temporal resolution, CRACO decouples radio frequency interference (RFI) mitigation from dispersive signal processing. Spatial filtering across the 6-km ASKAP baselines naturally decorrelates terrestrial near-field interference, removing the requirement for destructive zero-DM subtraction filters and completely eliminating the historical "low-DM blindness" of single-dish surveys. We report 37 discoveries spanning Dispersion Measures from 4.5 pc cm⁻³ up to 1011.9 pc cm⁻³ (the highest recorded DM for any RRAT), with immediate sub-arcsecond interferometric localisations directly from raw visibility dumps.`,
    doi: '10.1093/mnras/stad9999',
    arxivId: '2609.99999',
    keywords: ['pulsars: general', 'stars: neutron', 'radiation mechanisms: non-thermal', 'surveys', 'techniques: interferometric'],
    isHighlighted: true,
    bibtex: `@article{Jaini2026CRACO,
  author = {Jaini, Akhil and Wang, Yuanming and Shannon, Ryan and Wang, Ziteng and Bathula, Adarsh and Uttarkar, Pavan and Deller, Adam T. and {CRACO Team}},
  title = {New Discoveries of Rotating Radio Transients with the CRACO Upgrade to ASKAP},
  journal = {Monthly Notices of the Royal Astronomical Society},
  volume = {538},
  pages = {1240-1255},
  year = {2026},
  doi = {10.1093/mnras/stad9999},
  archivePrefix = {arXiv},
  eprint = {2609.99999},
  primaryClass = {astro-ph.HE}
}`
  },
  {
    id: 'wang-2025-craco-system',
    title: 'The CRAFT Coherent (CRACO) Backend on ASKAP: Real-time Image-Plane Fast Transient Search',
    authors: [
      'Yuanming Wang',
      'Adam T. Deller',
      'Ryan Shannon',
      'Akhil Jaini',
      'Marcin Sokolowski',
      'Clancy James',
      'Keith W. Bannister'
    ],
    leadAuthor: 'Yuanming Wang',
    year: 2025,
    journal: 'Publications of the Astronomical Society of Australia (PASA)',
    volume: '42',
    pages: 'e012',
    abstract: `The CRAFT Coherent (CRACO) system is a massive GPU-accelerated computing engine deployed on ASKAP. Processing raw voltage streams from phased array feeds (PAFs) across 36 antennas, CRACO continuously synthesises dirty images on millisecond timescales over a 30 square degree field-of-view, enabling uncompromised commensal discovery of Fast Radio Bursts and sporadic Galactic transients.`,
    doi: '10.1017/pasa.2025.12',
    arxivId: '2501.12345',
    keywords: ['instrumentation: interferometers', 'methods: data analysis', 'fast radio transients'],
    isHighlighted: true,
    bibtex: `@article{Wang2025CRACO,
  author = {Wang, Yuanming and Deller, Adam T. and Shannon, Ryan and Jaini, Akhil and Sokolowski, Marcin and James, Clancy and Bannister, Keith W.},
  title = {The CRAFT Coherent (CRACO) Backend on ASKAP: Real-time Image-Plane Fast Transient Search},
  journal = {Publications of the Astronomical Society of Australia},
  volume = {42},
  pages = {e012},
  year = {2025},
  doi = {10.1017/pasa.2025.12}
}`
  },
  {
    id: 'jaini-2026-parkes-timing',
    title: 'High-Cadence Single-Pulse Tracking and Timing Solutions for ASKAP CRACO RRATs with Murriyang / Parkes (Paper II)',
    authors: [
      'Akhil Jaini',
      'Ryan Shannon',
      'Adam T. Deller',
      'Yuanming Wang',
      'Adarsh Bathula',
      'Pavan Uttarkar'
    ],
    leadAuthor: 'Akhil Jaini',
    year: 2026,
    journal: 'MNRAS (In Preparation)',
    abstract: `We present the targeted follow-up observations of 15 CRACO-discovered RRATs conducted with the 64-m Murriyang (Parkes) radio telescope using the Medusa backend. Exploiting the sub-arcsecond localisations from ASKAP, single-pointing coherent de-dispersion observations at 64 µs time resolution reveal spin period measurements, burst rate distributions, and polarisation profiles across multiple observing epochs.`,
    doi: '10.1093/mnras/inprep',
    arxivId: '2610.xxxxx',
    keywords: ['pulsars: individual', 'polarization', 'neutron stars', 'radio continuum: stars'],
    isHighlighted: false,
    bibtex: `@article{Jaini2026ParkesTiming,
  author = {Jaini, Akhil and Shannon, Ryan and Deller, Adam T. and Wang, Yuanming and Bathula, Adarsh and Uttarkar, Pavan},
  title = {High-Cadence Single-Pulse Tracking and Timing Solutions for ASKAP CRACO RRATs with Murriyang / Parkes (Paper II)},
  journal = {Monthly Notices of the Royal Astronomical Society (In Prep)},
  year = {2026}
}`
  },
  {
    id: 'shannon-2024-craft',
    title: 'The Commensal Real-time ASKAP Fast Transient Survey: Population Astrometry and Localisation',
    authors: [
      'Ryan Shannon',
      'Keith W. Bannister',
      'Adam T. Deller',
      'Akhil Jaini',
      'Yuanming Wang',
      'CRAFT Collaboration'
    ],
    leadAuthor: 'Ryan Shannon',
    year: 2024,
    journal: 'The Astrophysical Journal',
    volume: '965',
    pages: '88',
    abstract: `An overview of the Commensal Real-time ASKAP Fast Transient (CRAFT) project, highlighting wide-field searching across survey science projects (VAST, EMU, WALLABY) and real-time coherent triggering for arcsecond localisation of fast radio bursts and Galactic single pulses.`,
    doi: '10.3847/1538-4357/ad2934',
    arxivId: '2403.07890',
    keywords: ['radio transients', 'fast radio bursts', 'neutron stars', 'astrometry'],
    isHighlighted: false,
    bibtex: `@article{Shannon2024CRAFT,
  author = {Shannon, Ryan and Bannister, Keith W. and Deller, Adam T. and Jaini, Akhil and Wang, Yuanming and {CRAFT Collaboration}},
  title = {The Commensal Real-time ASKAP Fast Transient Survey: Population Astrometry and Localisation},
  journal = {The Astrophysical Journal},
  volume = {965},
  pages = {88},
  year = {2024},
  doi = {10.3847/1538-4357/ad2934}
}`
  }
];
