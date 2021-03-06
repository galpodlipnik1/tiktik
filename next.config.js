/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['img-9gag-fun.9cache.com', 'lh3.googleusercontent.com'],
  }
}

module.exports = nextConfig
