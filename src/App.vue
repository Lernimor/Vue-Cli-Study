<template>
  <div id="app">
    <my-header></my-header>
    <router-view class="contentView"></router-view> 
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from "./components/Header.vue";
import myFooter from "./components/Footer.vue";
export default {
  components : {
    myHeader,
    myFooter
  }
}
</script>

<style>
  * {
      margin: 0;
      padding: 0;
  }
  .clear{
      clear: both;
  }
  .cancelClick{
      pointer-events: none;
  }
  input[type="checkbox"] {
      position: absolute;
      border:#b3b3b3 solid 1px;
      border-radius: 3px;
      min-height: 14px;
      min-width: 14px;
      -webkit-appearance:none;
      outline:none;
      top : calc(50% - 7px);
      left: 9px
  }
  input[type="checkbox"]:checked {
      background: rgba(194, 194, 194, 0.856);
  }
  input[type=checkbox]:checked::after{
      content: '';
      position: absolute;
      top : 2px;
      left : 1px;
      background: transparent;
      border: #707070 solid 2px;
      border-top: none;
      border-right: none;
      height: 4px;
      width: 8px;
      -moz-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg); 
      transform: rotate(-45deg);
  }
  .contentView{
    position: fixed;
    width: 100%;
    top: calc(3em + 6px);
    bottom: calc(4.5em + 6px);
    overflow:auto;
  }
</style>
