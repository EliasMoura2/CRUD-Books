const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./frontend/app.js",
  output: {
    path: path.join(__dirname, "backend/public"),
    filename: "js/bundle.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          devMode ? "style-loader" : miniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./frontend/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkAttributes: true,
        useShortDoctype: true,
      },
    }),
    new miniCssExtractPlugin({
      filename: "css/bundle.css",
    }),
  ],
  devtool: "source-map",
};
/* 
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: 'index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
} */
