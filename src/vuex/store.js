import Vue from 'vue'
import Vuex from 'vuex'
// import lf from 'lf'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
  tailorImg: null
}
const mutations = {
  updateImgDataInfo (state, data) {
    if (data) {
      state.imgData = data
    }
  },
  getImgDataInfo (state) {
    return state.imgData
  },
  UPDATE_TAILORIMG (state, data) {
    if (data) {
      state.tailorImg = data
    }
  },
  GET_TAILORIMG (state) {
    return state.tailorImg
  }
}
const actions = {}
const getters = {}

// for (let item in state) {
//   window.localStorage.getItem(item) ? state[item] = JSON.parse(window.localStorage.getItem(item)) : false
// }

export default new Vuex.Store({
  state, mutations, actions, getters
// plugins: [createPersistedState()]
})
