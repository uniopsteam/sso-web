<template>
    <el-container class="backend-container">
        <el-aside>
            左侧
        </el-aside>
        <el-main>
            内容去
        </el-main>
    </el-container>
</template>

<script>
export default {
    name: "Backend"
}
</script>

<style lang="scss" scoped>
.el-aside {
    width: 200px !important;
    background-color: #373d41;
}   
.el-main {
    background-color: #EAEDF1;
    height: 100%;
}
.backend-container {
    height: 100%;
}
</style>