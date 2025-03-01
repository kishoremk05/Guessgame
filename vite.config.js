import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Guessgame/", // ✅ This must match your GitHub repo name
});
