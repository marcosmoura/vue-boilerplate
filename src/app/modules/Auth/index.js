import Signup from './Signup'
import Signin from './Signin'
import RecoverPassword from './RecoverPassword'

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
