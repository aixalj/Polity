/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  images: {
    domains: ['ethics.org.au'],
  },
  serverRuntimeConfig: {
    PORT: 3008
  }
}

module.exports = nextConfig