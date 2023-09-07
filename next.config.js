/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "express-api-red.vercel.app",
        port: '',
        pathname: "/**"
      }
    ]
  }
}

module.exports = nextConfig
