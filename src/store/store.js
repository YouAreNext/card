import Vue from 'vue';
import Vuex from 'vuex';
import payHistory from './modules/payHistory';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        payHistory
    }
})
