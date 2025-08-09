const { hostname } = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`);
const nextConfig={
  reactStrictMode: true,
  //  output: 'export',

  images: {
    domains: [`${hostname}`,"https://kutoot.bigome.com", "images.unsplash.com", "plus.unsplash.com", "images.pexels.com"]
  },
}
const pwa = process.env.NEXT_PWA_STATUS;

module.exports = nextConfig; 
