<template>
    <div>
        <router-view v-bind:total-money="totalMoney" 
            v-bind:real-money="realMoney"
            @updateMoney="updateMoney"></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                'totalMoney' : 0,
                'discount' : 0.9,
                'realMoney' : 0
            }
        },
        methods: {
            updateMoney(newMoney){
                this.totalMoney = newMoney.toFixed(2);
                this.realMoney = (newMoney * this.discount).toFixed(2);
            }
        },
    }
</script>

<style>

</style>

