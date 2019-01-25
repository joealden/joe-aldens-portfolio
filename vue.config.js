module.exports = {
  chainWebpack: config => {
    /**
     * Only perform image compression when building for
     * production. This is because this takes quite long
     * to perform relative to the rest of the build time.
     */
    if (process.env.NODE_ENV === "production") {
      const imageRule = config.module.rule("images");

      imageRule.uses.clear();

      /* https://github.com/tcoopman/image-webpack-loader */

      imageRule
        .use("file-loader")
        .loader("file-loader")
        .end()
        .use("image-webpack-loader")
        .loader("image-webpack-loader")
        .options({
          pngquant: {
            quality: "65-80",
            speed: 3
          }
          /**
           * Find a way to generate both regular png and webp
           * versions and conditionally load them depending on
           * browser support (like `gatsby-image` does).
           */

          // webp: {
          //   quality: 75
          // }
        });
    }
  }
};
