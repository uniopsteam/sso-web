<template>
    <el-container>
        <el-header>
            <nav-bar></nav-bar>
        </el-header>
       <el-main>
                <router-view/>
       </el-main>
       <Footer></Footer>
    </el-container>
</template>

<script>
import NavBar  from '../commons/navbar/NavBar'
import Footer  from '../commons/footer/Footer'
export default {
    name: 'Home',
    components:{
        NavBar,
        Footer
    }
}
</script>

<style lang="scss" scoped>
.el-header {
    padding:0px;
    height: auto !important;
}
.el-main {
    padding:0px;
}
.navvar {
    margin-bottom: 0px;
}
.el-container {
    height: 100%;
}
</style>