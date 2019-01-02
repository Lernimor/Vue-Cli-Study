<template>
     <div class="footer">
        <ul>
            <li v-on:click="changeType($event,1)">
                <img :src="activeIndex == 1 ? 
                        require('../../public/img/main/home_sel.png') : 
                        require('../../public/img/main/home_unsel.png')">
            </li>
            <li v-on:click="changeType($event,2)">
                <img :src="activeIndex == 2 ? 
                        require('../../public/img/main/search_sel.png') : 
                        require('../../public/img/main/search_unsel.png')">
                </li>
            <li v-on:click="changeType($event,3)">
                <img :src="activeIndex == 3 ? 
                        require('../../public/img/main/buycar_sel.png') : 
                        require('../../public/img/main/buycar_unsel.png')">
            </li>
            <li v-on:click="changeType($event,4)">
                <img :src="activeIndex == 4 ? 
                        require('../../public/img/main/my_sel.png') : 
                        require('../../public/img/main/my_unsel.png')">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex : 1
            }
        },
        methods : {
            changeType : function(event, index){
                this.activeIndex = index;
                let liCom = event.currentTarget;
                liCom.querySelector('img');
            }
        }
    }
</script>

<style>
    .footer{
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        text-align: center;
        border-top: 6px double slategrey; 
    }
    .footer>ul{
        display:inline-block;
        width: 100%;
        margin-left: 2px
    }
    .footer>ul>li{
        list-style: none;
        float: left;
        height: 4.5em;
        width: 24.3%;
    }
    .footer>ul>li>img{
        width: calc(height);
        height: 80%;
        transform: translate(0,10%)
    }
</style>
