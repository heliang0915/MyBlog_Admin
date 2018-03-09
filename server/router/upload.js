/**
 * 上传路由
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
module.exports = router;
