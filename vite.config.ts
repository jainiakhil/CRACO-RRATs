import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';

// Align process.cwd() to canonical realpath to prevent cross-drive junction discrepancies on Windows
try {
  const realCwd = fs.realpathSync(process.cwd());
  if (process.cwd() !== realCwd) {
    process.chdir(realCwd);
  }
} catch {
  // ignore
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/craco-rrats/' : '/',
  server: {
    port: 5173,
    host: true,
  },
});
