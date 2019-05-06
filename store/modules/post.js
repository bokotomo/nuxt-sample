export default {
  namespaced: true,

  state: {
    post: {},
    // APIができるまではモックで代替。
    posts: [
      {
        id: 1,
        name: '2D Dots Charactor Design',
        good: 1,
        comment: 1,
        date: '2019/08/01',
        userId: 'tomo',
        userName: 'tomo',
        userThumbnail: require('~/assets/images/user1.jpg'),
        isGood: true,
        thumbnail: require('~/assets/images/user1.jpg'),
        description: 'Hallo everbody,I love listening to podcast, it’s a habit that I formed since 1 years ago. So, I dedicate to make one. This is one some screens podcast app for ios. Please let me know what you think on the comment section! ',
        comments: [
          {
            id: 1,
            userId: 'boko1234',
            userName: 'fukumoto',
            userThumbnail: require('~/assets/images/user2.png'),
            date: '2019/08/01 22:11',
            text: 'Whilst I think your product is interesting you really need to take a second look at your logo design. Its almost i',
          },
        ],
      },
      {
        id: 2,
        name: '2D Charactor Game',
        good: 11,
        comment: 2,
        date: '2019/08/01',
        userId: 'boko1234',
        userName: 'fukumoto',
        userThumbnail: require('~/assets/images/user2.png'),
        isGood: false,
        thumbnail: require('~/assets/images/user2.png'),
        description: 'Hallo everbody,I love listening to podcast, it’s a habit that I formed since 1 years ago. So, I dedicate to make one. This is one some screens podcast app for ios. Please let me know what you think on the comment section! ',
        comments: [
          {
            id: 1,
            userId: 'tomo',
            userName: 'tomo',
            userThumbnail: require('~/assets/images/user1.jpg'),
            date: '2019/08/01 22:11',
            text: 'Whilst I think your product is interesting you really need to take a second look at your logo design. Its almost i',
          },
          {
            id: 2,
            userId: 'tomo',
            userName: 'tomo',
            userThumbnail: require('~/assets/images/user1.jpg'),
            date: '2019/08/01 22:21',
            text: 'Whilst I think your product is interesting you really need to take a second look at your logo design. Its almost i',
          },
        ],
      },
    ],
  },

  mutations: {
    setCurrentPost(state, post) {
      state.post = post
    },
  },

  actions: {
    // ユーザ一覧をAPIから取得
    async getPosts ({ state, rootState, dispatch, commit }) {

    },

    // 指定のユーザ一情報を取得
    async getPost ({ state, dispatch, commit }, { postId }) {
      const post = state.posts.find(post => post.id === +postId)
      commit('setCurrentPost', post)
    },
  }
}
