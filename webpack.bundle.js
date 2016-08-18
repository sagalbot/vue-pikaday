const webpack = require('webpack')

var webpackConfig = {
  entry: {
    lib: './src/vue-pikaday.js'
  },
  output: {
    path: './dist/',
    filename: 'vue-pikaday.js',
    library: 'vPikaday',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
      }
    ]
  }
}

webpackConfig.devtool = '#source-map'
webpackConfig.plugins = (webpackConfig.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {warnings: false}
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
])

module.exports = webpackConfig
