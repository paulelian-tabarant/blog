module.exports = {
  siteMetadata: {
    title: `Paul-Elian's blog`,
    siteUrl: `https://paul-elian.dev/`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `./src/images/`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `./src/posts/`,
      },
      __key: 'posts',
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: '@vtex/gatsby-plugin-nginx',
      options: {
        transformHeaders: (headers, path) => {
          const DEFAULT_SECURITY_HEADERS = [
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
            'Referrer-Policy: same-origin',
          ]

          return path.includes('/preview')
            ? [
                ...DEFAULT_SECURITY_HEADERS,
                'Content-Security-Policy: frame-src https://*.myvtex.com/',
                ...headers,
              ]
            : ['X-Frame-Options: DENY', ...DEFAULT_SECURITY_HEADERS, ...headers]
        },
      },
    },
  ],
}
