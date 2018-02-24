/**
 * vuex store
 */
import Vue from 'vue';
import Vuex from 'vuex';
import index from './modules/index';
import channel from './modules/channel';
Vue.use(Vuex);
var store=new Vuex.Store({
    modules:{
      index,
      channel
    }
})

export default  store;