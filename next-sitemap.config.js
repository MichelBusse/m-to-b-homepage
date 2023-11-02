module.exports = {
  siteUrl: process.env.SITE_URL || "https://m-to-b.com",
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: "https://m-to-b.com/",
      hreflang: "de",
    },
    {
      href: "https://m-to-b.com/en",
      hreflang: "en",
    },
  ],
  transform: async (config, path) => {
    //Filter out duplicated dynamic paths
    if (path.includes("/en/")) {
      return null;
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/Impressum",
          "/en/Impressum",
          "/Datenschutz",
          "/en/Datenschutz",
        ],
      },
    ],
  },
};
