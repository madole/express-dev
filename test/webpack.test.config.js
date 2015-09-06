import webpack from 'webpack'

export default {
  devtool: '#source-map',
  entry: ['webpack/hot/dev-server', 'webpack-hot-middleware/client', process.cwd() + "src/index.js"],
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/scripts/'
  },
  module: {
    preLoaders: [
      {
        test: /\.coffee$/,
        loader: 'coffeelint'
      }
    ],
    loaders: [
      {
        test: /\.coffee$/,
        loader: 'coffee'
      }, {
        test: /\.styl$/,
        loader: 'style!css!stylus'
      }
    ]
  },
  resolve: {
    root: process.cwd(),
    modulesDirectories: ['bower_components', 'node_modules'],
    extensions: ['', '.js', '.coffee', '.styl']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()

  ],
  target: 'web'
};
