import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        graphite: '#151515',
        cream: '#f7f2e8',
        sand: '#e7dcc8',
        gold: '#c9a24d',
        forest: '#264437'
      },
      boxShadow: {
        soft: '0 24px 80px rgba(21, 21, 21, 0.12)'
      }
    }
  },
  plugins: []
};

export default config;
