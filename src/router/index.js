import Vue from 'vue';
import Router from 'vue-router';
import home from '@/containers/Home';
import CreateSnipmarks from '@/containers/CreateSnipmark';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home,
    },
    {
      path: '/create',
      name: 'CreateSnipmarks',
      component: CreateSnipmarks,
    },
  ],
});
