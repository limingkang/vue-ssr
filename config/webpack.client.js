let merge = require('webpack-merge');
let base = require('./webpack.base');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(base, {
  entry: {
    client: path.resolve(__dirname, '../src/client-entry.js') // 设置name
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html')
    }),
  ]
})