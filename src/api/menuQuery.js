/**
 * 菜单查询API
 * User: heliang
 * Date: 2018/2/27.
 */
import fetch from '../util/fetch';
import {conf} from '../../config';
let menuQuery={
    //查询
    list:({cur,params})=>{
        cur=cur==null?1:cur;
        return new Promise((resolve,reject)=>{
            fetch.post(`${conf.base}/api/menu/list`,{
                page:cur,
                params:params,
                sort:'rank'
            }).then((response)=>{
                let {data} =response;
                // console.log(data);
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    },
    //根据等级查询
    listByRank(rank){
        return new Promise((resolve,reject)=>{
            fetch.post(`${conf.base}/api/menu/listByRank/${rank}`).then((response)=>{
                let {data} =response;
                // console.log(data);
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    },
    //查询指定菜单的子菜单
    getChildMenu(uuid){
        return new Promise((resolve,reject)=>{
            fetch.get(`${conf.base}/api/menu/getChildMenu/${uuid}`).then((response)=>{
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
            fetch.get(`${conf.base}/api/menu/single/${uuid}`).then((response)=>{
                let {data} =response;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    },
    //保存
    save:(menu)=>{
        return new Promise((resolve,reject)=>{
            fetch.post(`${conf.base}/api/menu/save`,menu).then((response)=>{
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
            fetch.get(`${conf.base}/api/menu/delete/${uuid}`).then((response)=>{
                let {data} =response;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    }
}

module.exports=menuQuery;