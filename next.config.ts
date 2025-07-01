import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i1.rgstatic.net",
      }
    ],
  },
};

export default nextConfig;
