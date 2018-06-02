import express  from 'express';
import fs  from 'fs';
import path  from 'path';
import  SEO from '../SEO';
import minify from 'html-minifier';
const {createBundleRenderer} = require('vue-server-renderer');
const resolve = file => path.resolve(__dirname, file);
import  {env} from '../../config';
let router=express.Router();
let templatePath=env!="development"?path.join(__dirname,"../../dist/server/template/template.html"):
    path.join(__dirname,"../template/template.html");
let template = fs.readFileSync(templatePath,'utf-8');
const serverBundle = require('../../dist/vue-ssr-server-bundle.json');
const clientManifest = require('../../dist/vue-ssr-client-manifest.json');

let renderer=createBundleRenderer(serverBundle,{
    template,
    clientManifest,
    basedir: resolve('../../dist'),
    runInNewContext: false
});
//合并上下文
let mergeContext=(context,path)=>{
    var tmp=path;
    if(tmp){
        let seo=SEO[tmp];
        console.log("后端路径：");
        if(seo){
            Object.keys(seo).forEach((key)=>{
                context[key]=seo[key];
            })
        }else{
            let seoItem=SEO["*"];
            let {seo}=seoItem;
            if(seo){
                Object.keys(seo).forEach((key)=>{
                    context[key]=seo[key];
                })
            }
        }
    }
    return context;
}


router.route("*").all((req,res,next)=>{
    let context={
        title: '默认标题',
        keywords:'默认关键字',
        description:'默认描述',
        url:req.originalUrl
    }
    context=mergeContext(context,req.originalUrl);
    renderer.renderToString(context, (err, html) => {
        if(env!="development"){
            //压缩html代码
            html=minify.minify(html,{
                collapseWhitespace:true,
                removeEmptyAttributes:true,
                minifyJS:true,
                minifyCSS:true
            })
        }
        if (err) {
            next(err);
        } else {
            res.end(html);
        }
    })
})
export default router;