/**
 * vue客户端路由会映射到服务器端 动态路由
 */
if (typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) };
// //首页路由
const indexComponent=  r => require.ensure([], () => r(require('../views/index.vue')), 'indexComponent')
const indexEditComponent=  r => require.ensure([], () => r(require('../views/edit.vue')), 'indexComponent')
//
//
// //频道
const channelListComponent=  r => require.ensure([], () => r(require('../views/channel/channel-list.vue')), 'channelListComponent')
const channelSaveComponent=  r => require.ensure([], () => r(require('../views/channel/channel-save.vue')), 'channelSaveComponent')
//
// //文章
const articleListComponent=  r => require.ensure([], () => r(require('../views/article/article-list.vue')), 'channelListComponent')
const articleSaveComponent=  r => require.ensure([], () => r(require('../views/article/article-save.vue')), 'channelSaveComponent')

// //关于
// const aboutComponent=  r => require.ensure([], () => r(require('../views/about.vue')), 'aboutComponent')
//
// //测试组件首页
// const weightIndexComponent=  r => require.ensure([], () => r(require('../views/weight/index.vue')), 'weightComponent')

// const notFoundComponent=  r => require.ensure([], () => r(require('../views/NotFound.vue')), 'noFoundComponent')


export default {
    indexComponent,
    indexEditComponent,
    channelListComponent,
    channelSaveComponent,
    articleListComponent,
    articleSaveComponent

}

//
// let vueRouterConfig={
//     //首页路由
//     indexComponent:"index",
//     notFoundComponent:"NotFound",
//     indexEditComponent:"edit",
//     //频道
//     channelListComponent:"channel/channel-list",
//     channelSaveComponent:"channel/channel-save",
//     //文章
//     articleListComponent:"article/article-list",
//     articleSaveComponent:"article/article-save"
// }
//
//
// let vueRouter={};
// Object.keys(vueRouterConfig).forEach((key)=>{
//     makeComponent(key,vueRouterConfig[key]);
// })
//
//
// //构造组件列表
// function makeComponent(key,vueFile){
//     let component=r => require.ensure([], () => r(require(`../views/${vueFile}`)), key)
//     vueRouter[key]=component;
// }
// export default vueRouter