import  component from '../routes/asyncRoutes';
import  SEO from '../../server/SEO';
let routerMap={}
//格式化
let formatNameFn=(url)=>{
    let nameAry=url.split('/');
    let name="";

    if(nameAry.length>1){

        nameAry.forEach((subName,index)=>{
            if(subName){
                if(index!=1){
                    subName=subName.charAt(0).toUpperCase()+subName.substr(1,subName.length);
                }
                name+=subName;
                if(name.indexOf(":")>-1){
                    name=name.substr(0,name.indexOf(":"));
                }
            }
        })

        console.log("name::::::"+name);
    }else{
        name=url;
    }
    if(name==""){
        name='index';
    }else if(name=="edit"){
        name='indexEdit';
    }else if(name=="*"){
        name="notFound";
    }
    return name;
}
Object.keys(SEO).forEach((key)=>{
    // let item=Object.keys(ite)[0];
    let name=formatNameFn(key);
    let com=component[name+'Component'];
    let json={
        name,
        component:com
    };
    routerMap[key]=json;
})
export  default routerMap;