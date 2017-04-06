import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
// import * as getters from './getters'
import home from './modules/home'
import error from './modules/error'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  // getters,
  modules: {
    home,
    error
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
