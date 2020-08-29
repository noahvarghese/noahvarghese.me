/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
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
    description: 'Portfolio site for Noah Varghese.',
    menuLinks: [
      {
        name: 'home',
        title: 'Home',
        link: '/',
        description: "Hi! I'm Noah, I'm a software developer based out of Ontario. My main interests lie in both mobile and web app development, as well as dev ops and automation."
      },
      {
        name: 'projects',
        title: 'Projects',
        link: '/projects/',
        description: 'List of my projects, past and present.'
      },
      {
        name: 'contact',
        title: 'Contact',
        link: '/contact/',
        description: 'If you would like to collaborate or inquire about my services feel free to contact me.'
      }
    ]
  }
}
