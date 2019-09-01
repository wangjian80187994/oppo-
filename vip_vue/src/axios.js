import axios from "axios";
import qs from "qs";
import store from './store'

const Axios=axios.create({
  baseURL:"http://viptest.applinzi.com/",
  withCredentials:true
})
Axios.interceptors.request.use(
  config=>{
    console.log("进入请求拦截器...");
    //this.axios.post(
      //"user/signin",
      //{uname:dingding , upwd:123456}
    //)
    if(config.method==="post"){
      config.data=qs.stringify(config.data)
    }
    if(localStorage.getItem("token")){
      config.headers.token=localStorage.getItem("token");
      console.log('配置token成功')
    }
    if(sessionStorage.getItem("token")){
      config.headers.token=sessionStorage.getItem("token");
      console.log('配置token成功')
    }
    return config;
  },
  error=>{
    console.log("===发送请求拦截器报错===")
    console.log(error);
    console.log("===end===");
    Promise.reject(error);
  }
);
Axios.interceptors.response.use(
  res=>{
    console.log("触发响应拦截器...")
    if(res.data.status==403){
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      console.log("触发删除指定token")
      // store.commit("setIslogin",false);
      // store.commit("setUname","");
    }else if(res.data.code==-1){
      console.log(res)
      console.log("触发清空VUX的登录状态")
      // store.commit("setIslogin",false);
      // store.commit("setUname","");
      //alert(res.data.msg+" 请先登录 !");
    }else if(res.data.token){
        console.log("res.data中有token")
      // store.commit("setUname",res.data.uname);
      // store.commit("setIslogin",true);
      if(res.remember==="true"){
        localStorage.setItem("token",res.data.token);
      }else{
        sessionStorage.setItem("token",res.data.token);
      }
    }
    return res;
  },
  error=>{
    
  }
)
export default {
  install: function(Vue, Option){
    Vue.prototype.axios=Axios;
  }
}