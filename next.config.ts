import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Permitir acceso desde dispositivos en la red local (LAN) durante desarrollo */
  allowedDevOrigins: [
    '192.168.9.108',
    '192.168.*.*',
    '10.*.*.*',
    '172.16.*.*',
    '*.local',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
