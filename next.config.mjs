/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jabama.com",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
