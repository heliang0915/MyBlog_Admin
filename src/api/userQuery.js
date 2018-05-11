/**
 * 用户查询API
 * User: heliang
 * Date: 2018/2/27.
 */
import fetch from '../util/fetch';
import {conf} from '../../config';
let userQuery={
    //查询
    list:({cur,params})=>{
        cur=cur==null?1:cur;
        return new Promise((resolve,reject)=>{
            fetch.post(`${conf.base}/api/user/list`,{
                page:cur,
                params:params
            }).then((response)=>{
                let {data} =response;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    },
    getSingle:(uuid)=>{
        return new Promise((resolve,reject)=>{
            fetch.get(`${conf.base}/api/user/single/${uuid}`).then((response)=>{
                let {data} =response;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    },
    getUserInfo:(uuid)=>{
        return new Promise((resolve,reject)=>{
            fetch.get(`${conf.base}/api/user/getUserInfo/${uuid}`).then((response)=>{
                let {data} =response;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    },
    //保存
    save:(user)=>{
        return new Promise((resolve,reject)=>{
            fetch.post(`${conf.base}/api/user/save`,user).then((response)=>{
                let {data} =response;
                resolve(data);
            }).catch((err)=>{
                reject(err);
            })
        })
    },
    del:(uuid)=>{
        return new Promise((resolve,reject)=>{
            console.log("del.....")
            fetch.get(`${conf.base}/api/user/delete/${uuid}`).then((response)=>{
                let {data} =response;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    },
    checkToken(token){
        return new Promise((resolve,reject)=>{
            fetch.post(`${conf.base}/api/checkToken`,{token}).then((response)=>{
                let {data} =response;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    }
}

module.exports=userQuery;