/*
 * 客户端下入口文件
 * */
import Vue from 'vue';
import App from './App.vue';
import {createRouter} from './router';
import store from './store';
import {isServer} from '../config'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export function createApp() {
    Vue.config.errorHandler = function (err, vm) {
        console.log('Vue出现错误%s', err);
    }
    console.log("isServer>>>"+isServer);
    Vue.use(ElementUI);
    let router = createRouter();
    let app = new Vue({
        router,
        store,
        render: h => h(App)
    })
    return {app,router,store}
}



