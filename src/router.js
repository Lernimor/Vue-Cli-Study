import Vue from "vue";
import VueRouter from "vue-router";

import home from "./components/Home.vue";
import other from "./components/Other.vue";
import buyCar from "./components/BuyCar.vue";
import myPage from "./components/MyPage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        component: home
    },
    {
        path:"/home",
        component: home
    },
    {
        path:"/other",
        component: other
    },
    {
        path:"/buycar",
        component: buyCar
    },
    {
        path:"/mypage",
        component: myPage
    }
]

let router =  new VueRouter({
    routes
})

export default router;
