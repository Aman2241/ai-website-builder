import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ai-website-builder',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
