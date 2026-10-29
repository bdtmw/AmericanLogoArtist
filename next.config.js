
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/order/:path*",
        destination: "https://YOUR-CPANEL-ORIGIN/order/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
