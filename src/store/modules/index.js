/**
 * Created by hotread on 2017/6/12.
 */

import * as types from '../mutaion-types';
import {getIndexData,loginDo} from '../../api/index';


/*
*初始化状态
*
* */
const state={
   list:[],
   fetching:true,
   resp:{},
   token:null
}

/**
 * 定义mutations
 * @type {{}}
 */
const mutations={
    [types.FETCH_INDEX_LIST](state,payload){
        state.fetching=false;
        state.list=payload;
    },
    [types.FETCH_LOGIN](state,payload){
        state.fetching=false;
        state.resp=payload;
    }
}

/**
 *  定义actions
 * @type {{fetchIndexList: function({commit: *})}}
 */
const actions={
    fetchIndexList:async ({commit})=>{
        let  data=await getIndexData();
        commit(types.FETCH_INDEX_LIST,data)
        //  getIndexData((data)=>{
        //     commit(types.FETCH_INDEX_LIST,data)
        // })
    },
    fetchLogin:async ({commit},{name,pwd,fn})=>{
        let  data=await loginDo(name,pwd);
        // console.dir(commit);
        // console.log("data>>>>>>>>>"+data);
        commit(types.FETCH_LOGIN,data)
        fn==null?function () {}:fn(data);
    }

}

//定义getters
const getters={
    getIndexList:state=>{
        return state
    },
    getLoginState:state=>state.resp
}

export default {
    state,
    mutations,
    actions,
    getters
}