let env=process.env.NODE_ENV||"development";
let vueEnv=process.env.VUE_ENV||"client";
let cacheTime=24*60*60*60*1000;
//全局模板文件
let templateName="template";

let config={
    development:{
        port:9100,
        host:'http://localhost',
        base:"http://localhost:9100",
        api:'http://blogapi.top',
        // api:'http://localhost:8888',
        zimg:{
            host:"www.blogapi.top",
            port:"4869",
            uploadPath:"/upload",
            zImgUpload:"http://www.blogapi.top:4869/upload",
            zImgDelete:"http://www.blogapi.top:4869/admin"
        }
    },
    production:{
        port:9200,
        host:'http://localhost',
        base:"http://localhost:9200",
        // api:'http://apiblog2.sturgeon.mopaasapp.com',
        api:'https://blogapi.top',
        zimg:{
            host:"www.blogapi.top",
            port:"4869",
            uploadPath:"/upload",
            zImgUpload:"https://www.blogapi.top:4869/upload",
            zImgDelete:"https://www.blogapi.top:4869/admin"
        }
}
};

let conf= config[env];
var BaseURL = "/umeditor/";
let editorConfig= {
    //为编辑器实例添加一个路径，这个不能被注释
    UMEDITOR_HOME_URL: BaseURL,
    imageUrl: "/editor/uploadEditor",//图片上传提交地址
    imagePath: "/upload/images/", //图片修正地址，引用了fixedImagePath,如有特殊需求，可自行配置
    imageFieldName: "upfile",
};


let isServer=(vueEnv=="server");
let isProd=(env!="development");
module.exports={
    conf,env,isProd,isServer,cacheTime,templateName,editorConfig
}