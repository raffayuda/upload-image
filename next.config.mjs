/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "g64sxhclysbprhip.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
