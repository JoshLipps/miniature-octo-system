/* global module, __dirname, require */
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel?presets[]=es2015'
      // query: {
      //   cacheDirectory: true
      // }
    }
  ]},
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
  }
};
