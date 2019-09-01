<template>
    <div>
        <div class="relative">
        <div class="details-fixed">
            <div class="details-top">
                <div class="top">
                 <router-link to="details">
                 <a href="#" class="iconfont_left">
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
                            <i class="iconfont icon--zhuye"></i>
                        </a>
                    </div>
            </div>
            </div>
            </div>
        
            
            <div class="table">
                <ul>
                    <li class="firstli">
                        <span>价格 </span>
                        <span class="line">
                            <i class="iconfont xiangxia">&#xeb20;</i>
                            <i class="iconfont xiangshang">&#xeb1f;</i>
                        </span>
                    </li>
                    <li class="secondli">
                        <span>折扣 </span>
                         <span class="line">
                            <i class="iconfont xiangxia">&#xeb20;</i>
                            <i class="iconfont xiangshang">&#xeb1f;</i>
                        </span>
                    </li>
                    <li>
                        <span>品牌 </span>
                         <span>
                            <i class="iconfont icon-shaixuan"> </i>
                        </span>
                    </li>
                    <li class="lastli">
                        <span>筛选 </span>
                         <span>
                            <i class="iconfont icon-shaixuan"> </i>
                        </span>
                    </li>
                </ul>
            </div>
             <div class="cart">
          <span class="iconfont icon-gouwuche"></span>
          <span class="count">
            <span class="cartCount">{{cartCount}}</span>
          </span>
      </div>
        <productList></productList>
    </div>
</template>

<script>
 import product_list from '../components/product_list.vue'
export default {
    
    data(){
        return {};
    },
    components:{
     "productList":product_list,
     
  },
  computed:{
        cartCount:function(){
            return this.$store.getters.cartCount
        }
    },
}
</script>

<style scoped>
/*筛选页面*/
.table{
    width: 100%;
    background-color: #fff;
}
ul{ margin:0;padding:0;display: table;width:375px;}
ul li{
list-style:none;
font-size:15px;
text-align:center;
height: 36px;
line-height:36px;
display: table-cell;
border:1px solid #ccc;
}

li.firstli,.lastli{
    border-right:0px;
    border-left:0px;
}
.secondli{
    border-right:1px;
}
.line{
    display:inline-block;
    height:14.4px;
    line-height:5px;
    vertical-align: middle;
    opacity:.5;
}
i.xiangxia,i.xiangshang{
    font-size:2px;
    display:block;
    height:7.2px;
    vertical-align: middle;
}
.icon-shaixuan{
    font-size:7px;
    vertical-align: middle;
}

/*顶部*/
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
        margin-right:-9px;
        text-decoration:none;
        font-weight:bold;
        color:#000;
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
  .iconfont.icon-zuo{
      color:#000;
  }
</style>