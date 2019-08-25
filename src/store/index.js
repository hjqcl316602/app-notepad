import Vue from 'vue';
import Vuex from 'vuex';

import basis from './basis';

Vue.use(Vuex);
//console.log(Vuex);
const store = new Vuex.Store({
  modules: {
    basis
  }
});

export default store;
