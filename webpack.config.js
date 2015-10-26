'use strict';

var path = require('path');

module.exports = {
  entry: {
    main: './main.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'build')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
};
