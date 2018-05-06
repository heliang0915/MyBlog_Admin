/**
 * 菜单查询API
 * User: heliang
 * Date: 2018/2/27.
 */
import fetch from '../util/fetch';
import {conf} from '../../config';
let menuQuery={
    //根据角色查询菜单权限
    listByRank(roleId){
        return new Promise((resolve,reject)=>{
            fetch.get(`${conf.base}/api/role/getMenusByRoleId/${roleId}`).then((response)=>{
                let {data} =response;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    },
    saveRightMenu(roleId,menus){
        return new Promise((resolve,reject)=>{
            fetch.post(`${conf.base}/api/role/saveRight/`,{
                roleId,
                menus
            }).then((response)=>{
                let {data} =response;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    },

}

module.exports=menuQuery;