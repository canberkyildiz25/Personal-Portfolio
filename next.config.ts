import path from 'node:path';
import type { NextConfig } from 'next';

// Static export: the site is uploaded to Netlify as prebuilt files, so there
// is no server to run. `trailingSlash` makes /tr resolve to /tr/index.html.
const config: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: { root: path.resolve(__dirname) },
};

export default config;
