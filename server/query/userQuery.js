/**
 * 用户查询API
 * User: heliang
 * Date: 2018/2/27.
 */
import fetch from '../util/fetch';
import {conf} from '../../config';
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
    }
}

module.exports=userQuery;