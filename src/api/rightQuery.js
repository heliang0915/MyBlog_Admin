/**
 * 菜单查询API
 * User: heliang
 * Date: 2018/2/27.
 */
import fetch from '../util/fetch';
import {conf} from '../../config';
let menuQuery={

    //根据角色查询菜单权限
    listByRank(role){

        return new Promise((resolve,reject)=>{
            fetch.post(`${conf.base}/api/menu/listByRank/${rank}`).then((response)=>{
                let {data} =response;
                console.log(data);
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })

    }

}

module.exports=menuQuery;