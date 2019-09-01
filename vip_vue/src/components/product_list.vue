<template>
    <div>
        <!--产品加载页面-->
        <div class="product">
        <!--产品信息dl-->
        <div class="box">
            <dl class="product-list" v-for="(item,i) of list" :key="i">
                <!--a标签跳转连接-->        
                    <dt>
                <!--产品信息图-->
                            <img :src="`product_list/`+item.img_m" alt="" @click="jump(item.did)">
                        <!--水印图begin-->
                        <div class="u-icon">
                            <img :src="`product_list/`+item.img_s" alt="">
                        </div>
                        <!--商品库存end-->
                        <!--商品库存-->
                        <div class="stock">最后{{item.stock}}件 </div>
                    </dt>
                </a>
                <!--价格信息begin-->
                    <dd class="product-price-wrap">
                        <span class="vip-price-wrapper">￥{{item.mark_price}}</span>
                        <span class="mark-price">¥{{item.vip_price}}</span>
                        <span class="discount">{{item.discount}}折</span>
                    </dd>
                    <!--价格信息end-->
                    <!--标签信息begin-->
                    <dd class="product-name">{{item.product_name}}</dd>
                    <!--标签信息end-->
            </dl>
         
        </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data (){
        return {
            list:[]
        };
    },
    methods: {
        load(){
        var url="productList";
        this.axios.get(url).then(result=>{
            this.list=result.data
            console.log(this.list)
        })
      },
      jump(d){
         
          this.$router.push("/product_model/"+d)
             /*var obj = {did:did};
             var url="productModel";
             this.axios.get(url,{params:obj}).then(result=>{
             this.list=result.data
             */
             }
    },
    created(){
        this.load()
    },
}
</script>
<style scoped>
    .product{
        background: #f3f4f5;
      
        
    }
    .product-list{
        width:178px;height:283px;
        background: #fff;
        display: inline-block;
        margin:0 0 7px 0;
    }
   .box{
       width:366px;
       margin:0 auto;
         display: flex;
        flex-wrap: wrap;
        justify-content:space-around;
   }

   dt{
    position: relative;
    display: block;
    width: 100%;
    height: 178px;
   }
   dt img{
       width:100%;
   }
   .u-icon{
       width:34px;
       height:34px;
       position:absolute;
       top:12px;right:12px;
   }
   .u-icon img{
       width:100%;
   }
   .stock{
           color: #fff;
           background-color: rgba(34,34,34,.8);
           width:63px;line-height:17px;
           border-radius:30px;font-size: .32rem;
           text-align:center;
           position:absolute;
           top:154px;left:33%;     
   }
   .product-price-wrap,.product-name{
    position: relative;
    padding: 0 10px;
    margin: 9px 0;
    color: #98989f;
   }
   .vip-price-wrapper{
    font-size:16px;
    color: #222;
   }
   .mark-price{
    text-decoration: line-through;
    font-size: .26667rem;
    padding-left:4px;
   }
   .discount{
    align-items: center;
    font-size: .26667rem;
    padding-left: 4px;
   }
   .product-name{
       font-size:12px;
       color: #585c64;
       line-height:17px;
       margin-top:-4px;
       word-break: break-all;
       white-space: normal;
   }   
</style>
