// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import router from '@/app.router';


Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    headerMenuPath: '',
    sidebarMenuPath: ''
  }
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view></router-view>'
});
