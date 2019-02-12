import Vue from 'vue';
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';
import VueFire from 'vuefire';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './routes/router';
import store from './store/store';
import './registerServiceWorker';


Vue.use(VueFire);
Vue.use(VueAxios, axios);
Vue.component(Button.name, Button);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
