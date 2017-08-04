/**
 * Created by ligang on 17/8/3.
 */

import empty from '@/views/empty.vue';

const modifyPassword = resolve => require(['@/views/account/modifyPassword/modifyPassword.vue'], resolve);

export default {
  path: '/account',
  component: empty,
  meta: {name: '用户中心'},
  children: [{
    path: 'modifypassword',
    component: modifyPassword,
    meta: {name: '修改密码'}
  }]
};
