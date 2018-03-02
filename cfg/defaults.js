'use strict';
const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const cfgPath = path.join(__dirname, '/../cfg');
const rootPath = path.join(__dirname, '../');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
    const buildModule = [];
    buildModule.push(srcPath);
    for(let key in require(rootPath+"package.json")["dependencies"]){
        if(key.indexOf('rainbow')>-1){
            buildModule.push(path.resolve(__dirname, "../node_modules/"+key))
        }
    }

    return {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include:buildModule,
        loader: 'babel-loader'
      }
    ],
    loaders: [
        {
            test: /\.css$/,
            loader:  ExtractTextPlugin.extract("style-loader","css-loader")
        },
        {
          test: /\.(png|jpg|gif|woff|woff2)$/,
          loader: 'url-loader?limit=8192'
        },
        {
          test: /\.(mp4|ogg|svg)$/,
          loader: 'file-loader'
        }
    ]
  };
}

module.exports = {
    srcPath: srcPath,
    cfgPath: cfgPath,
    rootPath:rootPath,
    publicPath: '',
    getDefaultModules: getDefaultModules
};
