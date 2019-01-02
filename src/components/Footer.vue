<template>
     <div class="footer">
        <ul>
            <li @click="changeType($event,1)">
                <router-link to="/home">
                    <img :src="activeIndex == 1 ? 
                            require('../../public/img/main/home_sel.png') : 
                            require('../../public/img/main/home_unsel.png')">
                </router-link>
            </li>
            <li @click="changeType($event,2)">
                <router-link to="/other">
                    <img :src="activeIndex == 2 ? 
                            require('../../public/img/main/search_sel.png') : 
                            require('../../public/img/main/search_unsel.png')">
                </router-link>
            </li>
            <li @click="changeType($event,3)">
                <router-link to="/buycar">
                    <img :src="activeIndex == 3 ? 
                            require('../../public/img/main/buycar_sel.png') : 
                            require('../../public/img/main/buycar_unsel.png')">
                </router-link>
            </li>
            <li @click="changeType($event,4)">
                <router-link to="/mypage">
                    <img :src="activeIndex == 4 ? 
                            require('../../public/img/main/my_sel.png') : 
                            require('../../public/img/main/my_unsel.png')">
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props : {
            changePage : {
                type : Function
            }
        },
        data() {
            return {
                activeIndex : 1
            }
        },
        methods : {
            changeType : function(event, index){
                this.activeIndex = index;
            }
        }
    }
</script>

<style>
    .footer {
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        text-align: center;
        border-top: 6px double slategrey; 
    }
    .footer>ul {
        display:inline-block;
        width: 100%;
        margin-left: 2px
    }
    .footer>ul>li {
        list-style: none;
        float: left;
        height: 4.5em;
        width: 24.3%;
    }
    img {
        width: calc(height);
        height: 80%;
        transform: translate(0,10%)
    }
</style>
