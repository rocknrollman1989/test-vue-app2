import Vue from 'vue';
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.component(Button.name, Button);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');