if (process.env.NODE_ENV === 'test') {
  const browserEnv = require('browser-env')
  const vueNode = require('vue-node')
  const { join } = require('path')

  browserEnv()
  vueNode(join(__dirname, 'config.js'))
} else {
  require('babel-register')()
  require('vuegister').register({
    maps: true
  })
}
