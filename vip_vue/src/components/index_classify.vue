<template>
    <div class="list-item">
    <div class="list-item-relative">
        <div class="operate-bg" >
            <img src="../img/index_details/t1.png" alt="" class="t1">
        </div>
        <div class="operate-list" v-for="(item,i) of list" :key="i">
            <img :src="`index_classify/`+item.img" alt="" class="operate-inner">
       </div>
    </div>

     <div class="list-item-relative">
         <div class="operate-bg">
             <img src="../img/index_details/t1.png" alt="" class="t1">
         </div>
         <div class="operate-list">
             <img src="" alt="" class="operate-inner">
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
        var url="classify";
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
    width:375px;height:84px;
}

.operate-bg{
    position:absolute;
    top:0;left:0;
    width:375px;height:84px;
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
    width:20%;
    height:auto;
}
</style>