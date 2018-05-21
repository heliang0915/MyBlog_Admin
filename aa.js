function tigerMachine(opt) {
    this.selector = opt.selector || ".tigger-item";
    this.imgurl = opt.imgurl || "./images";
    this.callback = opt.callback || function () {
    };
    this.isDrawn = opt.isDrawn == true ? true : false; //是否中奖
    this.drawnIndex = opt.drawnIndex || -1; //中奖索引
    this.routeCount = opt.routeCount || 3; //旋转圈数
    this.drawnCount = opt.drawnCount || 10; //奖品数量
    this.init();
}

tigerMachine.prop = tigerMachine.prototype; //计算出三个随机数 不重复

tigerMachine.prop.drawnRandom = function () {
    var max = (this.drawnCount - 1);
    var num1 = Math.round(max * Math.random());
    var num2 = Math.round(max * Math.random());
    var num3 = Math.round(max * Math.random());
    if (num1 == num2) {
        return this.drawnRandom();
    } else {
        return [num1, num2, num3]
    }
}

//计算指定索引值的Y轴偏移量
tigerMachine.prop.computIndexY = function (index, type) {
    var itemHeight = document.querySelector(this.selector).offsetHeight;
    var y = itemHeight * this.drawnCount * (this.routeCount - 1) + (index - 1) * itemHeight;

    if (type) {
        y = (index - 1) * itemHeight;
    }
    return y;
}

//创建列表

tigerMachine.prop.createLis = function () {
    var lis = "";
    for (var i = 0; i < this.drawnCount * this.routeCount; i++) {
        var li = `<li style='background:url("${this.imgurl }/${i % this.drawnCount + 1}.png");background-size: cover;' data-index="${i}"> ${(i % this.drawnCount + 1) }</li>`;
        lis += li;
    }
    return lis;
}

//创建所有节点dom
tigerMachine.prop.crateDom = function () {
    var uls = document.querySelectorAll(this.selector);
    var lis = this.createLis();
    for (var i = 0; i < uls.length; i++) {
        var ul = uls[i];
        ul.innerHTML = lis;
    }
}

//使得指定元素选中
tigerMachine.prop.setAnimation = function (type) {
    var self = this;
    var uls = document.querySelectorAll(this.selector);
    if (!this.isDrawn || type) {
        //不中奖
        var ary = this.drawnRandom();
        uls.forEach(function (ul, index) {
            var temp = index;
            if (type) {
                //type存在代表是无延迟显示 即第一次初始化
                temp = 0;
            }
            setTimeout(function () {
                var y = self.computIndexY(ary[index], type);
                ul.style.transform = "translateY(-" + y + "px)";
                if (type == null) {
                    ul.style.transition = "all 5s";
                }
            }, (temp + 1) * 100)
        });
    } else {
        //中奖
        var y = self.computIndexY(this.drawnIndex, null);
        uls.forEach(function (ul, index) {
            var temp = index;
            setTimeout(function () {
                // var y= self.computIndexY(ary[index],type);
                ul.style.transform = "translateY(-" + y + "px)";
                if (type == null) {
                    ul.style.transition = "all 5s";
                }
            }, (temp + 1) * 100)
        });
    }

    //事件注册
    var methods = [];
    for (i = 0; i < 3; i++) {
        var method = {};
        method['fn' + i] = function () {
            var index = this.index;
            var yIndex = self.isDrawn ? self.drawnIndex : ary[this.index];
            var y1 = self.computIndexY(yIndex, 1);
            this.style.transitionDuration = "0s";
            this.style.transform = "translateY(-" + y1 + "px)";
            uls[index].removeEventListener("webkitTransitionEnd", methods['fn' + index]);
            if (index == 2) {
                self.callback();
            }
        }
        methods.push(method);
    }
    methods.forEach(function (method, index) {
        uls[index].index = index;
        uls[index].addEventListener("webkitTransitionEnd", method['fn' + index]);
    });
}
//初始化动作
tigerMachine.prop.init = function () {
    this.crateDom();
    // this.setAnimation(1);
}

var tiger = new tigerMachine({
    isDrawn: true,
    drawnIndex: 3,
    callback: function () {
        console.log("抽奖完毕....");
    }
});