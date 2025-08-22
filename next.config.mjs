import { join } from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['jsx', 'js'],
  // Настройка для папки src
  // Нужно убедиться, что Vercel видит src/pages
};

export default nextConfig;
