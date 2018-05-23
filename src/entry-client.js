/**
 *
 */
import{createApp}from './app';
import '../assets/js/lib/jquery.min.js';
import '../assets/js/editor/js/wangEditor.min.js';
import '../assets/js/editor/css/wangEditor.min.css';

let {app,store,router}=createApp();
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
    console.log('初始化状态...');
}
router.onReady(() => {
    router.beforeResolve((to, from, next) => {
        const matched = router.getMatchedComponents(to)
        const prevMatched = router.getMatchedComponents(from)
        let diffed = false
        const activated = matched.filter((c, i) => {
            return diffed || (diffed = (prevMatched[i] !== c))
        })

        console.log("beforeResolve:::::::to.meta"+JSON.stringify(to.meta));
        console.log("beforeResolve:::::::from.meta"+JSON.stringify(from.meta));
        var metas = document.getElementsByTagName("meta");
        let {title,keywords,description}=to.meta;
        //SEO
        document.title=title;
        metas[0].content=keywords;
        metas[1].content=description;

        const asyncDataHooks = activated.map(c => c.asyncData==null?null:c.asyncData).filter(_ => _)
        if (!asyncDataHooks.length) {
            return next()
        }
        Promise.all(asyncDataHooks.map(hook => hook({ store, route: to }))).then(() => {
                next()
        }).catch(next)
    })

    // actually mount to DOM
    app.$mount('#app');
})