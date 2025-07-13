/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  sassOptions: {
    prependData: `@use "./_mantine.scss";`,
  },
};

export default nextConfig;
