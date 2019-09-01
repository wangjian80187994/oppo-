<template>
    <div>
        <div class="sectionlist-top">
            <img src="../img/index_new/1.jpg" alt="" class="img1">
        </div>
            <div class="sectionlist-item" v-for="(item,i) of list" :key="i">
            <div class="sectionlist-col">
                <div class="sectionlist-col-item">
                    <img :src="`index_brand/`+item.img" alt="">
                </div>
                <div class="sectionlist-col-item-border">
                    <span class="size-left" > {{item.laptop}} </span>
                    <span class="size-right">{{item.time}}</span>
                <div class="size-left-second">
                        <span class="left-second">{{item.discount}}</span> 
                        <span class="left-second left-second-2">折起</span>
                        <span class="right-second">{{item.discounts}}</span>
                </div>
                </div>   
                
            </div>
            </div>
    </div>
</template>
<script>
export default {
    data(){
        return{ 
            list:[],
        }
    },
    methods: {
      load(){
          var url="brand";
           this.axios.get(url).then(result=>{
            this.list=result.data
            console.log(this.list)
        })
      }  
    },
    created() {
        this.load()
    },
}
</script>
<style scoped>
.sectionlist-top{
    background-color: rgb(243, 244, 246);
    width:375px;height:54px;
    position:relative;
    }
    .img1{width:375px;height:54px;
    }
    .sectionlist-item{
        width:375px;height:246px;
        background-color: rgb(255, 255, 255);
        
        position:relative;
    }
    .sectionlist-col{
        width:375px;height:246px;
        background-color: rgb(243, 244, 246);
        
        overflow: hidden;white-space: nowrap;
        border-color: rgb(313, 233, 235);
        border-radius:2px; 
        position:absolute;
        top:0px;left:0px;
    }
    .sectionlist-col-item{
    width:350px;height:168px;
    position:absolute;
    top:0px;left:12px;
    }
    .sectionlist-col .sectionlist-col-item img{
    width:350px;height:168px;
    border-radius: 0.54rem;
        
    }
    .sectionlist-col-item-border{
        width:350px;height:66px;
        position:absolute;
        top:160px;left:12px;
        background:#fff;
        border-bottom-right-radius: 0.54rem;border-bottom-left-radius: 0.54rem;
        
    }
    .size-left{
    width: 7.44rem;height: 0.453333rem;
    position: absolute;
    top:16px;left:13px;
    font-size: .8rem;
    line-height: 0.453333rem;
    font-weight: bold;
    text-overflow: ellipsis;
    display: inline-block;
    color:rgb(34, 34, 34);
    }
    .size-right{
    left: 19.3rem;top: 1rem;
    width: 1.33333rem;
    height: 0.4rem;
    background-color: rgb(255, 255, 255);
    font-size: 0.32rem;
    font-family: PingFangSC-Regular;
    color: rgb(152, 152, 159);
    line-height: 0.4rem;
    text-align: right;
    position: absolute;
    display: inline-block;
    }
    .size-left-second{
        position: absolute;
        top:41px;  left:14px;  
        font-size: 0.32rem;
        line-height: 0.373333rem;
    }
    .left-second{
    height: 0.373333rem;width: 1.6rem;
    color: rgb(222, 61, 150)
    }
    .left-second-2{
    color: rgb(88, 92, 100);
    }
    .right-second{
    left: 3.34667rem;;top: -0.02333rem;
    width: 7.33333rem;height: 0.373333rem;
    background-color: rgb(255, 255, 255);
    font-size: 0.32rem;
    color: rgb(88, 92, 100);
    line-height: 0.373333rem;
    text-overflow: ellipsis;
    position: absolute;
    display: inline-block;
    }
</style>