module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: 'vue-style-loader!css-loader',
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      }
    ]
  }
}
