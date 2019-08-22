/**
 *Created by Shinelon on 2019/7/27
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  selectedItem: null,
}
const mutations = {
  setSelectedItem(state, item) {
    state.selectedItem = item;
  }
}

const store = new Vuex.Store({
  state,
  mutations,
});

export default store;

