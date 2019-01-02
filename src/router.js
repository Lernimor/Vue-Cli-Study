import Vue from "vue";
import VueRouter from "vue-router";

import home from "./components/Home.vue";
import other from "./components/Other.vue";
import buyCar from "./components/BuyCar.vue";
import myPage from "./components/MyPage.vue";

import buyCarList from "./components/BuyCarFile/CarList.vue";

Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        component : home
    },
    {
        name : 'Other',
        path:"/other",
        component: other
    },
    {
        name : 'BuyCar',
        path:"/buycar",
        children : [{
            path : '/',
            component : buyCarList
        }],
        component: buyCar
    },
    {
        name : 'MyPage',
        path:"/mypage",
        component: myPage
    }
]

let router =  new VueRouter({
    routes
})

export default router;
