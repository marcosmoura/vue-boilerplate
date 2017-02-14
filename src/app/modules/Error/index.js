const ErrorPage = (r) => require.ensure([], () => r(require('./Error')), 'core')

const routes = [
  {
    path: '*',
    name: 'error',
    component: ErrorPage
  }
]

export { routes }
