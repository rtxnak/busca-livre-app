/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'i.zst.com.br',
      },
      {
        hostname: 'http2.mlstatic.com',
      },
    ],
  },
  staticPageGenerationTimeout: 120000,
}

module.exports = nextConfig
