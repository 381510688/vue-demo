import empty from '@/views/empty.vue';

const overview = resolve => require(['@/views/datacenter/overview/overview.vue'], resolve);

export default {
  path: '/datacenter',
  component: empty,
  meta: {name: '数据中心'},
  children: [{
    path: 'overview',
    component: overview,
    meta: {name: '整体概览'}
  }]
};
