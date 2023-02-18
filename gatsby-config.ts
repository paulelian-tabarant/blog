import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Paul-Elian',
    siteUrl: 'https://paulelian.net/',
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: './src/posts/',
      },
      __key: 'posts',
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1200,
            },
          },
          'gatsby-plugin-catch-links',
        ],
      },
    },
    `gatsby-plugin-netlify`,
  ],
}

export default config
