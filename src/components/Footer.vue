<template>
     <div class="footer">
        <ul>
            <li v-on:click="changeType($event)"><img src="../../public/img/main/home_unsel.png"></li>
            <li v-on:click="changeType($event)"><img src="../../public/img/main/fenlei0101.png"></li>
            <li v-on:click="changeType($event)"><img src="../../public/img/main/buycar_unsel.png"></li>
            <li v-on:click="changeType($event)"><img src="../../public/img/main/my_unsel.png"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods : {
            changeType : function(event){
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
