const vueLoaderConfig = require('../webpack/vue-loader-config')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      }
    ]
  }
}
