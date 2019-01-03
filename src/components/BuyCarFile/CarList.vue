<template>
    <div class="">
        <div class="carList">
            <ul class="carUl">
                <li class="carLi" v-for="info in carInfos" :key="info.id" >
                    <div class="con_row">
                        <ul class="list_row">
                            <li class="list_index" @click="info.selected = !info.selected">
                                <input type="checkbox" v-model="info.selected"/>
                            </li>
                            <li class="list_img ">
                                <img class="goodsImg" :src="require('../../../public/img/buyCar/goods1.jpg')">
                            </li>
                            <router-link tag="li" class="list_name " to="/goodsinfopage">
                                <p class="g_top">{{info.name}}</p>
                                <p class="g_bottom">这是产品描述的阿斯顿撒多的sad撒发所多撒多撒dssdsadsadsadsa</p>
                            </router-link>
                            <li class="list_price">
                                <p class="g_top">单价/元</p>
                                <p class="g_bottom">{{info.price}}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="list_icon">
                                <img @click="info.count=parseInt(info.count)+1" 
                                    :src="require('../../../public/img/buyCar/add_enable.png')">
                                <input type="text" 
                                        v-model="info.count" 
                                        :onBlur="
                                            (info.count == '' 
                                            || info.count == null 
                                            || info.count == undefined
                                            ? info.count = 0 
                                            : info.count = parseInt(info.count))"/>
                                <img @click="info.count = (info.count > 0 ? parseInt(info.count)-1 : 0)" 
                                    :src="info.count != 0 ? require('../../../public/img/buyCar/rm_enable.png') 
                                                            : require('../../../public/img/buyCar/rm_disable.png') ">
                    </div>
                    <div class="del_btn" @click="rmGoods(info.id)">删除</div>
                </li>
            </ul>
            <div class="clear"></div>
        </div>
        <div class="total">
            <div class="moneyPanel">
                <span>合计:</span> <span class="realMoney"> {{totalMoney}}</span> <span>元</span> 
                <br>
                <span>实付款:</span> <span class="totalMoney"> {{realMoney}}</span> <span>元</span> 
           </div>
           <span class="commitDD" :class="this.totalMoney > 0 ? 'enable' : 'disabled'">提交订单</span>
        </div>
    </div>
</template>

<script>
import swipe from '../Tools/swipe_deletel.js';
export default {
    props : ['totalMoney','realMoney'],
    data() {
        return {
            carInfos : [{id:0,name:'莱泽曼手链',price:192.2,count:5,selected:false},
                        {id:1,name:'莱泽曼手链',price:11.2,count:2,selected:true},
                        {id:2,name:'莱泽曼手链',price:1921.2,count:3,selected:false},
                        {id:3,name:'莱泽曼手链',price:3332.9,count:1,selected:false},
                        {id:4,name:'莱泽曼手链',price:1221.2,count:3,selected:false},
                        {id:5,name:'莱泽曼手链',price:4213.7,count:1,selected:true},
                        {id:6,name:'莱泽曼手链',price:923.1,count:3,selected:true},
                        {id:7,name:'莱泽曼手链',price:888.0,count:7,selected:true}
                    ]
        }
    },
    computed: {
        carInfoCount(){
            return this.carInfos.count;
        }
    },
    watch: {
        carInfos: {
            handler(val, newVal) {
                let value = val;
                if (newVal && newVal.length > 0)
                    value = newVal;
                let money = 0;
                for (let i=0; i<value.length; i++){
                    if (!value[i].selected)
                    continue;
                    money += (value[i].price * value[i].count);
                }
                this.$emit('updateMoney', money);
            },
            immediate: true,
            deep : true
        }
    },
    mounted() {
        swipe();
    },
    methods: {
        rmGoods : function(id){
            let value = this.carInfos;
            for (let i=0; i<value.length; i++){
                if (value[i].id == id){
                    this.carInfos.splice(i,i+1);
                    break;
                }
            }
        }
    }
}
</script>
    
<style>
    li{
        list-style: none;
    }
    .total{
        width: 100%;
        height:3.5em;
        background: #ffcb20;
        color: #111111;
        opacity: 0.85;
        position: fixed;
        bottom: calc(4.5em + 6px);
        vertical-align: middle;
        z-index: 100;
    }
    .commitDD{
        right: 1em;
        bottom:25%;
        position:absolute;
        color: #ffcb20;
        font-size: 14px;
        opacity: 1;
        text-align: center;
        width:20%;
        height: 50%;
    }
    span.disabled{
        background: #a3a3a3;
    }
    span.enable{
        background: #707070;
    }
    .total>div{
        padding-left: 1em;
        font-size: 14px;
    }
    .totalMoney{
        left: 0;
        color:black;
        font-weight: bold;
    }
    .realMoney{
        text-decoration:line-through;
        color: #6b6b6b
    }
    .carList{
        width: 100%;    
        margin-bottom: calc(4em - 5px);
    }
    .carUl{
        overflow: hidden;
        bottom: calc(8em + 6px);
    }
    .carUl>li{
        position: relative;
    }
    .con_row{
        width: 100%;
    }
    .list_row{
        background: #f8f8f5;
    }
    .list_row>li{
        height: 6em;
        display: inline-block;
        vertical-align: middle
    }
    .del_btn {
        position: absolute;
        top: 0;
        height: 6em;
        line-height:6em;
        right: -3em;
        text-align: center;
        vertical-align: middle;
        background: #ffcb20;
        color: #fff;
        width: 3em
    }
    .list_index{
        width: 10%;
    }
    .list_img{
        width : 25%;
    }
    .list_name{
        width: 40%;
    }
    .list_price{
        width: 25% ;
        text-align: center;
    }
    .goodsImg{
        width: 100%;
    }
    .list_price>div{
       padding-right : 3em;
       text-align: center;
    }
    .total span{
        height: 25px;
        line-height:25px;
    }
    .g_top{
        text-align: center;
        margin-top: 5px;
        font-size:16px;
        font-weight: bold;
    }
    .g_bottom{
        margin: 10px 5px 0 5px;
        font-size:12px;
    }

    .list_icon{
        position: absolute;
        bottom: 10px;
        right: 10px;
        text-align: center;
        color: #fff;    
        width: 90px;
        height: 25px;
        line-height: 25px;
        z-index: 99;
    }
    .list_icon>img{
        display: inline-block;
        width: 22px;
        height: 22px;
        padding: 0;
        vertical-align:middle;
    }
    .list_icon>input{
        display: inline-block;
        outline:none;
        width: 30px;
        height: 16px;
        border:2px solid #b3b3b3;
        border-radius:10px;
        text-align: center;
        vertical-align:middle;
    }
</style>

