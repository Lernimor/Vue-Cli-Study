<template>
    <div class="carList">
        <ul>
            <li v-for="info in carInfos" :key="info.id" >
            
                <div class = "con_row">
                    <ul class="list_row">
                        <li class="list_index list_col"><input type="checkbox"/></li>
                        <li class="list_img list_col"><img ></li>
                        <router-link tag="li" class="list_name list_col" to="{path : info.path, query:{id:info.id}}">
                            <div>
                                <span class="g_name">{{info.name}}</span>
                                <span class="g_desc">这是产品描述，</span>
                            </div>
                        </router-link>
                        <li class="list_icon list_col">
                            <img class="goods_btn" 
                                @click="info.count=info.count+1" 
                                :src="require('../../../public/img/buyCar/add_enable.png')">
                            <input type="text" :value="info.count"/>
                            <img class="goods_btn" 
                                @click="info.count = (info.count > 0 ? info.count-1 : 0)" 
                                :src="info.count != 0 ? require('../../../public/img/buyCar/rm_enable.png') 
                                                        : require('../../../public/img/buyCar/rm_disable.png') ">
                        </li>
                    </ul>
                </div>
                <div class="btn">删除</div>
            
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            carInfos : [{id:0,name:'aa',count:5},
                        {id:1,name:'bb',count:2},
                        {id:2,name:'cc',count:3}]
        }
    },
}
</script>
    
<style>
    ul{
        width: 100%;
    }
    li{
        line-height: 5em;
        list-style: none;
    }
    .carList{
        width: 100%;
    }
    .carList>ul{
        overflow: hidden;
    }
    .carList>ul>li{
        border-bottom: 1px solid #fcfcfc;
        position: relative;
        padding: 0 0;
        -webkit-transform: translateX(0px);
    }
    .con_row{
        width: 100%;
    }
    .list_row{
        display:inline-block;
    }
    .list_col{
        display: inline-block;
    }
    .btn {
        position: absolute;
        top: 0;
        right: -3em;
        text-align: center;
        background: #ffcb20;
        color: #fff;
        width: 3em
    }
    .list_index{
        width: 8%;
        text-align: center
    }
    input[type="checkbox"] {
        vertical-align:middle;
        margin-top:0;
        background:#dddddd;
        border:#707070 solid 1px;
        border-radius: 3px;
        min-height: 12px;
        min-width: 12px;
    }
    input[type="checkbox"]:checked {
        background: #3190e8;
    }
    input[type=checkbox]:checked::after{
        content: '';
        top: 3px;
        left: 3px;
        position: absolute;
        background: transparent;
        border: #fff solid 2px;
        border-top: none;
        border-right: none;
        height: 6px;
        width: 10px;
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg); 
        transform: rotate(-45deg);
    }
    .list_img{
        width: 5em;
    }
    .list_name{
        font-size:0;
        width: 42%;
        vertical-align: middle
    }
    span.g_name{
        margin-left : 14px;
        display: block;
        height: 22px;
        font-size:18px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin-bottom: 5px
    }
    span.g_desc{
        margin-left : 10px;
        display: block;
        font-size:12px;
    }
    .list_icon{
        width: calc(50% - 5em);
        text-align: center;
    }
    .list_icon>img{
        height: 24px;
        margin: 0 0.25em 0 0.25em ;
        vertical-align:middle;
    }
    .list_icon>input{
        outline:none;
        width: 30%;
        height: 22px;
        line-height:22px;
        margin-top: 2px;
        border:1px solid #b3b3b3;
        border-radius:10px;
        text-align: center;
        vertical-align:middle;
    }
</style>

