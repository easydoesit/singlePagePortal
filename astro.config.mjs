// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
enabled: false
},
site:'https://michaelgrills.ca',
  integrations: [sitemap({
      customPages: [
        'https://create.michaelgrills.ca',
        'https://art.michaelgrills.ca'
      ]
    })]
});