import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';


export default (webpackConfig) => {
  if (!webpackConfig) {
    throw new Error('ExpressDev requires a config to be passed in');
  }

  if (!webpackConfig.output || !webpackConfig.output.publicPath) {
    throw new Error('ExpressDev requires a output.publicPath in the config');
  }

  const app = express();
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true }
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }));

  return app;
};
