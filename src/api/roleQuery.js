/**
 * 角色查询API
 * User: heliang
 * Date: 2018/2/27.
 */
import fetch from '../util/fetch';
import {conf} from '../../config';
let roleQuery={
    //查询
    list:({cur,params})=>{
        cur=cur==null?1:cur;
        return new Promise((resolve,reject)=>{
            fetch.post(`${conf.base}/api/role/list`,{
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
            fetch.get(`${conf.base}/api/role/single/${uuid}`).then((response)=>{
                let {data} =response;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    },
    //保存
    save:(role)=>{
        return new Promise((resolve,reject)=>{
            fetch.post(`${conf.base}/api/role/save`,role).then((response)=>{
                let {data} =response;
                resolve(data);
            }).catch((err)=>{
                reject(err);
            })
        })
    },
    del:(uuid)=>{
        return new Promise((resolve,reject)=>{
            // console.log("del.....")
            fetch.get(`${conf.base}/api/role/delete/${uuid}`).then((response)=>{
                let {data} =response;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    }
}

module.exports=roleQuery;