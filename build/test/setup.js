const jsdom = require('jsdom-global')
const { addAlias } = require('module-alias')
const aliases = require('../webpack/base').default.resolve.alias

Object.keys(aliases).forEach(key => addAlias(key, aliases[key]))

jsdom()

if (process.env.NODE_ENV === 'test') {
  const vueNode = require('vue-node')
  const { join } = require('path')

  vueNode(join(__dirname, 'config.js'))
} else {
  const { register } = require('vuegister')

  addAlias('vue', 'vue/dist/vue.min')
  register()
}

const { config } = require('vue')
config.productionTip = false
