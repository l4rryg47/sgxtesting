/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
