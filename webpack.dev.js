const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  // HRM enabled
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {// rule to convert css into bundle
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'},
        ]
      },
    ]
  },
  plugins: [
    // enabling HMR
    new webpack.HotModuleReplacementPlugin()
  ],
});