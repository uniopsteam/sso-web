<template>
    <nav class="navbar navbar-inverse" >
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">重庆农商统一运维 | PAAS平台</a>
            </div>
            <div>
                <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                         你好，<label id="username">{{ username }}</label>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a  @click="logout">退出</a></li>
                        <li class="divider"></li>
                        <li><router-link to="front">服务管理</router-link></li>
                        <li class="divider"></li>
                        <li><router-link to="backend">个人中心</router-link></li>
                    </ul>
                </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import { max_age } from '@/config/config'
import { mapGetters } from 'vuex'

export default {
    name: 'NavBar',
    data() {
        return {
            dialogVisible: false,
            username: ''
        }
    },
    mounted() {
        this.$store.dispatch('user/userinfo')
            .then((data) => {             
                this.username = data.username
            })
            .catch( error => {
                window.console.log("getinfo error:"+error)
        })

        let timestamp = (new Date()).valueOf();
        if (this.token && timestamp - this.token <= max_age) {
            let payload = JSON.parse(decodeURIComponent(escape(this.token.split('.')[1])));
            this.username = payload.username
        }  
    },
    computed:{
        ...mapGetters([
            'token'
        ])
    },
    methods: {
        logout(){
             this.$store.dispatch('user/logout')
            .then(() => {
                this.$store.dispatch('platform/clean_platforms')
                this.$router.push("/")
            })
            .catch( error => {
                this.$store.dispatch('platform/clean_platforms')
                this.$router.push("/")
                window.console.log("logout error:"+error)
            })
        }
    }
}
</script>

<style scoped>
.navbar {
    background-color: black;
    margin-bottom: 0px;
} 

</style>