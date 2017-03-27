/* Third Party */
import 'core-js/es6/promise'
import Vue from 'vue'
import VueRouter from 'vue-router'

/* App */
import App from './App'
import routes from './routes.js'
import './config.js'
import './core'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

const rootInstance = new Vue({
  name: 'root',
  router,
  render: mount => mount(App)
})

document.addEventListener('DOMContentLoaded', () => {
  rootInstance.$mount('#app')
})
