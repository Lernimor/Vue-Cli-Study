<template>
     <div class="footer">
        <ul>
            <router-link to="/" tag="li" replace>
                <img :src="this.$route.path == '/'? 
                        require('../../public/img/main/home_sel.png') : 
                        require('../../public/img/main/home_unsel.png')">
            </router-link>
            <router-link to="/other" tag="li" replace>
                <img :src="this.$route.path == '/other' ? 
                        require('../../public/img/main/search_sel.png') : 
                        require('../../public/img/main/search_unsel.png')">
            </router-link>
            <router-link to="/buycar" tag="li" replace>
                <img :src="this.$route.path == '/buycar' ? 
                        require('../../public/img/main/buycar_sel.png') : 
                        require('../../public/img/main/buycar_unsel.png')">
            </router-link>
            <router-link to="/mypage" tag="li" replace>
                <img :src="this.$route.path == '/mypage' ? 
                        require('../../public/img/main/my_sel.png') : 
                        require('../../public/img/main/my_unsel.png')">
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex : 1
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
        height: 80%;
        transform: translate(0,10%)
    }
</style>
