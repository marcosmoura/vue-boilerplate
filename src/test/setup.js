const browserEnv = require('browser-env')
const vueNode = require('vue-node')
const { join } = require('path')

browserEnv()
vueNode(join(__dirname, 'config.js'))
