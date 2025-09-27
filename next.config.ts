import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // allow images from these domains
    remotePatterns: (process.env.NEXT_PUBLIC_IMAGE_DOMAINS?.split(',') ?? []).map((domain) => ({
      protocol: 'https',
      hostname: `**.${domain}`,
    })),
  },
};

export default nextConfig;
