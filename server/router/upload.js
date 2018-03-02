/**
 *
 * User: heliang
 * Date: 2017/12/18.
 */

var express = require('express');
import {env,conf} from '../../config';
var router = express.Router();
const path = require('path');
const multiparty = require('multiparty');
const fs = require('fs');
const zimgConf = conf.zimg;
var zimg=require("../util/ZImgCli"); //
let {host,port}=zimgConf;



// router.get("/", function (req, res){
//     res.send("上传首页");
// })

//上传文件
router.post("/uploadFile", function (req, res) {
    console.log("上传文件....");
    //生成multiparty对象，并配置上传目标路径
    var uploadPath=path.join(__dirname,"/../public/upload/")
    var form = new multiparty.Form({uploadDir: uploadPath});
    console.log("上传文件....");
    //上传完成后处理
    form.parse(req, function (err, fields, files) {
        console.log("uploadFile...");
        var filesTmp = JSON.stringify(files, null, 2);

        if (err) {
            console.log('出现错误: ' + err);
        } else {
            console.log("上传完成后处理...");
            var inputFile = files.upload[0];
            var uploadedPath = inputFile.path;
            var realName=inputFile.originalFilename;
            var dstPath = uploadPath + inputFile.originalFilename;
            fs.rename(uploadedPath, dstPath, function (err) {
                if (err) {
                    console.log('重命名出错: ' + err);
                } else {
                    // console.log("files.media.size>>"+inputFile.size);
                    // var zimg=new ZImgCli();
                    console.log("重命名完毕....");
                    zimg.upload(dstPath,inputFile,'userfile',(err,md5)=>{
                        fs.unlink(dstPath);
                            let info={
                                message:err==null?"ok":err.message,
                                flag:err==null?1:0,
                                data:{
                                    md5:md5.replace('/',''),
                                    url:"http://"+host+":"+port+md5
                                }
                            };
                            res.send(info);
                    })
                }
            });
            // fdfs.uploadFile(uploadedPath,function (fileId) {
            //     fs.unlink(uploadedPath);
            //     res.send("<script>parent.gotoIndex('"+fileId+"')</script>")
            // })

            // ftp.uploadFile(uploadedPath,function(){
            //     fs.unlink(uploadedPath);
            //     res.send("<script>parent.gotoIndex()</script>")
            // })

            // //重命名为真实文件名
            // fs.rename(uploadedPath, dstPath, function (err) {
            //     if (err) {
            //         console.log('重命名出错: ' + err);
            //     } else {
            //         ftp.uploadFile(dstPath,function(){
            //             fs.unlink(dstPath);
            //             res.send("<script>parent.gotoIndex()</script>")
            //         })
            //         // excel.excel2Data(realName,function(){
            //         //     console.log("生成数据成功");
            //         //     console.log("dstPath>>>"+dstPath);
            //         //     fs.unlink(dstPath);
            //         // })
            //     }
            // });
        }

    });
});

//存入图片信息
function addImgModel(md5,name,callback){
    var modelData ={
        name,
        md5,
    };
    imgDao.add(modelData,()=>{
        callback!=null?callback():null;
    })
}




// router.get("/download/:md5",function (req,res) {
//     // group1/M00/00/00/wKh8DFp4IRaAaWRoAAWylkemyos119.jpg
//     // var ws = fs.createWriteStream(res);
//
//     // console.dir(fs);
//
//     let path=req.path;
//     let url=req.originalUrl;
//
//     // let md5=0;
//     let key="/download/";
//     let md5=path.substring(path.indexOf(key)+key.length,path.indexOf("?")==-1?path.length:path.indexOf("?"));
//     let query=url.substring(url.indexOf("?")==-1?url.length:url.indexOf("?"),url.length);
//     // if(path){
//     //
//     // }
//     // let md5=req.query;
//     // console.log("path>>>>"+path);
//     // console.log((path.indexOf("?")==-1?path.length:path.indexOf("?")),path.length);
//
//     zimg.downloadFile(md5,query,(err,html)=>{
//         // res.writeHead('200', {'Content-Type': 'image/jpeg'});    //写http头部信息
//         // res.write(html,'binary');
//         // console.log(html);
//         res.end(html);
//         // console.log(html);
//         // res.send(html);
//     })
//
//
//
//
//     // fdfs.downloadFile('group1/M00/00/00/wKh8DFp4IRaAaWRoAAWylkemyos119.jpg','1111.jpg',function (err,data) {
//     //      console.log(err);
//     //      console.log(data);
//     // });
//
// })

module.exports = router;
