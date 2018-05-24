/**
 * 客户端路由
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import  routerMap from './routes/routerMap';
import  SEO from '../server/SEO';

Vue.use(VueRouter);
export function createRouter() {
    return new VueRouter(getConfig());
}
let routes=[];
Object.keys(routerMap).map((path)=>{
    let {title,keywords,description}=SEO[path];
    let meta={
        title,
        keywords,
        description
    }
    let {component,name}=routerMap[path];
    routes.push({path,component,name,meta});
})
let getConfig = () => {
    let config = {};
    config.mode = "history";
    config.routes = routes
    return config;
};


