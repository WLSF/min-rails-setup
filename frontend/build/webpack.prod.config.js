const merge = require('webpack-merge');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');
const config = require('./config.js');

module.exports = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: config.prod.assetsPublicPath,
    filename: '[name].[contenthash].bundle.js',
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(__dirname, '../src/static'),
        to: 'static',
      },
    ]),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    historyApiFallback: true,
    stats: "errors-only",
    port: config.prod.port,
    compress: true,
  },
});
