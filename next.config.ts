import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "**", // Fixed wildcard for all paths
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        pathname: "**", // Fixed wildcard for all paths
      },
    ],
  },
};

export default nextConfig;
