/**
 * vuex store
 */
import Vue from 'vue';
import Vuex from 'vuex';
import index from './modules/index';
import channel from './modules/channel';
import article from './modules/article';
import user from './modules/user';
import role from './modules/role';
import menu from './modules/menu';
import comment from './modules/comment';
import right from './modules/right';
Vue.use(Vuex);
var store=new Vuex.Store({
    modules:{
      index,
      channel,
      article,
      user,
      role,
      menu,
      right,
      comment
    }
})

export default  store;