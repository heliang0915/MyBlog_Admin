webpackHotUpdate(11,{

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var cookieUtil = {
    getCookie: function getCookie(c_name) {
        //获取cookie
        if (document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                var c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) {
                    c_end = document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    },
    setCookie: function setCookie(c_name, value, expiredays) {
        //设置cookie
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) + (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
    },
    checkCookie: function checkCookie(name) {
        //检测cookie是否存在
        var username = getCookie(name);
        if (username != null && username != "") {
            alert('Welcome again ' + username + '!');
        } else {
            username = prompt('Please enter your name:', "");
            if (username != null && username != "") {
                setCookie('username', username, 365);
            }
        }
    },
    delCookie: function delCookie(name) {
        //删除cookies
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(name);
        if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },
    clearCookies: function clearCookies() {
        //删除所有cookies
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            var domain = location.host.substr(location.host.indexOf('.'));
            document.cookie = name + "=;expires=" + exp.toGMTString();
        }
    }
};

exports.default = cookieUtil;

/***/ })

})
//# sourceMappingURL=11.b3c5804976d4fcfb3768.hot-update.js.map