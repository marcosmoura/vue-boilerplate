import { routes as HomeRoutes } from './modules/Home'
import { routes as AuthRoutes } from './modules/Auth'
import { routes as ErrorRoutes } from './modules/Error'

export default [].concat(HomeRoutes, AuthRoutes, ErrorRoutes)
