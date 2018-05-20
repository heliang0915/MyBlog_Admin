/**
 * 文章查询API
 * User: heliang
 * Date: 2018/2/27.
 */
import fetch from '../util/fetch';
import {conf} from '../../config';
import common from '../util/common';
let articleQuery={
    //查询
    list:({cur,params})=>{
        cur=cur==null?1:cur;
        return new Promise((resolve,reject)=>{
            fetch.post(`${conf.base}/api/article/list`,{
                page:cur,
                params:params
            }).then((response)=>{
                let {data} =response;
                // console.log(data);
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    },
    getSingle:(uuid)=>{
        return new Promise((resolve,reject)=>{
            fetch.get(`${conf.base}/api/article/single/${uuid}`).then((response)=>{
                let {data} =response;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    },
    //保存
    save:(article)=>{
        return new Promise((resolve,reject)=>{
            fetch.post(`${conf.base}/api/article/save`,article).then((response)=>{
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
            fetch.get(`${conf.base}/api/article/delete/${uuid}`).then((response)=>{
                let {data} =response;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    }
}

module.exports=articleQuery;