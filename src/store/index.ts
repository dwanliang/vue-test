import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 0
  },
  getters: {
    GetNum(state) {
      return state.num;
    }
  },
  mutations: {//不能使用异步
    increase(state,numbers) {
      state.num+= numbers ? numbers : 1;
    }
  },
  actions: {
  },
  modules: {
  }
})
