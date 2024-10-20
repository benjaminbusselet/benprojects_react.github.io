import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/cv/',  // Spécifie le chemin correct pour GitHub Pages
});