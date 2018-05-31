/**
 *
 * 用户权限
 * */
import express from 'express';
import userQuery from '../query/userQuery';
let router = express.Router();
router.post('/login',function(req,res){
    userQuery.login(req).then(({data}) => {
        let flag = data;
        if(flag==false){
            res.send(false);
        }else{
            console.log(`#############data$$$$$$$$$$$#####${data}`);
            res.cookie('token',data,{domain: '.blogadmin.top',path: '/',httpOnly:false,maxAge:900000});
            // res.cookie('token',data,{domain: 'localhost',path: '/',httpOnly:false,maxAge:900000});

            res.send(true);
        }
    })
})
export default router;