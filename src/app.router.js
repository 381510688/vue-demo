/**
 * Created by ligang on 17/8/3.
 */

import VueRouter from 'vue-router';

import App from '@/App'
import account from '@/routes/account';
import datacenter from '@/routes/datacenter';

// https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
const page404 = resolve => require(['@/views/page/404.vue'], resolve);
const page500 = resolve => require(['@/views/page/500.vue'], resolve);

const login = resolve => require(['@/views/login/login.vue'], resolve);


const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '',
    component: App,
    children: [{
      path: '',
      component: login
    },
      account,
      datacenter
    ]
  }, {
    path: '/login',
    component: login
  }, {
    path: '/404',
    component: page404
  }, {
    path: '/500',
    component: page500
  }, {
    path: '*',
    component: page404
  }]
});

export default router;
