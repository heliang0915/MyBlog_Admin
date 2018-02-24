/**
 * vue客户端路由会映射到服务器端 动态路由
 */
if (typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) };
//首页路由
const indexComponent=  r => require.ensure([], () => r(require('../views/index.vue')), 'indexComponent')
const indexEditComponent=  r => require.ensure([], () => r(require('../views/edit.vue')), 'indexComponent')


//频道

const channelListComponent=  r => require.ensure([], () => r(require('../views/channel/channel-list.vue')), 'channelListComponent')

// //关于
// const aboutComponent=  r => require.ensure([], () => r(require('../views/about.vue')), 'aboutComponent')
//
// //测试组件首页
// const weightIndexComponent=  r => require.ensure([], () => r(require('../views/weight/index.vue')), 'weightComponent')

const notFoundComponent=  r => require.ensure([], () => r(require('../views/NotFound.vue')), 'noFoundComponent')
export {
    indexComponent,
    indexEditComponent,
    channelListComponent,
    // aboutComponent,
    // weightIndexComponent,
    notFoundComponent
}