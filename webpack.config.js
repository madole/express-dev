var fs = require('fs');
var yargs = require('yargs');
var node_modules = fs.readdirSync('node_modules').filter(function(x) { return x !== '.bin' });

var test = yargs.argv.test;
var entryPoints = [];

if(test) {
  entryPoints.push(process.cwd() + '/test/index.spec.js');
} else {
  entryPoints.push(process.cwd() + '/src/index.js');
}

module.exports = {
  entry: entryPoints,
  output: {
    path: 'build/',
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      { test: /.js/, loader: 'babel-loader' }
    ]
  },
  externals: node_modules
};