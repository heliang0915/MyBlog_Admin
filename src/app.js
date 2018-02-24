/*
 * 客户端下入口文件
 * */
import Vue from 'vue';
import App from './App.vue';
import {createRouter} from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

export function createApp() {
    Vue.config.errorHandler = function (err, vm) {
        console.log('Vue出现错误%s', err);
    }
    Vue.use(ElementUI);
    // if (process.browser) {
    //     require ('swiper/dist/css/swiper.css')
    //     const VueAwesomeSwiper = require('vue-awesome-swiper/ssr')
    //     Vue.use(VueAwesomeSwiper)
    // }
    let router = createRouter();
    let app = new Vue({
        router,
        store,
        render: h => h(App)
    })
    return {app,router,store}
}



