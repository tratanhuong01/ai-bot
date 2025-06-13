import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ainext-react.vercel.app",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "ai-bot-m91c.onrender.com",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};

export default nextConfig;
