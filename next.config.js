/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.dummyjson.com', 'source.unsplash.com', 'images.unsplash.com']
  }
}

module.exports = nextConfig
