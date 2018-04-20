function SessionHelper(session){
    this.session=session;
    
}
SessionHelper.prop=SessionHelper.prototype;
SessionHelper.prop.setAttr=function (id,value) {
    if(!this.session.track){
        this.session.track={};
    }
    this.session.track[id]=value;
};
SessionHelper.prop.getAttr=function (id) {
    let map=this.session.track==null?{}:this.session.track;
    console.log("map:"+JSON.stringify(map));
    return map[id];
};
SessionHelper.prop.deleteAttr=function (id) {
    // console.log(this.session.track[id]);
    if(this.session.track){
        if(this.session.track[id]){
            delete this.session.track[id];
        }
    }
};
export default SessionHelper;