export default {
  namespaced: true,

  state: {
    job: {},
    // APIができるまではモックで代替。
    jobs: [
      {
        id: 1,
        name: 'jobName1',
        thumbnail: require('~/assets/images/user1.jpg'),
      },
      {
        id: 2,
        name: 'jobName2',
        thumbnail: require('~/assets/images/user2.png'),
      },
    ],
  },

  mutations: {
    setCurrentJob (state, job) {
      state.job = job
    },
  },

  actions: {
    // ユーザ一覧をAPIから取得
    async getJobs ({ state, rootState, dispatch, commit }) {

    },

    // 指定のユーザ一情報を取得
    async getJob ({ state, dispatch, commit }, { jobId }) {
      const job = state.jobs.find(job => job.id === +jobId)
      commit('setCurrentJob', job)
    },
  }
}
