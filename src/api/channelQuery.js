import fetch from '../util/fetch';
import {conf} from '../../config';

let channelQuery={
    list:(cur)=>{
        cur=cur==null?1:cur;
        console.log("ChannelQuery...");
        return new Promise((resolve,reject)=>{
            fetch.get(`${conf.base}/api/channel/list?page=${cur}`).then((response)=>{
                let {data} =response.data;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    }
}

module.exports=channelQuery;