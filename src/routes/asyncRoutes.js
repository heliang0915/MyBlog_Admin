/**
 * vue客户端路由会映射到服务器端 动态路由
 */
if (typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) };
// //首页路由
const indexComponent=  r => require.ensure([], () => r(require('../views/index.vue')), 'indexComponent')
const indexEditComponent=  r => require.ensure([], () => r(require('../views/edit.vue')), 'indexComponent')

//频道
const channelComponent=  r => require.ensure([], () => r(require('../views/channel/channel-list.vue')), 'channelListComponent')
const channelSaveComponent=  r => require.ensure([], () => r(require('../views/channel/channel-save.vue')), 'channelSaveComponent')

//文章
const articleComponent=  r => require.ensure([], () => r(require('../views/article/article-list.vue')), 'articleListComponent')
const articleSaveComponent=  r => require.ensure([], () => r(require('../views/article/article-save.vue')), 'articleSaveComponent')

//用户
const userComponent=  r => require.ensure([], () => r(require('../views/user/user-list.vue')), 'userListComponent')
const userSaveComponent=  r => require.ensure([], () => r(require('../views/user/user-save.vue')), 'userSaveComponent')

//角色
const roleComponent=  r => require.ensure([], () => r(require('../views/role/role-list.vue')), 'roleListComponent')
const roleSaveComponent=  r => require.ensure([], () => r(require('../views/role/role-save.vue')), 'roleSaveComponent')

//菜单
const menuComponent=  r => require.ensure([], () => r(require('../views/menu/menu-list.vue')), 'menuListComponent')
const menuSaveComponent=  r => require.ensure([], () => r(require('../views/menu/menu-save.vue')), 'menuSaveComponent')

//权限
const rightComponent=  r => require.ensure([], () => r(require('../views/right/right-index.vue')), 'rightComponent')

//评论
const commentComponent=  r => require.ensure([], () => r(require('../views/comment/comment-list.vue')), 'commentComponent')
const replyComponent=  r => require.ensure([], () => r(require('../views/comment/reply-list.vue')), 'replyComponent')

//404
const notFoundComponent=  r => require.ensure([], () => r(require('../views/NotFound.vue')), 'noFoundComponent')

const loginComponent=r=>require.ensure([], () => r(require('../views/login/login.vue')), 'loginComponent')

export default {
    indexComponent,
    indexEditComponent,
    channelComponent,
    channelSaveComponent,
    articleComponent,
    articleSaveComponent,
    userComponent,
    userSaveComponent,
    roleComponent,
    roleSaveComponent,
    menuComponent,
    menuSaveComponent,
    rightComponent,
    commentComponent,
    replyComponent,
    loginComponent,
    notFoundComponent,

}