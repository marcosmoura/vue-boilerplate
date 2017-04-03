/* Third Party */
import Vue from 'vue'
// import { sync } from 'vuex-router-sync'

/* App */
import App from './App'
import router from './routes.js'
// import store from './store'
import { i18n } from './config.js'
import './core'

// sync(store, router)

Vue.config.productionTip = false

// eslint-disable-next-line
new Vue({
  name: 'root',
  el: '#app',
  router,
  // store,
  i18n,
  render: mount => mount(App)
})
