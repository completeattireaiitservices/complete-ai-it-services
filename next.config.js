/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/blog/gmail-copilot-governance-seo",
        destination: "/blog/gmail-copilots-governance-seo",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  /**
   * Windows + OneDrive under `Desktop` often breaks webpack’s default filesystem
   * cache / symlinks (readlink EINVAL), which surfaces as /blog 500 and 404s
   * under `/_next/static/chunks/fallback/*`. Dev-only mitigations below.
   */
  webpack: (config, { dev }) => {
    if (dev) {
      config.resolve.symlinks = false;
      config.cache = { type: 'memory' };
    }
    return config;
  },
};

module.exports = nextConfig;
