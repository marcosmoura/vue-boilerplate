const Home = r => require.ensure([], () => r(require('./pages/Home/Home.vue')), 'home')
const ErrorPage = r => require.ensure([], () => r(require('./pages/Error/Error.vue')), 'error')

export default [
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
