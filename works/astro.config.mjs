// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://gyokuro06.github.io',
  base: '/works',
  integrations: [react()],
});
