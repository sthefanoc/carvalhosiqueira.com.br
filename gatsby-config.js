/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');

// const siteMetadata = require('./config/metadata');

module.exports = {
  /* Your site config here */
  pathPrefix: "/carvalhosiqueira.com.br",
  siteMetadata:{
    title: "CarvalhoSiqueira | Advogadas & Advogados",
    description:"Advogadas e advogados. Apoio jurídico estruturado a organizações, movimentos sociais e ativistas.",
    keywords:"carvalho, siqueira, carvalhosiqueira, flavio siqueira, sheila de carvalho, advogados, advogadas e advogados, escritorio advocacia",
    image:"/static/images/carvalhosiqueira-icon.webp",
    siteUrl:'https://carvalhosiqueira.com.br/',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-169694089-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
        icon: 'src/images/black-fist.png'
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `sthefanoc`
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.carvalhosiqueira.com.br`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`,`500`,`700`],
          },
          {
            family: `EB Garamond`,
            variants: [`400`,`500`,`600`,`700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Carvalho Siqueira | Advogadas e Advogados`,
        short_name: `CarvalhoSiqueira`,
        start_url: `/`,
        background_color: `#841800`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/carvalhosiqueira-icon.webp`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `static`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`
  ]
}
