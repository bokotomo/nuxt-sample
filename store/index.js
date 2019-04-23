import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'

Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    state: {
      name: "tomo"
    },
    mutations: {

    },
    actions: {

    },
    modules: {
      user
    }
  })
}
