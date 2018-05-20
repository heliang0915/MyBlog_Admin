import * as types from '../mutaion-types';
import rightQuery from '../../api/rightQuery';
import roleQuery from "../../api/roleQuery";

const state={
    menuStructure:[],
    fetching:true,
    message:{
        flag:0,
        err:''
    }
}

const mutations={
    [types.FETCH_MENU_RIGHT](state,payload){
        // console.log("FETCH_MENUS>>>>"+payload);
        state.fetching=false;
        state.menuStructure=payload;
    },
    [types.RIGHT_SAVE](state,payload){
        let mes=payload;
        if(mes=="ok"){
            state.message.flag=1;
        }else{
            state.message.flag=0;
            state.message.err=mes;
        }
    },
}

const actions={
    fetchRightMenuList:async ({commit},roleId)=>{
        var menuStructure= await  rightQuery.listByRank(roleId);
        commit(types.FETCH_MENU_RIGHT,menuStructure)
    },
    rightSave:async ({commit},{roleId,menus,fn})=>{
        var message= await rightQuery.saveRightMenu(roleId,menus);
        commit(types.RIGHT_SAVE,message);
        fn==null?function () {}:fn();
    }

}
const getters={
    getRightMenuList:(state)=>state.menuStructure,
    getRightSaveState:(state)=>state
}

module.exports={
    state,
    mutations,
    actions,
    getters
}