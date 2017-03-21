import ErrorPage from './Error'

const routes = [
  {
    path: '*',
    name: 'error',
    component: ErrorPage
  }
]

export { routes }
