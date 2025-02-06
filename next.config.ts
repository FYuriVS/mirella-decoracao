import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['lcqoazdeokbijrxfvsvg.supabase.co'],
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Aplica as regras para todas as rotas
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