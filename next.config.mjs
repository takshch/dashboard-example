/** @type {import('next').NextConfig} */
import withSvgr from 'next-plugin-svgr';

const nextConfig = withSvgr({
  webpack(config) {
    return config;
  },
});

export default nextConfig;
