import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = r => require.ensure([], () => r(require('./modules/Home/Home.vue')), 'home')
const ErrorPage = r => require.ensure([], () => r(require('./modules/Error/Error.vue')), 'error')

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
