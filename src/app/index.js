/* Third Party */
import Vue from 'vue'

/* App */
import App from './App'
import router from './routes.js'
import { i18n } from './config.js'
import './core'

// eslint-disable-next-line
new Vue({
  name: 'root',
  el: '#app',
  router,
  i18n,
  render: mount => mount(App)
})
