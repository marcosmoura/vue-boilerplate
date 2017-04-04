import webpack from 'webpack'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin'
import baseConfig from './base'
import vueLoaderConfig from './vue-loader-config'
import config from '../config'

Object.keys(baseConfig.entry).forEach((name) => {
  baseConfig.entry[name] = [
    './build/server/client',
    ...baseConfig.entry[name]
  ]
})

export default merge(baseConfig, {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.WatchIgnorePlugin([config.nodePath]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: config.indexPath,
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
})
