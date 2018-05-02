import * as types from '../mutaion-types';
import menuQuery from '../../api/menuQuery';

const state={
    rights:[],
    menuStruct:[],
    fetching:true,
    message:{
        flag:0,
        err:''
    }
}

const mutations={

    [types.FETCH_MENU_RIGHT](state,payload){
        console.log("FETCH_MENUS>>>>"+payload);
        state.fetching=false;
        state.menuStruct=payload;
    }
}

const actions={
    fetchMenuList:async ({commit},{cur,params})=>{
        var pageInfo= await  menuQuery.list({cur,params});
        commit(types.FETCH_MENU_LIST,pageInfo)
    }



}
const getters={
    getMenuList:(state)=>state
}

module.exports={
    state,
    mutations,
    actions,
    getters
}