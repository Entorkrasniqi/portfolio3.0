/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static HTML export
  images: {
    unoptimized: true,
  },
  assetPrefix: '',
  basePath: '',
}

module.exports = nextConfig