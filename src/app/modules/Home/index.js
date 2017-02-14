const Home = (r) => require.ensure([], () => r(require('./Home')), 'core')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

export { routes }
