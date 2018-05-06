/**
 *   SEO和路由配置
 */
import  component from '../routes/asyncRoutes';
let seoMap={
    "/":{
        seo:{
            title:"首页",
            keywords:"首页关键字",
            description:"首页描述",
        },
        component:component.indexComponent
    },
    "/edit":{
        seo:{
            title:"编辑",
            keywords:"编辑",
            description:"编辑",
        },
        component:component.indexEditComponent
    },
    "/channel":{
        seo:{
            title:"频道列表",
            keywords:"频道列表",
            description:"频道列表",
        },
        component:component.channelListComponent
    },
    "/channel/save":{
        seo:{
            title:"频道编辑",
            keywords:"频道编辑",
            description:"频道编辑",
        },
        component:component.channelSaveComponent
    },
    "/article":{
        seo:{
            title:"文章列表",
            keywords:"文章列表",
            description:"文章列表",
        },
        component:component.articleListComponent
    },
    "/article/save":{
        seo:{
            title:"文章编辑",
            keywords:"文章编辑",
            description:"文章编辑",
        },
        component:component.articleSaveComponent
    },
    "/user":{
        seo:{
            title:"用户列表",
            keywords:"用户列表",
            description:"用户列表",
        },
        component:component.userListComponent
    },
    "/user/save":{
        seo:{
            title:"用户编辑",
            keywords:"文章编辑",
            description:"用户编辑",
        },
        component:component.userSaveComponent
    },
    "/role":{
        seo:{
            title:"角色列表",
            keywords:"角色列表",
            description:"角色列表",
        },
        component:component.roleListComponent
    },
    "/role/save":{
        seo:{
            title:"角色编辑",
            keywords:"角色编辑",
            description:"角色编辑",
        },
        component:component.roleSaveComponent
    },
    "/menu":{
        seo:{
            title:"菜单列表",
            keywords:"菜单列表",
            description:"菜单列表",
        },
        component:component.menuListComponent
    },
    "/menu/save":{
        seo:{
            title:"菜单编辑",
            keywords:"菜单编辑",
            description:"菜单编辑",
        },
        component:component.menuSaveComponent
    },
    "/right/:uuid":{
        seo:{
            title:"权限",
            keywords:"权限",
            description:"权限",
        },
        component:component.rightComponent
    },
    "/comment":{
        seo:{
            title:"评论",
            keywords:"评论",
            description:"评论",
        },
        component:component.commentComponent
    },
    "/reply":{
        seo:{
            title:"回复",
            keywords:"回复",
            description:"回复",
        },
        component:component.replyComponent
    },
    "/login":{
        seo:{
            title:"登录",
            keywords:"登录",
            description:"登录",
        },
        component:component.loginComponent
    },
    // "/about":{
    //     seo: {
    //         title: "关于",
    //         keywords: "关于关键字",
    //         description: "关于描述"
    //     },
    //     component:aboutComponent
    // },
    // "/weight":{
    //     seo: {
    //         title: "组件测试",
    //         keywords: "组件测试关键字",
    //         description: "组件测试描述"
    //     },
    //     component:weightIndexComponent
    // },
    "*":{
        seo: {
            title: "找不到了",
            keywords: "找不到了",
            description: "找不到了"
        },
        component:component.notFoundComponent
    }
}

export default seoMap;