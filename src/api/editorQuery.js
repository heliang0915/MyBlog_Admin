import common from '../util/common';
import {conf} from "../../config";
import fetch from "../util/fetch";
let editorQuery={
     getEditorCfg(){
         return new Promise((resolve,reject)=>{
            fetch.get(`${conf.base}/api/editor/getConfig`).then((response)=>{
                let {data} =response;
                resolve(data)
            }).catch((err)=>{
                reject(err);
            })
        })
    }
}

module.exports=editorQuery;