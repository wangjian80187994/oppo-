<template>
    <div>
    <div class="relative">
    <div class="details-fixed">
        <div class="details-top">
       
        <!--左箭头-->
            <div class="top">
               <router-link to="Home"><a href="#" class="iconfont_left"> 
                    <i class="iconfont icon-zuo"></i>
                </a>
                </router-link> 
            </div>
        <!--中间介绍-->
            <div class="top">
                <span class="font-middle">手机数码</span>
            </div>
        <!--右边菜单键-->
                <div class="top">
                    <a href="#" class="iconfont_right">
                        <!--<img src="../img/details/01.png" alt="">-->
                    </a>
                </div>
           </div>
        </div>
        </div>
          <div class="cart">
          <span class="iconfont icon-gouwuche"></span>
          <span class="count">
            <span class="cartCount">{{cartCount}}</span>
          </span>
      </div>
       <router-link to="classify_list"><detailsClassify></detailsClassify></router-link>
        <router-link to="classify_list"><detailsBrand></detailsBrand></router-link>
    </div>
</template>
<script>
 import details_brand from '../components/details_brand.vue'
 import details_classify from '../components/details_classify.vue'
export default {
    data() {
        return {  }
    },
    components:{
    //  "indexClassify":index_classify,
     "detailsBrand":details_brand,
     "detailsClassify":details_classify,
  },
  computed:{
        cartCount:function(){
            return this.$store.getters.cartCount
        }
    },
}
</script>
<style scoped>
.relative{
    width:375px;height:44px;
    position:relative;
}
.details-top{
    width:375px;height:44px;
    position:relative;
    background-color: #fbfbfa;
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid rgb(219,219,219);
}
    .details-fixed{
        z-index:1200;
    position:fixed;
    top: 0px; left: 0px;
    }
    .top{
        display:inline-block;
    }
    .font-middle{
        display:inline-block;
        font-size:18px;
        line-height:40px;
        text-align:center;
        margin-left:-23px;
    }
    .top img{
        display:inline-block;
        width:20px;height:18px;
        line-height:44px;
    }
    .iconfont_right{
        display:inline-block;
        width:46px;height:44px;
        line-height:44px;
        margin-right:-15px;
    }
    .iconfont_left{
        display:inline-block;
        width:46px;height:44px;
        text-decoration:none;
        line-height:44px;
        margin-left:9px;
        font-weight:bold;
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