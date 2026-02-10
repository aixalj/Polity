/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['d3-shape'],
  experimental: {
    esmExternals: 'loose',
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['ethics.org.au'],
  },
  // Remove the serverRuntimeConfig for now
}

module.exports = nextConfig