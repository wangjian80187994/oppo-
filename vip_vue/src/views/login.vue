<template>
    <div id="login">
        <div id="logo">
            <div class="models-logo"></div>
            <div href="#" class="icon-login-logo"></div>
            <a class="iconfont icon-quxiao"></a>
        </div>

     <van-cell-group>
  <van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" @blur="phone()"/>
  </van-cell-group>
     <van-cell-group>
  <van-field v-model="password" required clearable label="密码" type="password" placeholder="请输入密码" />
  </van-cell-group>
        <mt-button type="danger" size="large" @click="load()">登录</mt-button>
        <a href="#" class="lost">忘记密码</a>
        <fieldset class="J-login-models-m">
            <legend>或</legend>
            <router-link to="/reg"> <a id="test">手机号注册登录</a></router-link>
        </fieldset>
    </div>
    
</template>
<script>
import  qs from 'qs'
export default {
    data(){
        return{
            username:"",
            password:"123456",
            userId:'',
        }
    },
    methods:{
        phone(){
           var reg=/^[a-z0-9_]{3,12}$/i;
              var p = this.username
                //3:验证用户名 出错提示
                if(!reg.test(p)){
                   alert("用户名格式不正确");
                    return;
                    }     
        },
        load(){
            this.axios.post("login",{username:this.username,password:this.password},{
               headers:{
                   "content-Type":"application/x-www-form-urlencoded",
                   "token":localStorage.getItem("token")||sessionStorage.getItem("token")
                   },
                // url:"login",
                // data:{
                //   username:this.username,
                //   password:this.password,
                //   }
                },
               // 'login',`username=${this.username}&password=${this.password}`,
                //   {prams:{username:this.username,password:this.password}}
                ).then(result=>{
                    if(result.data!==0){
                    sessionStorage.setItem("phone",this.username)
                    sessionStorage.setItem("uid",result.data.uid)
                    
                alert("3秒后跳转首页")
                this.$router.push('/Home')
                }else{
                    alert('用户名或密码不正确')
                    return;
                }
        })
        },
    },

}
</script>
<style scoped>
    .mint-button--danger{
        height: 44px;line-height:44px;
        background-color:#ee9eca !important;
        background: #de3d96 !important;
        margin:30px 0 0 17px;
        width:91%;
    }
    #login .lost{font-size: 14px;
            height: 22px;
            line-height: 22px;
            overflow: hidden;
            clear: both;
            float: right;
            padding: 15px;
            text-decoration:none;
        }
    #test{
    color: #e4007f;
    height: 44px;
    line-height: 44px;
    padding: 0 14px;
    border-radius: 3px;
    display:inline-block;
    border: 1px solid #e4007f;
    text-decoration: none;
    font-size: 14px;
    text-align:center;
    margin:40px 104px;
}
#logo{
    position:relative;
}
.models-logo{
    background: #f6f6f6 url(../img/login_img/2.jpg) no-repeat 0 0;
    height: 170px;
    text-align: center;
}
.icon-login-logo{
    width:105px;height: 50px;
    background: url(../img/login_img/1.png) no-repeat 0 0;
    background-size: 100% auto;
    position:absolute;
    top:36%;left:33%;
}
.J-login-models-m{
    position: relative;
    height: 120px;
    text-align: center;
    clear: both;
    color: #dbdbdb;
    border-top: 1px solid #dbdbdb;
    border-right: 0;
    font-size: 12px;
    border-left: 0;
    border-bottom: 0;
    
}
    .icon-quxiao{
    color: #222;
    border-radius: 12px;
    height: 20px;width: 20px;
    line-height: 20px;
    display: block;
    text-align: center;
    font-size: 18px;
    padding: 1px;
    position: absolute;
    top: 10px; right: 10px;
    }
    .mint-cell-wrapper{
        border-bottom:1px solid #e7e7e7!important;
    }
    .mint-cell{
        border-bottom:1px solid #e7e7e7!important;
    }
</style>