/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['comicvine.gamespot.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/list-characters/1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
