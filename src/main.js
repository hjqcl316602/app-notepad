/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-18 21:56:40
 * @LastEditTime: 2019-08-20 17:00:50
 * @LastEditors: Please set LastEditors
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './filter';
import './theme/index.less';
import { typer } from 'store-es';
Vue.config.productionTip = false;
//console.log(stores.typer.isUndefined());

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
