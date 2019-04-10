import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '@/utils/api'
// import router from '@/router'
import arch from './modules/common/arch'
import ua from './modules/common/ua'
import auth from './modules/common/auth'

Vue.use(Vuex)

const initialState = () => ({
  DEV: process.env.NODE_ENV !== 'production',
  version: Cookies.get('version') || 'v2',
  loading: false,
  msgOfModal: {
    text: '',
    mode: ''
  },
  toastedMsg: '',
  hasAvailableScrollY: true
})

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: initialState(),

  getters: {
    isLatest: state => state.version === 'v2'
  },

  actions: {
    init ({ state, commit }) {
      commit('auth/init', null, { root: true })
      commit('user/init', null, { root: true })
      Cookies.remove('accessToken')
    },

    // 置き場がないので後ほど考えたい
    async setBuyerAuthorizationStatus ({ state, commit }, params) {
      const { data, err } = await api.post(`/orgs/${params.orgId}/invoice`, params)

      if (err) {
        console.log(err)
        commit('showUtilErrorMessage', { msg: err }, { root: true })
      } else {
        commit('showToastedMsg', data, { root: true })
        return data
      }
    }
  },

  mutations: {
    loading (state, status) {
      state.loading = status
    },
    showUtilErrorMessage (state, { msg, mode }) {
      let errMsg
      // err が直接投げられた場合
      if (msg.data) {
        errMsg = msg.data.errors.map(item => item.messages).join('\n')
      } else {
        errMsg = msg
      }
      state.msgOfModal.text = errMsg
      state.msgOfModal.mode = mode
    },
    clearMsgOfModal (state) {
      state.msgOfModal.text = ''
      state.msgOfModal.mode = ''
    },
    showToastedMsg (state, msg) {
      let toastedMsg

      if (msg.success) {
        toastedMsg = msg.success.message
      } else {
        toastedMsg = msg
      }
      state.toastedMsg = toastedMsg
    },
    validateScroll (state) {
      state.hasAvailableScrollY = true
    },
    invalidateScroll (state) {
      state.hasAvailableScrollY = false
    },
    setVersion (state, apiVersion) {
      // 正しいversionが保存されていなければ、cookieを更新してページリロード
      let incorrectVersion = state.version !== apiVersion
      if (incorrectVersion) {
        Cookies.set('version', apiVersion)
        return location.reload()
      }

      api.defaults.baseURL = process.env.VUE_APP_API_ROOT + '/' + state.version
    }
  },

  modules: {
    arch,
    ua,
    auth
  }

})
