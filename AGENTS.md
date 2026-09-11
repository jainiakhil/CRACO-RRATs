# Project Guidelines & Standards

## 1. Australian English (en-AU) Requirement
Always use Australian English (en-AU) across all UI text, user-facing documentation, metadata labels, button tooltips, notifications, and codebase comments.
- **catalogue** (never "catalog")
- **visualisation** / **visualise** (never "visualization" / "visualize")
- **colour** (never "color", except where required by code/CSS syntax e.g. backgroundColor)
- **centre** (never "center", except in CSS layout utility classes e.g. items-center)
- **polarisation** (never "polarization")
- **kilometre** (never "kilometer")
- **initialise** (never "initialize")
- **characterise** (never "characterize")
- **factorisation** (never "factorization")
- **modelling** (never "modeling")
- **programme** (for astronomical / survey programmes)

## 2. Cosmic Violet (#9F80F8) Palette & Telemetry Aesthetic
- **Primary Accent**: Cosmic Violet #9F80F8 (matching the official mission patch logo). Never use tungsten gold, yellow, or amber.
- **Obsidian Telemetry Palette**:
  - Backgrounds: #050608 (void base), #090b10 (card base), #0e1118 (elevated panels), #141822 (borders).
  - Accents: Cosmic Violet (#9F80F8), Laser Cyan (#00f0ff), and Neon Emerald (#10b981).
  - Typography: Space Grotesk for headings, JetBrains Mono for telemetry metrics, coordinates, and codes.
  - Corner Reticles: Apply .reticle-box markers to key panels and cards.

## 3. Pop-Up Modals
- All pop-up dialogs and candidate inspection modals must have a solid, fully opaque background (#090b10) to avoid distracting background bleed-through.

## 4. Privacy & Data Boundaries
- The research paper CRACO_RRAT_Discovery__MNRAS_.pdf must remain strictly ignored and excluded from git tracking at all times.
