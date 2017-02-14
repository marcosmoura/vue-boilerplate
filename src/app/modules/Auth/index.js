const Signup = (r) => require.ensure([], () => r(require('./Signup')), 'auth')
const Signin = (r) => require.ensure([], () => r(require('./Signin')), 'auth')
const RecoverPassword = (r) => require.ensure([], () => r(require('./RecoverPassword')), 'auth')

const routes = [
  {
    path: '/sign-up',
    name: 'sign-up',
    component: Signup
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: Signin
  },
  {
    path: '/recover-password',
    name: 'recover-password',
    component: RecoverPassword
  }
]

export { routes }
