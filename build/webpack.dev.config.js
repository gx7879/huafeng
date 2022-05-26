const webpack =  require('webpack')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ],
  devServer: {
    host: '0.0.0.0',//your ip address
    port: 8080,
  }
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})