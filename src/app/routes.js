import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './modules/Home/Home.vue'
import ErrorPage from './modules/Error/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '*',
    name: 'error',
    component: ErrorPage
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
