<template>
    <div class="login_container">
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                 <a class="navbar-brand" href="#"> 
                    <span>重庆农商统一运维 | 认证服务 </span>
                    </a>
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                        aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>               
            </div>
        </div>
        </nav>
        <div class="login_box">
            <div class="avator_box"> 
                <img src="img/cqrc_logo.png" alt="">
            </div>
            <el-form ref="loginFormRef" label-width="0px" :rules="loginFormRules" :model="loginForm" class="login_form">
                <el-form-item  prop="username">
                    <el-input  v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="loginForm.password"  prefix-icon="el-icon-s-goods"></el-input>
                </el-form-item> 
                <el-form-item class="btns">
                    <el-button type="primary" @click="login" >登陆</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item> 
            </el-form>
        </div>
        <Footer></Footer>       
    </div>
</template>

<script>
import Footer  from '../commons/footer/Footer'

export default {
    name: 'MainPage',
    components:{
        Footer
    },
    data() {
        return {
            loginForm: {
                username:'',
                password:''
            },
            loginFormRules:{
                username: [
                     { required: true, message: '请输入用户名', trigger: 'blur' },
                     { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }    
                ],
                password:[
                     { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            },
            app_url: undefined,
            next: '/'
        }
    },
    mounted() {
      this.app_url = this.$route.query.app_url
      this.next = this.$route.query.next
    },
    methods: {
        resetLoginForm(){
           this.$refs.loginFormRef.resetFields()     
        },
        login(){
            this.$refs.loginFormRef.validate( valid => {
                if (valid) {
                    if(this.app_url) {
                        this.loginForm['app_url'] = this.app_url
                        this.$store.dispatch('user/sso_login', this.loginForm).then( response => {
                          const data = response.data
                          window.location.href = data.app_url + "?token=" + data.token + '&next=' +this.next 
                        }).catch( error => {
                            window.console.log("登录错误:"+error)
                        })      
                    } else {
                       this.$store.dispatch('user/login', this.loginForm)
                            .then(() => {
                                this.$router.push("/home/front")
                            }).catch( error => {
                                window.console.log("登录错误:"+error)
                            })     
                    }
                   
        
                    
                } else {
                    window.console.log('error submit!!')
                    return false
                }
            })
        }
    },
}
</script>

<style lang="css" scope>
    .login_container {
         background-color: #2b4b6b;
         height: 100%
    }
    .login_box {
        width:450px;
        height: 300px;
        background-color:  #fff;
        border-radius:  5px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%)
    }
    .avator_box{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px  #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
    }
    .avator_box img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
    }
    .btns {
        display: flex;
        justify-content:  flex-end;
    }
    .login_form{
         position: absolute;
         bottom: 0px;
         width: 100%;
         padding: 0 20px;
         box-sizing: border-box;
    }
</style>