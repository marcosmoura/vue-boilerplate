/* Third Party */
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

// eslint-disable-next-line
new Vue({
  name: 'root',
  el: '#app',
  router,
  render: mount => mount(App)
})
