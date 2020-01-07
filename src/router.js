// 配合路由
import Vue from 'vue';
import VueRouter from 'vue-router';
import Bar from './components/Bar.vue';

Vue.use(VueRouter);

// 服务端渲染，需要返回一个函数， 保证每个用户使用不同的路由实例
export default () => {
  let router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: Bar },
      { path: '/foo', component: () => import('./components/Foo.vue')},
    ]
  });
  return router;
}