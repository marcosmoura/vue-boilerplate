/* Third Party */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuei18n from 'vue-i18n'

/* App */
import App from './App'
import routes from './routes.js'
import enUS from './i18n/en-US'
import './config.js'
import './core'

Vue.use(VueRouter)
Vue.use(Vuei18n)

const router = new VueRouter({
  mode: 'history',
  routes
})

const i18n = new Vuei18n({
  locale: 'en-US',
  messages: {
    ...enUS
  }
})

// eslint-disable-next-line
new Vue({
  name: 'root',
  el: '#app',
  router,
  i18n,
  render: mount => mount(App)
})
