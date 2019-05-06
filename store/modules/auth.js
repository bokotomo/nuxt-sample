export default {
  namespaced: true,

  state: {
    isSignin: false,
  },

  mutations: {

  },

  actions: {
    async signin ({ state, rootState, dispatch, commit }) {
      state.isSignin = true
      this.$router.push('/');
    },

    async signout ({ state, rootState, dispatch, commit }) {
      state.isSignin = false
      this.$router.push('/');
    },
  }
}
