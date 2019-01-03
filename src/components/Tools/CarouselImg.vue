<template>
    <div class="carouselContain">
        <div class="imgPenel change-size">
            <div class="imgsContaier" v-for="imgUrl in imgUrls" :key="imgUrl">
                <img class="imgs" :src="imgUrl">
            </div>
        </div>
        <div class="clear"></div>
        <div class="btns">
            <div v-for="(item,index) in imgUrls" :key="item">
                <span class="to_picbtn" 
                        :class="index == 0 ? 'on' : ''" 
                        @click="to_pic(index)">
                    {{index + 1}}
                </span>
            </div>
        </div>
        <a class="arrow arrow_left" @click="prev_pic">&lt;</a>
        <a class="arrow arrow_right" @click="next_pic">&gt;</a>
    </div>
</template>

<script>
export default {
    data(){
        return {
            imgUrls:[
                require("../../../public/img/lins/lernimor_ns.jpg"),
                require("../../../public/img/lins/lernimor.jpg"),
            ],
            imgWidth:0
        }
    },
    mounted:function(){
        let imgWidth = document.querySelector(".carouselContain").clientWidth;
        document.querySelector(".imgPenel").style.width = parseInt(imgWidth * 2) +'px';
        let iCs = document.querySelectorAll(".imgsContaier");
        for (let i=0;i<this.imgUrls.length;i++){
            iCs[i].style.width = parseInt(imgWidth) +'px';
        }
    },
    methods:{
        to_pic:function (index){
            let wrap = document.querySelector(".imgPenel");
            let w = document.querySelector(".imgs").clientWidth;
            let newLeft = 0 - w * index;
            if (newLeft + "px" == wrap.style.left 
                    || (newLeft == 0 && !wrap.style.left)){
                return;
            }
            this.addTranListener(wrap);
            wrap.style.left = newLeft + "px";
            let btns = document.querySelectorAll('.to_picbtn');
            for (let i=0; i<btns.length; i++){
                btns[i].classList.remove('on');
            }
            btns[index].classList.add('on');
        },
        next_pic:function () {
            let wrap = document.querySelector(".imgPenel");
            let w = document.querySelector(".imgs").clientWidth;
            let newLeft = parseInt(wrap.offsetLeft) - w;
            if (wrap.style.left == (0 - w * (this.imgUrls.length - 1) + "px")){
                newLeft = 0;
            }
            let index = newLeft / w;
            this.to_pic(Math.abs(index));
        },
        prev_pic:function() {
            let wrap = document.querySelector(".imgPenel");
            let w = document.querySelector(".imgs").clientWidth;
            let newLeft = parseInt(wrap.offsetLeft) + w;
            if (wrap.style.left == "0px" || wrap.style.left == ""){
                newLeft = 0 - w * (this.imgUrls.length - 1);
            }
            let index = newLeft / w;
            this.to_pic(Math.abs(index));
        },
        getTransition : function (){
            let el = document.createElement('surface'),
            transitions = {
                'transition':'transitionend',
                'OTransition':'oTransitionEnd',
                'MozTransition':'transitionend',
                'WebkitTransition':'webkitTransitionEnd'
            }
            for(let t in transitions){
                if( el.style[t] !== undefined ){
                    return transitions[t];
                }
            }
        },
        addTranListener : function (el){
            let btns = document.querySelectorAll('.to_picbtn');
            for (let i=0; i<btns.length; i++){
                btns[i].classList.add('cancelClick');
            }
            document.querySelector('.arrow_left').classList.add('cancelClick');
            document.querySelector('.arrow_right').classList.add('cancelClick');
            let transition = this.getTransition();
            let tranListener = function (){
                for (let i=0; i<btns.length; i++){
                    btns[i].classList.remove('cancelClick');
                }
                document.querySelector('.arrow_left').classList.remove('cancelClick');
                document.querySelector('.arrow_right').classList.remove('cancelClick');
                el.removeEventListener(transition, tranListener, false);
            }
            el.addEventListener(transition, tranListener);
        }
    }
}
</script>

<style>
    a{
        text-decoration: none;
    }
    .carouselContain {
        position: relative;
        width: 100%;
        height: 40%;
        overflow: hidden;
        box-shadow: 0 0 5px green;
    }
    .imgPenel{
        position: absolute;
        left : 0px;
        width: 100%;
        height:100%;
        z-index: 1;
    }
    .change-size {
        transition: all 1s;
        animation: all 2s linear 1s 3 normal;
    }
    .imgPenel div {
        float: left;
        width: 100%;
        height:100%;
    }
    .imgPenel .imgs {
        float: left;
        width: 100%;
        height:100%;
        transform: translate(0,0);
    }

    .btns {
        position: absolute;
        text-align: center;
        bottom:20px;
        width: 100%;
        height: 10px;
        z-index: 2;
    }
    .btns div{
         display: inline-block;
         padding-left: 2px;
         border-radius: 50%;
         color:white;
    }
    .btns div span{
        display: inline-block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        border-radius: 50%;
        background: rgba(106, 170, 219,0.5);
        cursor: pointer;
    }
    .btns div span.on{
        background-color: red;
    }

    .arrow{
        position: absolute;
        width: 40px;
        height : 100%;
        line-height: 5.5em;
        font-size: 34px;
        color: white;
        text-align: center;
        opacity: 0.2;
        z-index: 2;
    }

    .arrow{
        display: block;
    }

    .arrow_left{
        left: 0;
    }

    .arrow_right{
        right: 0;
    }

    @keyframes myfirst
    {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    @-moz-keyframes myfirst /* Firefox */
    {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    @-webkit-keyframes myfirst /* Safari 和 Chrome */
    {
        0% {opacity: 0;}
        100%  {opacity: 1;}
    }

    @-o-keyframes myfirst /* Opera */
    {
        0% {opacity: 0;}
        100%  {opacity: 1;}
    }

</style>

