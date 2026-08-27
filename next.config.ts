import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  serverExternalPackages: ["resend"],
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
