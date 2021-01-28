import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { store } from './store/store';
import { routes } from './routes';
import AxiosApi from './axios-api';

Vue.use(VueRouter);
Vue.prototype.$http = AxiosApi;
AxiosApi.defaults.timeout = 10000;

const router = new VueRouter({
    routes,
    mode: 'history'
});

export const bus = new Vue({
    methods: {
        
    }
  });

var vm = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})


