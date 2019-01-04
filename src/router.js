import Vue from "vue";
import VueRouter from "vue-router";

import home from "./components/Home.vue";
import other from "./components/Other.vue";
import myPage from "./components/MyPage.vue";

import buyCarList from "./components/BuyCarFile/CarList.vue";
import goodsInfoPage from "./components/GoodsFile/GoodsInfoPage.vue";

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
        component: buyCarList
    },
    {
        name : 'MyPage',
        path:"/mypage",
        component: myPage
    },
    {
        name : 'GoodsPage',
        path:"/goodsinfopage",
        component: goodsInfoPage
    }
]

let router =  new VueRouter({
    routes
})

export default router;
