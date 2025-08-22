/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack(config) {
    // Указываем Next.js, что папка с страницами находится в src/pages
    config.resolve.modules.push(path.resolve('./src'));
    return config;
  },
};

export default nextConfig;
  