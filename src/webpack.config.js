const webpack = require("webpack");

module.exports = {
  // Другие настройки конфигурации Webpack

  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
      crypto: require.resolve("crypto-browserify"),
    },
  },

  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
