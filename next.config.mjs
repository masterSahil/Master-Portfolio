/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: ['10.21.211.234'],
  images: {
    qualities: [25, 50, 75, 100],
  },
};

export default nextConfig;
