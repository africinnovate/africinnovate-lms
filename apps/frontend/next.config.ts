import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
  },
  webpack5: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['example.com'],
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
}

export default nextConfig
