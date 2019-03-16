const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.config');
const config = require('./config.js');

module.exports = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(__dirname, '../src'),
    publicPath: config.dev.assetsPublicPath,
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
    historyApiFallback: true,
    stats: "errors-only",
    port: config.dev.port,
    hot: true,
    host: '0.0.0.0',
    compress: true,
  },
  devtool: 'eval-source-map',
});
