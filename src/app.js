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
import {checkToken} from "../src/api/userQuery";

export function createApp() {
    Vue.use(ElementUI);
    Vue.config.errorHandler = function (err, vm) {
        console.log('Vue出现错误%s', err);
    }
    let router = createRouter();
    router.beforeEach((to, from, next) => {
        if(isServer==false){
            var token="";
            console.log("to>>>>>>>>>>>"+JSON.stringify(to));

            var cookieAry=document.cookie.split(";");
            if(cookieAry.length){
                cookieAry.forEach((cookie)=>{
                    var info=cookie.split("=");
                    if(info[0].trim().toString()=="token"){
                        token=info[1];
                    }
                })
            }
            if(to.path=="/login"){
                next();
            }else{
                checkToken(token).then((data)=>{
                    if(data==true){
                        next();
                    }else{
                        //跳转登录
                        next({
                            name: 'login'
                        })
                    }
                })
            }
        }else {
            next();
        }
    });
    let app = new Vue({
        router,
        store,
        render: h => h(App)
    })
    return {app,router,store}
}



