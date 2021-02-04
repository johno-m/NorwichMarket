import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { store } from './store/store';
import { routes } from './routes';
import AxiosApi from './axios-api';
import axios from 'axios'

Vue.use(VueRouter);
Vue.prototype.$http = AxiosApi;
AxiosApi.defaults.timeout = 10000;

const router = new VueRouter({
    routes,
    mode: 'history'
});

export const bus = new Vue({
    methods: {
        loadMarketInfo: function(){
          axios.all([ axios.get("https://norwich-market.firebaseio.com/stallData.json"), axios.get("https://norwich-market.firebaseio.com/stallIndex.json") ])
            .then(axios.spread((info, index) => {
                let stalls = {
                    index: index.data,
                    info: info.data
                }
                store.dispatch("updateStoreWithStalls", stalls);
            }))
            .catch(err => { this.error = err.message; });
        }
    }
  });

var vm = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})


