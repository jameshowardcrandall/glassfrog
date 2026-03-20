import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://jameshowardcrandall.github.io',
  base: '/glassfrog',
  integrations: [react()],
});
