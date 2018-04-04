/**
 * vue客户端路由会映射到服务器端 动态路由
 */
if (typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) };
// //首页路由
const indexComponent=  r => require.ensure([], () => r(require('../views/index.vue')), 'indexComponent')
const indexEditComponent=  r => require.ensure([], () => r(require('../views/edit.vue')), 'indexComponent')

//频道
const channelListComponent=  r => require.ensure([], () => r(require('../views/channel/channel-list.vue')), 'channelListComponent')
const channelSaveComponent=  r => require.ensure([], () => r(require('../views/channel/channel-save.vue')), 'channelSaveComponent')

//文章
const articleListComponent=  r => require.ensure([], () => r(require('../views/article/article-list.vue')), 'articleListComponent')
const articleSaveComponent=  r => require.ensure([], () => r(require('../views/article/article-save.vue')), 'articleSaveComponent')

//用户
const userListComponent=  r => require.ensure([], () => r(require('../views/user/user-list.vue')), 'userListComponent')
const userSaveComponent=  r => require.ensure([], () => r(require('../views/user/user-save.vue')), 'userSaveComponent')

//角色
const roleListComponent=  r => require.ensure([], () => r(require('../views/role/role-list.vue')), 'roleListComponent')
const roleSaveComponent=  r => require.ensure([], () => r(require('../views/role/role-save.vue')), 'roleSaveComponent')

//菜单
const menuListComponent=  r => require.ensure([], () => r(require('../views/menu/menu-list.vue')), 'menuListComponent')
const menuSaveComponent=  r => require.ensure([], () => r(require('../views/menu/menu-save.vue')), 'menuSaveComponent')

//权限
const rightComponent=  r => require.ensure([], () => r(require('../views/right/right-index.vue')), 'rightComponent')

//404
const notFoundComponent=  r => require.ensure([], () => r(require('../views/NotFound.vue')), 'noFoundComponent')


export default {
    indexComponent,
    indexEditComponent,
    channelListComponent,
    channelSaveComponent,
    articleListComponent,
    articleSaveComponent,
    userListComponent,
    userSaveComponent,
    roleListComponent,
    roleSaveComponent,
    menuListComponent,
    menuSaveComponent,
    rightComponent,
    notFoundComponent,
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