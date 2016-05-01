/* global module, __dirname, require */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
      loaders: ['ng-annotate', 'babel?presets[]=es2015']
      // query: {
      //   cacheDirectory: true
      // }
    },
    {
      test: /\.html$/,
      loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, 'app')) + '/!html',
      exclude: path.resolve(__dirname, 'app', 'public', 'index.html')
    }
  ]},
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'app', 'public', 'index.html'),
    hash: true
  })],
  devServer: {},
  devtool: 'eval'
};
