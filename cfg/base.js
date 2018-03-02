'use strict';
let path = require('path');
let webpack = require('webpack');
let defaultSettings = require('./defaults');
let additionalPaths = [];

module.exports = {
  additionalPaths: additionalPaths,
  devtool: 'eval',
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    noInfo: false
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      config: `${defaultSettings.srcPath}/config/config.js`,
      i18n: `${defaultSettings.srcPath}/i18n/index.js`
    }
  },
  module: {}
};