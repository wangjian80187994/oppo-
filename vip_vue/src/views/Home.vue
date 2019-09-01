<template>
  <div class="home">
      <!--顶部-->
      <div class="index_head">
        <div class="search-wrapper">
        <a href="#" class="head_left_button" v-if="boolean" @click="login()">登录</a>
        <a href="#" class="head_left_button" v-else @click="collect()">我的</a>
        <input type="text" class="top-search" placeholder="大家正在搜索:连衣裙">
        <img src="../img/top.png" alt="" class="top-img head_right_button" >
        </div>
      </div>
      <!--导航栏-->
      <router-link to="details">
      <div id="tarbar">
        <div class="fixed">
        <ul>
          <li>
            <a href="#"><span>最后疯抢</span></a>
          </li>
          <li>
              <a href="#"><span>今日推荐</span></a>
          </li>
          <li>
              <a href="#"><span>美妆</span></a>
          </li>
          <li>
              <a href="#"><span>母婴</span></a>
          </li>
          <li>
              <a href="#"><span>国际</span></a>
          </li>
          <li>
              <a href="#"><span>家电</span></a>
          </li>
          <li>
              <a href="#"><span></span></a>
          </li>
        </ul>
        <div class="more">
          <i class="iconfont icon-xiala5"></i>
        </div>
        </div>
      </div>
      <div class="cart">
          <span class="iconfont icon-gouwuche"></span>
          <span class="count">
            <span class="cartCount">{{cartCount}}</span>
          </span>
      </div>
      
      
      </router-link>
      <router-link to="details"><Carousel></Carousel> </router-link>
      <router-link to="details"><indexClassify></indexClassify> </router-link>
      <router-link to="details"><indexBrand></indexBrand> </router-link>
    </div>
</template>

<script>
 import carousel from '../components/carousel.vue'
 import index_classify from '../components/index_classify.vue'
 import index_brand from '../components/index_brand.vue'
// @ is an alias to /src
export default {
  data(){ 
    return{
      boolean:true,
    }
  },
  components:{
     "Carousel":carousel,
     "indexClassify":index_classify,
     "indexBrand":index_brand,
  },
  methods: {
    login(){
      this.$router.push("login")
    },
    collect(){
      this.$router.push("collect")
    }
  },

   computed:{
        cartCount:function(){
            return this.$store.getters.cartCount
        }
    },
    created() {
         this.$store.commit("clear");
    },
      mounted(){
    var n = sessionStorage.getItem("phone") 
    if(n){
      this.boolean=false;
    }
       var uid=parseInt(sessionStorage.getItem("uid"))
        var url="cart";
        this.axios.get(url,{params:{uid:uid}}).then(result=>{
            this.list=result.data.data
            console.log(this.list.length)
            this.$store.commit('mounted',this.list.length)
        })
  },
}
</script>
<style scoped>
body{margin: 0;padding: 0; }
    .index_head{
    position:relative;z-index: 1200;
    top: 0px; left: 0px;
    width: 375px;
    background-color: #f9f9fa
    }
    .search-wrapper{
    position: fixed;
    height: 4.17333rem;
    background-image: none;
    background-color: #f9f9fa;
    width: 375px;
    }
    .head_left_button{
    color: #585c64;float:left;
    margin-left:10px;margin-top:14px;
    text-decoration:none;
    font-size: 13px;
    }
    .head_right_button{
    height: .64rem;width: .64rem;
    margin-right:10px;margin-top:10px;
    float:right;
    }
    .top-search{
    outline: 0;border: 0;
    flex: 1;
    font-size: .57333rem;color: #98989f;
    height: 50%;
    width: 100%;
    padding: 15px 0px;
    margin:7px 0 0 19px;
    box-sizing: border-box;
    background-color: #f3f4f5;
    display: block;
    border-radius:30px;
    text-indent:20px;
    }

    .top-img{
      width:24px;height:24px;
      text-align:right;  
    }
    .top-search{
      display:inline-block;
      width:260px
    }
    #tarbar{
      position:relative;
      width: 375px;height:91px
    }
    #tarbar .fixed{
    z-index: 1200;width: 375px;
    position: fixed;
    left: 0px;top: 43px;
    }
    #tarbar div{
    height: 34px;
    position: relative;
    z-index: 1220;
    margin-top:0;padding-top:4px;
    margin-bottom:0;padding-bottom:0;
    }
    #tarbar ul{
    background-color: #f9f9fa;
    width: 100%;
    height: 2.90667rem;
    position: absolute;
    top: 0px;left: 0px;
    line-height:1.90667rem;
    display:flex;
    }
    #tarbar ul li{
     display: table-cell;
     position: relative;
     background-color: #f9f9fa;
     white-space: nowrap;
     justify-content:space-between;
    }
    #tarbar ul li a{
    display: block;
    height: .90667rem;
    margin: 0 .46667rem;padding-top: .21333rem;
    color: #585c64;
    font-size:14px;font-family: PingFang-SC-Regular,Helvetica Neue,Helvetica,microsoft yahei,sans-serif;
    text-align: center;
    box-sizing: border-box;
    position: relative;
    text-decoration:none;
    line-height:2.90667rem;
    }
  .icon-xiala5{
    font-size: .48rem;
    display: inline-block;
    margin-top: .18667rem;
    width: 1.06667rem;height: .90667rem;
    position: absolute;
    right: 15px;top: 5px;bottom: 0;
    background-color: #f9f9fa;
    z-index: 4;
    text-align: center;
  }
  .icon-xiala5:before{
    margin-top:0px!important;margin-bottom:0px!important;
  }
  .cart{
    position:fixed;
    top:90%; left:6%;
    z-index:1200;
    border-radius:50%;
    width:60px;height:60px;
    background:#000;
    text-align:center;
    line-height:60px;
    color:#fff;
  }
   .count{
    position:fixed;
    top:91%; left:15%;
    z-index:1200;
    text-align:center;
    background-color: #de3d96;
    line-height:60px;
    border-radius: 50%;
    width:16px;height:16px;
    color:#fff;
  }
  .cartCount{
     position:fixed;
    top:87.5%; left:15.5%;
    z-index:1200;
    color:#fff;
    font-size:13px;
  }
</style>
