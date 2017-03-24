const Home = r => require.ensure([], () => r(require('./modules/Home/Home.vue')), 'home')
const ErrorPage = r => require.ensure([], () => r(require('./modules/Error/Error.vue')), 'error')

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
