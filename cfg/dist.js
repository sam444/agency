'use strict';
const os = require('os');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./base');
const defaultSettings = require('./defaults');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MyPlugin = require('./indexHtmlPlugin');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = Object.assign({}, baseConfig, {
    entry: {
      index: `${defaultSettings.srcPath}/index`,
      common: ['rainbowui-core','react-router']
    },
    output: {
        path: path.join(__dirname, '/../dist/release/'),
        chunkFilename: '[name].[chunkhash:8].chunk.js',
        filename: 'app.js',
        publicPath: defaultSettings.publicPath
    },
  cache: false,
  debug: false,
  devtool: 'sourcemap',
  plugins: [
      new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),
      new BowerWebpackPlugin({
        searchResolveModulesDirectories: false
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.NoErrorsPlugin(),
      new HtmlWebpackPlugin({
          template: './src/index.html',
          hash: true
      }),
      new ExtractTextPlugin("styles.css"),
      new CopyWebpackPlugin([
          {from:`${defaultSettings.srcPath}/config/config.json`,to:"config.json"},
          {from:`${defaultSettings.srcPath}/config/server.json`,to:"server.json"},
          {from:`${defaultSettings.rootPath}/package.json`,to:"package.json"}
      ]),
      new HappyPack({
          id: 'happybabel',
          loaders: ['babel-loader'],
          threadPool: happyThreadPool,
          cache: true,
          verbose: true
      }),
      new webpack.ProvidePlugin({
            i18n: 'i18n',
      }),
      new MyPlugin()
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
