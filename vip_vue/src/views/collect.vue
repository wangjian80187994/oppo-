<template>
    <div>   
    <br><br><br><br><br>
        <div >
            <div class="sale">
                <span class="color_size">收藏</span>
            </div>
            <!---->
            <!--购物车中的商品-->
            <div class="product_list_father">

                 <div class="product_list" v-for="(item,i) of list" :key="i">
                <div class="list">
                        <a href="#"><img :src="`cart_img/`+item.sm" class="img"></a>
                </div>
                    <div class="list">
                        <a href="#">
                            <span class="font-size">{{item.title}}</span>
                        </a>
                        <div class="price">
                            <div class="price_span iconfont " @click="addCollect()" >&#xe631;</div>
                           
                        </div>
                        <div class="button">
                        <span class="price_span"> ¥{{item.price}} </span>&nbsp;
                            <del class="price_del"> ¥{{item.mark_price}} </del>
                            <a href="#" class="iconfont icon-quxiao" @click="delCollect(item.iid)" data-id="item.iid"></a> 
                        </div>
                    </div>   
                </div>
            </div>
        </div>
        <div>
            
        </div>
        <!--返回上一级菜单-->
        <router-link to="/Home"> <div class="toReturnLeft"><span class="iconfont icon-zuo"></span></div></router-link>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[]
         }
    },
    methods:{
          load(){
       var uid=parseInt(sessionStorage.getItem("uid"))
             var url="collect";
             var obj = {uid:uid}
        this.axios.get(url,{params:obj}).then(result=>{
            this.list=result.data.data
            console.log(this.list)
        })
    },
        addCollect(){
            //1:获取当前用户uid
               var  uid=parseInt(sessionStorage.getItem("uid"))
                // console.log(uid)
                var obj = {uid:uid};
                var url ="addCart";
            this.axios.get(url,{params:obj}).then(result=>{
               console.log(result)                     
            }).catch(err=>{console.log(err)})
       this.$store.commit('addCartCount')
        },
        delCollect(iid){
            //1:获取当前商品id
                var iid=iid
                console.log("商品的uid"+iid)
                var obj = {iid:iid};
                var url ="delCollect";
            this.axios.get(url,{params:obj}).then(result=>{
            this.list=result.data.data
            this.$store.commit('descCartCount')
            this.load()
            }).catch(err=>{console.log(err)})
        },
    },
   created(){
        this.load()

    },

}
</script>
<style scoped>
.sale{
    width:345px;height:34px;
    padding:0 8px;margin:15px 0;
    display:flex;
    justify-content:space-between;
}
    .color_size{
        font-size:14px;font-weight:bold;
        margin-left:20px;
        color: #222;   
        padding-top:7px;
    }
    .product_list_father{
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    width:335px;
    margin-left:20px;
    }
    .product_list{
        position:relative;
        width:335px;
        margin-top:0px;
        margin-bottom:0px;
    }
    .img{
        width:68px;height:86px;
        float:left;
        margin-top:5px;
        margin-right:16px;
    }
   .font-size{
       display:inline-block;
       width:186px;height:32px;
       font-size:14px;
       margin-top:12px;
        color: #222;
   }
    .price{
        position:absolute;
        top:0;right:0px;
        text-align: right;
        width:78px;
        font-size:14px;
        line-height: 16px;
        margin-top:14px;
    }
   .price_span{margin-bottom: 6px;}
   del{
       color: #98989f;
       font-size: .32rem;
   }
   .button{
       margin-bottom:0px;
       margin-top:0px;
   }
   .button a{
       position:absolute;
       color:#a2a4a8;
       position:absolute;
        right:-133px;
   }
   .button{
    width: 196px;
    height: 50px;
    position: relative;
    border-radius: 0px;
    margin-top: 15px;
}
.delAll{

}
.button button{
    width:24px;height:23px;
    background: #fff;color:#000;
    font-size: 20px;
    border: 1px solid #e7e7e7;
    text-align:center;
    line-height:15px;
    outline:none;
    opacity:.5;
}
.count{
    padding: 0 12px;;
    height: 21px;width:9px;
    line-height: .64rem;
    border:none;
    color: #595d65;
    font-size:18px;
    outline:none;
}
.icon-quxiao{
    text-decoration:none;
    font-size:18px!important;
    line-height:27px;
}
.price_1{
    position:relative;
}
.price_1 span{
    position: absolute;
    top: 45%;right: 22px;
    
    color: #e4007f;
    font-size:14px;
}
.van-submit-bar__button{
    width:375px;
}
.van-submit-1{
    width:375px;height:50px;
}
.price_span.iconfont{
    font-size:32px!important;
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
</style>