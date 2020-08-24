/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Montserrat"],
          urls: ["/fonts/fonts.css"],
        },
        custom: {
          families: ["Roboto"],
          urls: ["/fonts/fonts.css"],
        },
      },
    }
  ],
  siteMetadata: {
    title: 'Noah Varghese',
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'projects',
        link: '/projects/'
      },
      {
        name: 'contact',
        link: '/contact/'
      }
    ]
  }
}
