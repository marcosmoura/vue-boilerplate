/* Third Party */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './routes.js'
import './config.js'
import './core'

Vue.use(VueRouter)

let router = new VueRouter({
  hashbang: false,
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: mount => mount(App)
})
