//router.js 引入路由
import Vue from 'vue'
import Router from 'vue-router'
//自定义组件
import Home from './views/Home.vue'
import details from './views/details.vue'
import login from './views/login.vue'
import reg from './views/reg.vue'
import classify_list from './views/classify_list.vue'
import collect from './views/collect.vue'
// import product_details from './views/product_details.vue'
import product_model from './views/product_model.vue'
import cart from './views/cart.vue'
import carousel from './components/carousel.vue'
import index_classify from './components/index_classify.vue'
import index_brand from './components/index_brand.vue'
import details_classify from './components/details_classify.vue'
import details_brand from './components/details_brand.vue'
import product_list from './components/product_list.vue'
// import loginPhone from './components/loginPhone.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/home',component: Home},
    {path: '/about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')},
    {path:'/carousel',component:carousel},
    {path:'/login',component:login},
    {path:'/reg',component:reg},
    {path:'/index_classify',component:index_classify},
    {path:'/index_brand',component:index_brand},
    {path:'/details',component:details},
    {path:'/collect',component:collect},
    {name:'details_classify',path:'/details_classify',component:details_classify},
    {path:'/details_brand',component:details_brand},
    {path:'/classify_list',component:classify_list},
    {path:'/product_list',component:product_list},
    // {path:'/product_details',component:product_details},
    {
      name:'/product_model',path:'/product_model/:did',component:product_model,
    

  },
    {name:'/cart',path:'/cart/:uid',component:cart,
    //添加局部路由守卫
    beforeEnter:(to,from,next)=>{
      console.log(to);
      console.log(from);
      //判断用户有没有登陆
      var un=sessionStorage.getItem("phone")
      if(un){
        next()
      }else{
        next({path:"/login"})
      }
  }
  },
    // {path:'/loginPhone',component:loginPhone},
    
  ]
})
