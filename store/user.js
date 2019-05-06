export default {
  namespaced: true,

  state: {
    user: {},
    // APIができるまではモックで代替。
    users: [
      {
        id: 1,
        name: 'tomo',
        location: 'tokyo',
        thumbnail: require('~/assets/images/user1.jpg'),
        totalGood: 11,
        description: 'よろしくお願いします。よろしくお願いします。よろしくお願いします。よろしくお願いします。よろしくお願いします。よろしくお願いします。よろしくお願いします。',
        tags: [
          'UI/UX',
          '3D graphics',
          'Sound effect',
        ],
      },
      {
        id: 2,
        name: 'fukumoto',
        location: 'tokyo2',
        thumbnail: require('~/assets/images/user2.png'),
        totalGood: 111,
        description: 'よろしくお願いします。よろしくお願いします。よろしくお願いします。よろしくお願いします。よろしくお願いします。よろしくお願いします。よろしくお願いします。',
        tags: [
          '3D graphics',
          'Sound effect',
        ],
      },
    ],
  },

  mutations: {
    setCurrentUser (state, user) {
      state.user = user
    },
  },

  actions: {
    // ユーザ一覧をAPIから取得
    async getUsers ({ state, rootState, dispatch, commit }) {

    },

    // 指定のユーザ一情報を取得
    async getUser ({ state, dispatch, commit }, { userId }) {
      const user = state.users.find(user => user.id === userId)
      commit('setCurrentUser', user)
    },
  }
}
