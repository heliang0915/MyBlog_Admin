/**
 * 频道查询API
 * User: heliang
 * Date: 2018/2/27.
 */
import fetch from '../util/fetch';
import {conf} from '../../config';

let channelQuery={
    //查询
    list:(cur)=>{
        cur=cur==null?1:cur;
        console.log("ChannelQuery...");
        return new Promise((resolve,reject)=>{
            fetch.post(`${conf.base}/api/channel/list`,{
                page:cur
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
            fetch.get(`${conf.base}/api/channel/single/${uuid}`).then((response)=>{
                let {data} =response;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    },
    //保存
    save:(channel)=>{
        return new Promise((resolve,reject)=>{
            fetch.post(`${conf.base}/api/channel/save`,channel).then((response)=>{
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
            fetch.get(`${conf.base}/api/channel/delete/${uuid}`).then((response)=>{
                let {data} =response;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    }
}

module.exports=channelQuery;