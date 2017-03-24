const ErrorPage = r => require.ensure([], () => r(require('./Error.vue')), 'error')

const routes = [
  {
    path: '*',
    name: 'error',
    component: ErrorPage
  }
]

export { routes }
