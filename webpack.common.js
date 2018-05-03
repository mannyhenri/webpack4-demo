const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // can do multiple entry points for code splitting or single bundle
  // entry: './src/index.js', a single module
  entry: {
    index: './src/index.js',
    app: './src/app.js'
  },
  output: {
    // here we create a dynamic filename path
    // the file paths are only loaded as needed -> lazy-loading magic
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {// rule to transpile modern JS
        test: /\.js$/,
        exclude: /(nodes_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {// rule to handle images
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          { loader: 'file-loader'}
        ]
      }
    ]
  },
  plugins: [
    // clean the dist directory before each build
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: "Manny's webpack example"
    })
  ]
}