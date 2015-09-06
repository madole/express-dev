var fs = require('fs');

var node_modules = fs.readdirSync('node_modules').filter(function(x) { return x !== '.bin' });


module.exports = {
  entry: process.cwd() + '/src/index.js',
  output: {
    path: 'build/',
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      { test: /.js/,
        loader: 'babel-loader' }
    ]
  },
  externals: node_modules
};