import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Add the @/ alias for Webpack, pointing to the src directory
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
  sassOptions: {
    // Include the src/styles directory in Sass
    includePaths: [path.join(__dirname, "src/styles")],
  },
};

export default nextConfig;
