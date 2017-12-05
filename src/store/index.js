import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  loading: false,
  state: {
    alipayCardInfo: {
      alipayCardNo: null,
      alipayCardStatus: null,
      alipayCardData: null,
      cashBalance: null
    }
  },
  mutations: {
    LOADING (state, data) {
      state.loading = data
    },
    ALIPAYCARDINFO (state, { item, data }) {
      state.alipayCardInfo[item] = data
    }
  },
  actions: {
    setLoading ({ commit }, data) {
      commit(LOADING, data)
    },
    setAlipayCardInfo ({ commit }, payload) {
      commit('ALIPAYCARDINFO', payload)
    }
  }
})
