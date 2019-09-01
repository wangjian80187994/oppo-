<template>
    <div id="login">
        <div id="logo">
            <div class="models-logo"></div>
            <div href="#" class="icon-login-logo"></div>
            <a class="iconfont icon-quxiao"></a>
        </div>
        <van-cell-group>
  <van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" @blur="phone()"
  />
  </van-cell-group>
        <!--<mt-field label="用户名" placeholder="用户名/绑定手机" v-model="username" click="phone()"></mt-field>
        -->
        <mt-field label="密码"  v-model="password" type="password"></mt-field>
        <van-cell-group>
  <van-field
    v-model="sms"
    center
    clearable
    label="短信验证码"
    placeholder="请输入短信验证码"
  >
    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
  </van-field>
</van-cell-group>
        <mt-button type="danger" size="large" @click="load()">注册</mt-button>
        <a href="#" class="lost">忘记密码</a>
        <fieldset class="J-login-models-m">
            <legend>或</legend>
            <router-link to="/login"><a id="test">用户名密码登录</a></router-link>
        </fieldset>
    </div>


</template>
<script>
import  qs from 'qs'
export default {
    data(){
        return{
            username:"",
            password:"",
            sms:"",
            userId:'',
            show:'false'
        }
    },
   methods:{
        load(){
            this.axios.post("reg",{username:this.username,password:this.password},{
               headers:{
                   "content-Type":"application/x-www-form-urlencoded",
                   "token":localStorage.getItem("token")||sessionStorage.getItem("token")
                   },
                },
                ).then(result=>{console.log('注册成功1'),console.log(result) 
                    sessionStorage.setItem("phone",this.username)
                    sessionStorage.setItem("uid",result.data.uid)
                this.$router.push('/Home')
        })
        },
        phone(){
              var reg=/^[a-z0-9_]{3,11}$/i;
              var u = this.username
                //3:验证用户名 出错提示
                if(!reg.test(u)){
                   alert("用户名格式不正确");
                    return;
                    }      
             var obj = {username:this.username};
             var url="phone";
             this.axios.get(url,{params:obj}).then(result=>{
                 if(result.data==0){
                     alert('用户名不能为空')
                     return
                 } else if (result.data==1){
                     alert('用户名已被注册')
                 }
        })
        }
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
    .van-cell{
        padding: 10px 8px!important;
        color: #323233!important;
        font-size: 16px!important;
    }
    .mint-cell-text{
        font-size:14px!important;
    }
</style>