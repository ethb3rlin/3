module.exports = {
  siteMetadata: {
    title: "ETHBerlin4",
    siteUrl: `https://ethberlin.org`,
    url: `https://ethberlin.org`,
    description: "ETHBerlin4: Identity Crisis, May 24-26, 2024, Kreuzberg, Berlin",
    twitterUsername: "@ETHBerlin",
    image: `/card.png`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `src/assets/icons/favicon-32x32.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `/src/assets/icons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
        ], // Add or remove icon sizes as desired
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
