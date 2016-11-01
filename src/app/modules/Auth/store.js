import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      name: null,
      accessToken: null
    }
  },
  mutations: {
    user(state, user) {
      state.user = user
    },
    userName(state, name) {
      state.user.name = name
    }
  },
  actions: {
    fetchUser({ commit }) {
      /* Some async backend task */
      window.setTimeout(() => {
        commit('user', {
          name: 'Marcos Moura',
          accessToken: Date.now()
        })
      }, 2000)
    }
  }
})

export default store
