import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import VueResource from 'vue-resource';
Vue.use(VueResource);

import RouterMap from './router.config.js';

import App from './App';

// vue-router 跳转
const router = new VueRouter();
RouterMap(router);
