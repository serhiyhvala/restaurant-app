/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "products-api-p7cr.onrender.com",
        port: '',
        pathname: "/**"
      }
    ]
  }
}

module.exports = nextConfig
