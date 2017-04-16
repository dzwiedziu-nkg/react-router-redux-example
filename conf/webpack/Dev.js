'use strict';

/**
 * Default dev server configuration.
 */
const webpack = require('webpack');
const WebpackBaseConfig = require('./Base');

class WebpackDevConfig extends WebpackBaseConfig {

  constructor() {
    super();
    this.config = {
      devtool: 'cheap-module-source-map',
      entry: [
        'webpack-dev-server/client?http://0.0.0.0:8001/',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './client.js'
      ]
    };

    this.config.plugins.push(new webpack.HotModuleReplacementPlugin());
    this.config.plugins.push(new webpack.NoEmitOnErrorsPlugin());
  }
}

module.exports = WebpackDevConfig;
