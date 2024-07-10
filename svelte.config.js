import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      edge: false,
      split: false
    })
  },
  paths: {
    assets: '',
    base: process.env.NODE_ENV === 'production' ? '/graphql' : ''
  },
};

export default config;

