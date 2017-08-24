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
    name: 'app',
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


router.beforeEach((to, from, next) => {
  let overview = '/overview';
  let slash = '/';
  // 解决根路径的默认地址
  let path = to.fullPath === slash ? overview : to.fullPath;
  // 过滤 '/' 开头的情况
  let navPath = path[0] === slash ? path.substring(1) : path;
  // 过滤 '/' 结尾的情况
  navPath = navPath[navPath.length-1] === slash ? navPath.substring(0, navPath.length-1) : navPath;
  // 防止中间 '/' 没有的情况
  let index = navPath.indexOf(slash) === -1 ? navPath.length : navPath.indexOf(slash);
  // 发送状态
  router.app.$store.commit('isOverview', {
    isOverview: path === overview,
    navRouterPath: navPath.substring(0, index),
    menuRouterPath: path
  });
  next();
});

export default router;
