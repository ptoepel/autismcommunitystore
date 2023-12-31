module.exports = {
  siteMetadata: {
    title: `Autism Community Store`,
    description: 'Autism Community Store, So Much More Than A Store',
    author: `Patrick Toepel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve:`gatsby-source-strapi`,
        options: {
          apiURL: process.env.DEPLOY_URL ? 'https://resilient-chiro.herokuapp.com' :
          `http://localhost:1337`,
          contentTypes: [
            `article`,
            `user`,
            `categories`,
            `injuries`,
            `services`,
            `credentials`,
            `hours`,
            'socials',
          ],
          singleTypes: [`about-bio`,`address`,`contact-text`,'parking'],
          queryLimit:1000,
        },
    },
    `gatsby-plugin-react-helmet`,
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     `gatsby-plugin-offline`,

      
  ],
}
