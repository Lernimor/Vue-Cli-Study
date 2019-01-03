<template>
   <div class="header">
        <span class="back" @click="back" v-show="!(this.$route.path == '/' 
                            || this.$route.path == '/other' 
                            || this.$route.path == '/buycar' 
                            || this.$route.path == '/mypage')">
            <img src="../../public/img/main/icon/back0.png"></span>
        <h3>Welcome</h3>
    </div>
</template>

<script>
    export default {
        methods: {
            back(){
               if( this.to === undefined ){
                   this.$router.go(-1);
               }
               else{
                   this.$router.push({path:'/home'});
               }
            }
        },
    }
</script>

<style>
    .header{
        width : 100%;
        height: 3em;
        text-align: center;
        background: #ffcb20;
        border-bottom: 6px double #707070; 
        color: #707070;
        position: fixed;
        z-index: 100
    } 
    .header>*{
        display:inline-block;
        transform:translate(0,50%);
    }
    .header>span{
        position:absolute;
    }
    .header>.back{
        left:0.5em;
    }
    .header>.back>img{
        width: calc(height);
        height: 1.5em;
    }
    .header>.next{
        right:1em;
    }
</style>

