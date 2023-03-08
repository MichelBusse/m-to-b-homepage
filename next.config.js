/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/Virtual-Reality-Entwicklung',
        destination: '/Augmented-Reality-Agentur',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
  },
  images: {
    domains: ['app-entwickler-verzeichnis.de'],
  },
};

module.exports = nextConfig;
