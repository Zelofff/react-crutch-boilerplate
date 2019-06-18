const base = require('./webpack.base')
const merge = require('webpack-merge')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-source-map'
  devServer: {
    hot: true
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
})
