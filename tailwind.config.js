/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#050608',
          900: '#090b10',
          850: '#0e1118',
          800: '#141822',
          750: '#1a1f2c',
          700: '#222838',
          600: '#323a50',
        },
        // Official CRACO RRATs Violet Palette from logo (#9F80F8)
        violet: {
          300: '#C4B2FB',
          400: '#B098FA',
          500: '#9F80F8',
          600: '#845EF6',
          700: '#6C3DF2',
          900: '#2A176B',
          950: '#170B3D',
        },
        // Mapped amber to #9F80F8 palette for seamless theme continuity
        amber: {
          200: '#D5C7FC',
          300: '#C4B2FB',
          400: '#B098FA',
          500: '#9F80F8',
          600: '#845EF6',
          700: '#6C3DF2',
          900: '#2A176B',
          950: '#170B3D',
        },
        telemetry: {
          violet: '#9F80F8',
          violetGlow: '#BCA7FB',
          cyan: '#00f0ff',
          emerald: '#10b981',
          rose: '#f43f5e',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'telemetry-grid': "radial-gradient(rgba(159, 128, 248, 0.08) 1px, transparent 0)",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar-sweep': 'radarSweep 4s linear infinite',
      },
      keyframes: {
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
