/**
 *
 * 用户权限
 * */
import express from 'express';
import userQuery from '../query/userQuery';
// import sessionHelper from '../util/sessionHelper';
let router = express.Router();

router.route("/logout/:uuid").all((req, res, next) => {
    // var sh = new sessionHelper(req.session);
    var uuid = req.params.uuid;
    // sh.deleteAttr(uuid);
    console.log(`删除----${uuid}`);
    res.send(`删除${uuid}`)
});

router.route("/login/:uuid").all((req, res, next) => {
    var uuid = req.params.uuid;
    // var sh = new sessionHelper(req.session);
    var sh=req.session;
    // var user = sh.getAttr(uuid);

    if (sh.user) {
        res.send("用户" + sh.user.name + "登录了");
    } else {
        userQuery.getUserInfo(uuid, req).then(({data}) => {
            let user = data;
            if (user) {
                sh.user=user;
                // sh.setAttr(uuid, user);
            }
            res.send(`用户${uuid}未登录`);
        });
    }
})


router.post('/login',function(req,res){
    userQuery.login(req).then(({data}) => {
        let flag = data;
        if(flag==false){
            res.send(false);
        }else{
            res.cookie('token', flag, { domain: 'localhost', path: '/',HttpOnly:true });
            res.send(true);
        }
    })
})
export default router;