import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Yeh static 'out' folder generate karega

  images: {
    unoptimized: true, // Static export ('export') ke liye zaroori hai
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co", // Supabase Storage images ke liye
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Unsplash images ke liye
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;