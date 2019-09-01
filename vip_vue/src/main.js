import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//以上的三行不要动 保留原来位置
//原因：引入有序
//第三方组件库在下面引入
//引入Vant
import Vant from 'vant';
import 'vant/lib/index.css';
// 1.完整引入mint-ui
import MintUI from 'mint-ui';
// 2.单独引入mint-ui的style
import'mint-ui/lib/style.css';
// 3.将mint-ui注册VUE
Vue.use(MintUI);

//4:引入图标字体样式文件
import "./iconfont/iconfont.css"
import "./iconfont/iconfont_1.css"
//var 变量=requre("路径")
// import axios from 'axios'
import axios from './axios'
// axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';
// axios.defaults.withCredentials=true;
// axios.defaults.baseURL="http://127.0.0.1:3000/"
//6:引入vuex
import Vuex from "vuex"
//7:注册vuex组件
Vue.use(Vuex)
//引入Vant
Vue.use(Vant);

//将axios对象强行添加到Vue类型的原型对象中
Vue.prototype.axios=axios;
//结果:在所有组件中都可以用this.axios.get()发送请求
Vue.use(axios);
Vue.config.productionTip = false
//引入qs
import qs from "qs"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
