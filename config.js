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
        api:'http://localhost:8888',
        zimg:{
            host:"p.3w.net579.com",
            port:"80",
            uploadPath:"/upload",
            zImgUpload:"http://192.168.0.4/upload",
            zImgDelete:"http://192.168.0.4/admin"
        }
    },
    production:{
        port:9200,
        host:'http://localhost',
        base:"http://localhost:9200",
        api:'http://localhost:8888',
         zimg:{
            host:"p.3w.net579.com",
            port:"80",
            uploadPath:"/upload",
            zImgUpload:"http://192.168.0.4/upload",
            zImgDelete:"http://192.168.0.4/admin"
        }
}
};

let conf= config[env];
let isServer=vueEnv=="server";
let isProd=(env!="development");
module.exports={
    conf,env,isProd,isServer,cacheTime,templateName
}