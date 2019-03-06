import Vue from "vue";
import App from "./App.vue";
import router from './routes';
import Vuex from 'vuex';
import store from './store/store';
import Tooltip from 'vue-directive-tooltip';
import 'vue-directive-tooltip/css/index.css';

Vue.use(Vuex);


//Vue use
Vue.use(Tooltip,{
  delay: 100,
  placement: 'top',
});



Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');