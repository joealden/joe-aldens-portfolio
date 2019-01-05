module.exports = {
  siteMetadata: {
    title: `Joe Alden's Portfolio`,
    author: `Joe Alden`,
    description: `The portfolio of Joe Alden`,
    siteUrl: "https://joealden.com"
  },

  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joe Alden's Portfolio`,
        short_name: `Joe's Portfolio`,
        start_url: "/",
        background_color: "#000000",
        theme_color: "#000000"
      }
    },
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`
  ]
};
