require('babel-register');

import { expect } from 'chai';
import expressDev from '../src/index.js';
import config from './webpack.test.config.js';
import _ from 'lodash';

describe('express-dev', () => {
  it('should return an express instance when passed a config', () => {
    const app = expressDev(config);
    expect(app).to.be.ok;
  });

  it('should throw if no config is passed', () => {
    const fn = expressDev.bind(null);
    expect(fn).to.throw(Error);
  });

  it('should throw if no public path is specified in config', () => {
    const newConfig = _.merge({}, config, {
      output: {
        publicPath: null
      }
    });

    const fn = expressDev.bind(null, newConfig);
    expect(fn).to.throw(Error);
  });
});
