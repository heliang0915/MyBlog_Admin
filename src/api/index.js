/**
 * API
 */
import fetch from "../util/fetch";
import  {conf} from '../../config';
let {host,port}=conf;
let APIBase=`${host}:${port}`;

const getIndexData=()=>{
    return  new Promise((reslove,reject)=>{
        fetch.get(`${APIBase}/data`).then((res)=>res.data).then((data)=>{
            reslove(data)
        }).catch((err)=>{
            reject(err);
        });
    })

}

const  loginDo=(name,pwd)=>{

    return  new Promise((reslove,reject)=> {
        fetch.post(`/auth/login`, {
            name,
            pwd
        }).then((res) => res.data).then((data) => {
            reslove(data)
        }).catch((err)=>{
            reject(err);
        });
    });
}

export {getIndexData,loginDo}