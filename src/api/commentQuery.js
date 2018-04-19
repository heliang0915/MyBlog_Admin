/**
 * 用户查询API
 * User: heliang
 * Date: 2018/2/27.
 */
import fetch from '../util/fetch';
import {conf} from '../../config';
let commentQuery={
    //查询
    list:({cur,params})=>{
        cur=cur==null?1:cur;
        return new Promise((resolve,reject)=>{
            fetch.post(`${conf.base}/api/comment/list`,{
                page:cur,
                params:params,
                sort:"date"
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
            fetch.get(`${conf.base}/api/comment/single/${uuid}`).then((response)=>{
                let {data} =response;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    },
    //保存
    save:(comment)=>{
        return new Promise((resolve,reject)=>{
            fetch.post(`${conf.base}/api/comment/save`,comment).then((response)=>{
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
            fetch.get(`${conf.base}/api/comment/delete/${uuid}`).then((response)=>{
                let {data} =response;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    }
}

module.exports=commentQuery;