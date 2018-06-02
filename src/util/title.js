import {isServer} from "../../config";

function getTitle(vm){
    let {title}=vm.$options;
    return typeof title ==="function"?title.call(vm):title;
}
const serverTitleMixin={
   create(){
       let title=getTitle(this);
       if (title) {
           this.$ssrContext.title=title;
           console.log("调用代码"+title);
       }


   }
}

const clientTitleMixin={
    mounted(){
        let title=getTitle(this);
        if(title){
            document.title=title;
            console.log("调用代码"+title);
        }
    }
}

export default isServer?serverTitleMixin:clientTitleMixin;