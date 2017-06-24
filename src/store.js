
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    currentComponentID: 'btn1'
  },
  mutations: {
    UPDATE_COMPONENT_NAME (state, newName) {
      state.currentComponentID = newName
    }
  }
})

export default store
