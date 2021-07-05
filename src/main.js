import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import VueCordova from 'vue-cordova'

//resource
import '../src/assets/css/index.css'
import '../src/assets/js/ki.js'


axios.defaults.baseURL = 'http://192.168.50.213:8082'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] ='*';
axios.defaults.headers['Access-Control-Allow-Origin'] = 'http://211.34.230.55/atest/'
axios.defaults.headers['Access-Control-Allow-Headers'] = '*'
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let cors = require("cors");
Vue.use(cors);
Vue.use(VueCordova);

const local = axios.create({
  baseURL: '',
  withCredentials: true,
});

Vue.prototype.$local = local;

Vue.config.productionTip = false

Vue.prototype.$EventBus = new Vue();
Vue.prototype.$axios = axios;
Vue.prototype.$store = store;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
