<template>
    <div id="app" v-cloak>
        <transition :name="transitionName">
            <router-view class="router"></router-view>
        </transition>
    </div>
</template>
<script>
    import '../assets/css/common';
    export default {
        name: 'App',
        data(){
            return {
                transitionName:''
            }
        },
        watch: {//使用watch 监听$router的变化
            $route(to, from) {
                //如果to索引大于from索引,判断为前进状态,反之则为后退状态
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'vux-pop-out' : 'vux-pop-in'
            }
        }
    }
</script>
<style>
    /*.slide-right-enter-active,*/
    /*.slide-right-leave-active,*/
    /*.slide-left-enter-active,*/
    /*.slide-left-leave-active {*/
        /*will-change: transform;*/
        /*transition: all 500ms;*/
        /*position: absolute;*/
    /*}*/
    /*.slide-right-enter {*/
        /*opacity: 0.5;*/
        /*transform: translate3d(-100%, 0, 0);*/
    /*}*/
    /*.slide-right-leave-active {*/
        /*opacity: 0.5;*/
        /*transform: translate3d(100%, 0, 0);*/
    /*}*/
    /*.slide-left-enter {*/
        /*opacity: 0.5;*/
        /*transform: translate3d(100%, 0, 0);*/
    /*}*/
    /*.slide-left-leave-active {*/
        /*opacity: 0.5;*/
        /*transform: translate3d(-100%, 0, 0);*/
    /*}*/



    .vux-pop-out-enter-active,
    .vux-pop-out-leave-active,
    .vux-pop-in-enter-active,
    .vux-pop-in-leave-active {
        will-change: transform;
        transition: all 250ms;
        height: 100%;
        top: 0;
        position: absolute;
        top: 0;
        left: 0;
        backface-visibility: hidden;
        perspective: 1000px;
    }

    .vux-pop-out-enter {
        opacity: 0.5;
        /*transform: translate3d(-100%, 0, 0);*/
    }

    .vux-pop-out-leave-active {
        opacity: 0.5;
        /*transform: translate3d(100%, 0, 0);*/
    }

    .vux-pop-in-enter {
        opacity: 0.5;
        /*transform: translate3d(100%, 0, 0);*/
    }

    .vux-pop-in-leave-active {
        opacity: 0.5;
        /*transform: translate3d(-100%, 0, 0);*/
    }



    /*.fade-router-enter-active,*/
    /*.fade-router-leave-active,*/
    /*.fade-router-enter-active,*/
    /*.fade-router-leave-active {*/
        /*will-change: transform;*/
        /*transition: all 100ms;*/
        /*position: absolute;*/
    /*}*/
    /*.fade-router-enter{*/
        /*!*transform:translateX(100%);*!*/
    /*}*/
    /*.fade-router-leave{*/
        /*!*transform:translateX(-100%);*!*/
    /*}*/
    /*.fade-router-enter,.fade-router-leave-active{*/
        /*opacity: 0.5;*/
    /*}*/
</style>