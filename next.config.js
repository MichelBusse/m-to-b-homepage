/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://michelbusse.dev',
        permanent: false,
      },
      {
        source: '/kinkz/app-store',
        destination: 'https://apps.apple.com/de/app/kinkz-partyspiel/id1617511912',
        permanent: true,
      },
      {
        source: '/kinkz/google-play',
        destination: 'https://play.google.com/store/apps/details?id=com.m_to_b.kinkz',
        permanent: true,
      },
      {
        source: '/Virtual-Reality-Entwicklung',
        destination: '/Augmented-Reality-Agentur',
        permanent: true,
      },
      {
        source: '/App-Entwicklung-Chemnitz',
        destination: '/App-Agentur/Chemnitz',
        permanent: true,
      },
      {
        source: '/App-Entwicklung-Dresden',
        destination: '/App-Agentur/Dresden',
        permanent: true,
      },
      {
        source: '/App-Entwicklung-Erfurt',
        destination: '/App-Agentur/Erfurt',
        permanent: true,
      },
      {
        source: '/App-Entwicklung-Jena',
        destination: '/App-Agentur/Jena',
        permanent: true,
      },
      {
        source: '/App-Entwicklung-Leipzig',
        destination: '/App-Agentur/Leipzig',
        permanent: true,
      },
      {
        source: '/App-Entwicklung-Zwickau',
        destination: '/App-Agentur/Zwickau',
        permanent: true,
      },
      {
        source: '/App-Entwicklung',
        destination: '/App-Agentur',
        permanent: true,
      },
      {
        source: '/App-Agentur-Chemnitz',
        destination: '/App-Agentur/Chemnitz',
        permanent: true,
      },
      {
        source: '/App-Agentur-Dresden',
        destination: '/App-Agentur/Dresden',
        permanent: true,
      },
      {
        source: '/App-Agentur-Erfurt',
        destination: '/App-Agentur/Erfurt',
        permanent: true,
      },
      {
        source: '/App-Agentur-Jena',
        destination: '/App-Agentur/Jena',
        permanent: true,
      },
      {
        source: '/App-Agentur-Leipzig',
        destination: '/App-Agentur/Leipzig',
        permanent: true,
      },
      {
        source: '/App-Agentur-Zwickau',
        destination: '/App-Agentur/Zwickau',
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
