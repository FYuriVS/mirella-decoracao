import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["jdqsvduxqblskboozypp.supabase.co"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
