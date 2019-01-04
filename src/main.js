import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false

var VueTouch = require('vue-touch');
VueTouch.config.swipe = {
  threshold: 50
};
Vue.use(VueTouch, {name: 'v-touch'});
 

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
