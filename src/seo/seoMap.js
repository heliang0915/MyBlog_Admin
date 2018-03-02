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