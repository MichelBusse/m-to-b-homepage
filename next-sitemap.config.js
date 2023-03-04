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
