import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import user from './modules/user'
import post from './modules/post'
import job from './modules/job'

Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    state: {

    },

    mutations: {

    },

    actions: {

    },

    modules: {
      auth,
      user,
      post,
      job,
    }
  })
}
