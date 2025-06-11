const { hostname } = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`);
const nextConfig={
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [`${hostname}`]
  },
}
const pwa = process.env.NEXT_PWA_STATUS;

module.exports = nextConfig; 
