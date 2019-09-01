<template>
    <div>
        <mt-swipe :auto="3000" class="swipe" >
            <mt-swipe-item v-for="(item,i) of list" :key="i"><img :src="item.img" alt=""></mt-swipe-item>
        </mt-swipe>
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
        var url="carousel";
        this.axios.get(url).then(result=>{
            this.list=result.data
            console.log(this.list)
        })
            
        }
    },
    created(){
        this.load()
    }
}
</script>

<style scoped>
    .swipe{width:100%;height:175px}
    img{
        width:375px;height:150px;
    }
</style>