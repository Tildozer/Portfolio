/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: "anonymous",
  experimental: {
    optimizePackageImports: [
      "./app/_mainPageComponents/index",
      "./app/_universalComp/header/index",
      "./app/contact/_components/index",
      "./app/projects/_components/index",
    ],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};

export default nextConfig;
