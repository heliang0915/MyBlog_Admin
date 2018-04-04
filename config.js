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
        // api:'https://apiblog.butterfly.mopaasapp.com',
        api:'http://localhost:8888',
        zimg:{
            host:"p.3w.net579.com",
            port:"80",
            uploadPath:"/upload",
            zImgUpload:"http://192.168.124.4/upload",
            zImgDelete:"http://192.168.124.4/admin"
        }
    },
    production:{
        port:9200,
        host:'http://localhost',
        base:"http://localhost:9200",
        api:'http://localhost:8888',
         zimg:{
            host:"192.168.124.4",
            port:"80",
            uploadPath:"/upload",
            zImgUpload:"http://192.168.124.4/upload",
            zImgDelete:"http://192.168.124.4/admin"
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