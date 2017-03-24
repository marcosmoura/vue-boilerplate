const Home = r => require.ensure([], () => r(require('./Home.vue')), 'home')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

export default routes
