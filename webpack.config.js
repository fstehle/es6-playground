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
      loader: "babel-loader"
    }]
  }
};
