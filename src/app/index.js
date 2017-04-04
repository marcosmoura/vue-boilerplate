/* Third Party */
import Vue from 'vue'
import 'es6-promise/auto'
// import { sync } from 'vuex-router-sync'

/* App */
import App from './App'
import router from './routes.js'
// import store from './store'
import { i18n } from './config.js'
import './core'

// sync(store, router)

Vue.config.productionTip = false

const app = new Vue({
  name: 'root',
  router,
  // store,
  i18n,
  render: mount => mount(App)
})

document.addEventListener('DOMContentLoaded', () => {
  app.$mount('#app')
})
