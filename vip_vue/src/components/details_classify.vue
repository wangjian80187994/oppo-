<template>
    <div class="list-item">

    <div class="list-item-relative">
        <div class="operate-bg" >
            <img src="../img/details_classify/t1.jpg" alt="" class="t1">
        </div>
        <div class="operate-list" v-for="(item,i) of list" :key="i" v-lazy="item">
            <img :src="'details_classify/'+item.img" alt="" class="operate-inner">
       </div>
    </div>
    
      <div class="list-item-relative">
          <div class="operate-bg">
              <img src="../img/details_classify/t1.jpg" alt="" class="t1">
          </div>
      </div>

     <div class="list-item-relative">
         <div class="operate-bg">
             <img src="../img/details_classify/t1.jpg" alt="" class="t1">
         </div>
     </div>
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
        var url="detailsClassify";
        this.axios.get(url).then(result=>{
            this.list=result.data
        })
            
        }
    },
    created(){
        this.load()
    }
}
</script>

<style scoped>
.list-item{
    position:relative;
}
.list-item-relative{
    position:relative;
    width:375px;height:88px;
}

.operate-bg{
    position:absolute;
    top:0;left:0;
    width:375px;height:88px;
}

.operate-bg .t1{
    display:block;
    width: 100%;height: 84px;
}
.operate-list{
    position:relative;z-index: 2;
}
.operate-inner{
    float:left;
    width:25%;height:auto;
    width:93.75px; height:88px;
}

</style>