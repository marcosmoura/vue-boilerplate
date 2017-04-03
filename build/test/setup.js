const jsdom = require('jsdom-global')
const { addAlias } = require('module-alias')
const { register } = require('vuegister')
const aliases = require('../webpack/base').default.resolve.alias;

Object.keys(aliases).forEach(key => addAlias(key, aliases[key]));

addAlias('vue', 'vue/dist/vue.min');
jsdom()
register()
