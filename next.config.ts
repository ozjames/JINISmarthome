import type { NextConfig } from "next";

/** GitHub Pages project site default. For Crazy Domains: BASE_PATH=/new_home */
const basePath = process.env.BASE_PATH ?? "/JINISmarthome";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
