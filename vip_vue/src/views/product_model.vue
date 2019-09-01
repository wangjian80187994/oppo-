<template>
    <div>
        <mt-swipe :auto="0" >
            <mt-swipe-item v-for="(item,i) of pics" :key="i"><img :src="`vip_product_img/`+item.product_details_img" alt=""></mt-swipe-item>
        </mt-swipe>
        <!--价格-->
        <div >
        <div class="price">￥{{product_mark_price}}</div>
        <!--主标题-->
        <div class="title">{{product_name}}</div>
        <!--副标题-->
        <div class="sub-title">{{product_subtitle}}</div>
        <div class="pms"></div>
        </div>
        <!--颜色-->
            <div class="color">颜色</div>
            <div class="select" >
                <div class="text" v-for="(item,i) of specs" :key="i"><img src="" alt="">{{item.spec}}</div>
            </div>
       <!--规格-->
         <div class="color_size">规格</div>
         <div class="option">均码</div>
         <div class="pms"></div>
        <!--运费-->
        <!--服务详情-->
        <!--产品品牌-->
        <!--商品介绍-->
        <!--售后与咨询-->
        <div class="color">售后与咨询</div>
        <button class="button">购买咨询</button>
        <div class="pms"></div>
        <!--图文详情-->
        <div class="color">图文详情</div>
        <!--售后广告图-->
        <div class="img">
         <img src="../img/p1img/p1.png" alt="" class="firstImg"> 
         <div class="advertising">
         <img src="../img/p1img/1.png" alt="" class="secondImg">
         <img src="../img/p1img/2.png" alt="" class="threeImg">
         <img src="../img/p1img/3.png" alt="" class="fourImg">
         <img src="../img/p1img/4.png" alt="" class="fiveImg">
         <img src="../img/p1img/5.png" alt="" class="sixImg">
         <img src="../img/p1img/6.png" alt="" class="sevenImg">
         <img src="../img/p1img/7.png" alt="" class="eightImg">
         <img src="../img/p1img/8.png" alt="" class="nineImg">
         <img src="../img/p1img/9.png" alt="" class="tenImg">
         <img src="../img/p1img/10.png" alt="" class="elevenImg">
         <img src="../img/p1img/11.png" alt="" class="twelveImg">
         <img src="../img/p1img/12.png" alt="" class="thirteenImg">
         <img src="../img/p1img/13.png" alt="" class="fourteenImg">
         <img src="../img/p1img/14.png" alt="" class="fifteenImg">
         <img src="../img/p1img/15.png" alt="" class="sixtennImg">
         </div>
         </div>  
        <!--售后价格与说明-->
        <div class="product-sale-price">
            <div class="color">售后价格与说明</div>
            <p>
                温馨提示：手机为特殊商品，若非质量问题不作退换，签收验货流程：签收时，请当着快递员的面，当面清点货物，查看商品，发票，赠品是否齐全。如若您遇到如商品包装盒有损坏，赠品不全，发票缺失等情况。请直接拒签。一旦签收，即代表已清点并确认了商品，包括随机配件已经赠品，签收后，不受理事后提出的有关商品，配件，赠品，发票缺失以及商品包装盒损坏等问题。货物毁损、灭失的风险，在货物交付(收货人签收)之前由发货人承担，交付(收货人签收)之后由收货人承担。如验货时存在问题，可以当面验货拒收。。售出产品100%原装正品，本产品全国联保，享受三包服务。如因质量问题或故障，凭厂商维修中心质量检测证明，享受7日内退货，15日内换货，15日以上在质保期内享受免费保修等三包服务！您可拨打三星全国客服电话 4008105858查询当地售后地址持保修卡进行全国联保 重要信息：请会员确认订单时自行勾选发票以便保修，谢谢！
            </p>
            <p>
            </p>
        </div>
        <van-goods-action>
        <div>
         <span class="count">
            <span class="cartCount">{{cartCount}}</span>
          </span>
          </div>
        <van-goods-action-icon icon="cart-o" text="购物车" bind:click="onClickIcon" @click="jump()"/>
           <van-goods-action-button text="立即购买" bind:click="onClickButton" @click="addCart()"/>
        </van-goods-action>
        <router-link to="/classify_list">
        <div class="toReturnLeft">
            <span class="iconfont icon-zuo"></span>
        </div>
        </router-link>
         <div class="toReturnRight">
            <span class="iconfont icon-shoucang " v-if="boolean" @click="addCollect()"  ></span>
            <span class="iconfont icon-shoucangshixin " v-else @click="delCollect()" ></span>
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return {
            product:{},
            pics:[],
            specs:[],
            product_mark_price:'',
            product_name:'',
            product_subtitle:'',
            boolean:true,
            pid:3,
            canClick:true,
            };
    },
    computed:{
        cartCount:function(){
            return this.$store.getters.cartCount
        }
    },
    methods: {
        //添加收藏
        addCollect(){
            //1:获取当前用户uid
            let pid =this.pid
            var  uid=parseInt(sessionStorage.getItem("uid"))
            var product_name=this.product_name
            var product_mark_price=this.product_mark_price
                var obj = {pid:pid,uid:uid,product_name:product_name,product_mark_price:product_mark_price};
                var url ="addCollect2";
                //发送请求
        this.axios.get(url,{params:obj}).then(result=>{
               this.boolean=false;  
            }).catch(err=>{console.log(err)})
        },
        //取消收藏
        delCollect(did){
            var pid = this.pid
            var uid = parseInt(sessionStorage.getItem("uid"))
                var obj = {pid:pid,uid:uid};
                var url ="delCollect2";
                //发送请求
        this.axios.get(url,{params:obj}).then(result=>{
            this.list=result.data.data
            this.boolean=true;
            }).catch(err=>{console.log(err)})
        },
        // 页面加载
        load(){
        this.boolean=true;
            var  arg=parseInt(this.$route.params.did);
            var url="productModel";   
            //发送请求    
        this.axios.get(url,{params:{did:arg}}).then(result=>{
            this.product_mark_price=result.data.product.mark_price
            this.product_name=result.data.product.product_name
            this.product_subtitle=result.data.product.product_subtitle
            this.pics=result.data.pics
            this.specs=result.data.specs
            this.pid=result.data.product.pid
             this.select()
        })
      },
      //添加购物车
      addCart(){
            //1:获取当前用户uid
               var  uid=parseInt(sessionStorage.getItem("uid"))
                // console.log(uid)
                var obj = {uid:uid};
                var url ="addCart";
                if(this.canClick){
                    this.canClick=false;
            this.axios.get(url,{params:obj}).then(result=>{
                 setTimeout(()=>{
                console.log("加载完成1"+result) 
            this.$store.commit('addCartCount')
                 this.canClick=true
                 },3000)
             })
         }
      },
      //跳转到购物车
      jump(){
            var uid=parseInt(sessionStorage.getItem("uid"))
                // console.log(uid)
                   var obj = {uid:uid};
                    var url ="cart";
                //发送请求
        this.axios.get(url,{params:obj}).then(result=>{
                this.$router.push("/cart/"+uid)
               console.log(result)                     
            })
         },
    //查询当前当前的商品是否在收藏中
      select(){
            var uid=parseInt(sessionStorage.getItem("uid"))
            console.log("uid",uid)
            console.log("pid的值为"+this.pid)
            var url="selectCollect";
            var obj = {pid:this.pid,uid:uid}
            //发送请求
    this.axios.get(url,{params:obj}).then(result=>{
            if(result.data.data.length>0){
                console.log(result)
                this.boolean=false
            }
    })
},
    },
    
     created() {
        this.load()
    },
}
</script>
<style scoped>
    /*轮播图*/
    .mint-swipe,img{
        width:375px;height:375px;
    }
    /*价格*/
    .price{
        width:350px;height:48px;
            font-size:25px;
            border-bottom:1px solid #F7F7F7;
            margin-left:20px;
            line-height:48px;
    }
    /*主标题 */
    .title{
        width:345px;height:15px;
        padding-top:15px;
        font-size:13px;
        margin-left:20px;
        
    }
    /*副标题 */
    .sub-title{
        width:345px;height:22px;
        margin-top:6px;
        font-size:12px;color: #98989f;
        word-break: break-all;
        margin-left:20px
    }
    /* */
    .pms{
    margin-top: 8px;height:8px;
    background: #f3f4f5!important;
    }
    /*颜色*/
    .color{
        font-size:14px;font-weight:bold;
        margin-left:20px;
        color: #222;   
        padding-top:20px;margin-bottom:16px;
    }
    /*颜色选择框 */
    .select{
        width:342px;height:84px;
        display:flex;
        justify-content:space-between;
            flex-wrap: wrap;
            margin-left:20px;
    }
    /*颜色文字介绍 */
    .text{
        width:160px;height:30px;
        border: 1px solid #e7e7e7;
        overflow: hidden;
        white-space: nowrap;
        line-height:30px;text-align:center;
        font-size:10px;
    }
    /*规格*/
    .color_size{
        font-size:14px;font-weight:bold;
        margin-left:20px;
        color: #222;   
        padding-top:7px;
    }
    
    .option{
        width:105px;height:30px;
        border: 1px solid #e7e7e7;
        line-height:30px;text-align:center;
        font-size:10px;margin-left:20px;
        margin-top:20px;margin-bottom:20px;
    }
    /*购买与咨询*/
    .button{
        width:285px;height:48px;                                                                                             
        display:block;
        margin:0 auto;
        background:#fff;
        color:#585c64;
        text-align:center;line-height:48px;
        border: 1px solid #ccc;
        border-radius:3px;
        margin-bottom:20px;margin-top:15px;
    }
    /*底部图片*/
    .firstImg{
        width:335px;height:85px;
        padding:20px;
    }
    .advertising{width:375px;margin-top:0px;}
    .advertising img{margin-top:-4px;}
    .secondImg{height:688px}
    .threeImg{height:629px}
    .fourImg{height:489px;}
    .fiveImg{height:476px;}
    .sixImg{height:470px;}
    .sevenImg{height:376px}
    .eightImg{height:451px}
    .nineImg{height:540px}
    .tenImg{height:611px}
    .elevenImg{height:668px}
    .twelveImg{height:608px}
    .thirteenImg{height:517px}
    .fourteenImg{height:559px}
    .fifteenImg{height:376px}
    .sixtennImg{height:566px}
    /*售后价格与说明*/
    .product-sale-price{
        font-size:12px;
    }
    /*悬浮栏*/
    .van-goods-action-button--last{
            background-color: #de3d96;
            width:252px!important;height:42px!important;
              margin-right: 15px!important;
            margin-left: 46px!important;
            border-top-right-radius: 0!important;
            border-bottom-right-radius:0!important;
            border-top-left-radius:0!important;
            border-bottom-left-radius:0!important;
    }
    
    .van-goods-action-icon{
          padding-left:24px!important;
    }
    
    .van-goods-action-icon{
    }

   .count{
    position:fixed;
    top:93%; left:15%;
    z-index:1200;
    text-align:center;
    background-color: #de3d96;
    line-height:60px;
    border-radius: 50%;
    width:18px;height:18px;
    color:#fff;
  }
  .cartCount{
     position:fixed;
    top:89.8%; left:16.1%;
    z-index:1210;
    color:#fff;
    font-size:13px;
  }
.toReturnLeft{
    position:fixed;
    width:40px;height:40px;
    background:#000;
    top:1.5%;left:1.5%;
    border-radius:50%;
    color:#fff;
    line-height:40px;
    text-align:center;
    font:bold 16px!important ;
    opacity:.5;
}
.toReturnLeft .iconfont{
    font-weight:bold!important;
}
.toReturnRight{
    position:fixed;
    width:40px;height:40px;
    background:#000;
    top:1.5%;right:1.5%;
    border-radius:50%;
    color:#fff;
    line-height:40px;
    text-align:center;
    font:bold 16px!important ;
    opacity:.5;
}
.toReturnLeft .icon-shoucang{
    font-weight:bold!important;
}
    
    /**/
    /**/
    /**/
    /**/
</style>