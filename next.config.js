
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/order",
        destination: "https://www.americanlogoartist.com/order",
      },
      {
        source: "/order/:path*",
        destination: "https://www.americanlogoartist.com/order/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
