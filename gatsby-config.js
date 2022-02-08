module.exports = {
  siteMetadata: {
    title: `Paul-Elian's blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pensees",
        path: "./src/posts/pensees",
      },
      __key: "posts/pensees",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "tech",
        path: "./src/posts/tech",
      },
      __key: "posts/tech",
    },
  ],
};
