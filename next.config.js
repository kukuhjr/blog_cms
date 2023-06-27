/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.GRAPHICS_ENDPOINT,
    GRAPH_TOKEN: process.env.GRAPHCMS_TOKEN
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
      },
    ]
  }
}

module.exports = nextConfig
