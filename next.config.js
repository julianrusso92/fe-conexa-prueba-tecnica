/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
        pathname: "*",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/people",
      },
      // {
      //   source: "/index",
      //   destination: "/_index",
      // },
    ];
  },
};

module.exports = nextConfig;
