import Vue from 'vue';
import App from './App.vue';
import './assets/reset.css';
import './assets/fonts/reality_hyper_font.css';
import './assets/fonts/audiowide_font.css';

Vue.config.productionTip = false;
Vue.prototype.$window = window;

new Vue({
  render: h => h(App),
}).$mount('#app')
