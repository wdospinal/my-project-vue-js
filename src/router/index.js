import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/containers/Home';
import CreateSnipmarks from '@/containers/CreateSnipmark';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/create-snipmarks',
    name: 'CreateSnipmarks',
    component: CreateSnipmarks,
  },
];

export default new Router({
  mode: 'history', // para recargar la vista sin la pagina
  routes,
  linkActiveClass: 'is-active', // el link activo tiene la clase is-active
});
