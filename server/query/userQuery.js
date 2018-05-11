/**
 * 用户查询API
 * User: heliang
 * Date: 2018/2/27.
 */
import fetch from '../util/fetch';
import {conf} from '../../config';

//Admin 服务器调用Back服务器
let userQuery={
    //查询
    getUserInfo:(uuid,req)=>{
        return new Promise((resolve,reject)=>{
            fetch(`${conf.api}/user/getUserInfo/${uuid}`,req).then((response)=>{
                let {data} =response;
                    resolve(data)
                }).catch((err)=>{
                    reject(err);
                })
        })
    },
    login(req){
        return new Promise((resolve,reject)=>{
            fetch(`${conf.api}/login/`,req).then((response)=>{
                let {data} =response;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    },
    checkToken(token){
        return new Promise((resolve,reject)=>{
            fetch(`${conf.api}/checkToken`,null,"POST",{token}).then((response)=>{
                let {data} =response;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    }
}

module.exports=userQuery;