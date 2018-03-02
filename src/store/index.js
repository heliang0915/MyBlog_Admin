/**
 * vuex store
 */
import Vue from 'vue';
import Vuex from 'vuex';
import index from './modules/index';
import channel from './modules/channel';
import article from './modules/article';
Vue.use(Vuex);
var store=new Vuex.Store({
    modules:{
      index,
      channel,
      article
    }
})

export default  store;