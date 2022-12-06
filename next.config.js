/** @type {import('next').NextConfig} */
const nextConfig = {
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
