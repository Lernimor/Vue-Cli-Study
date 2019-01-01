<template>
   <div class="header">
        <span class="back"><img src="../../public/img/main/icon/back0.png"></span>
        <h3>Welcome</h3>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .header{
        width : 100%;
        height: 3em;
        text-align: center;
        border-bottom: 6px double slategrey; 
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

