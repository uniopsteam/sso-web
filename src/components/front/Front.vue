<template>
    <div>
        <Carousel></Carousel>
       <Content></Content>
    </div>
</template>

<script>
import Carousel  from '../commons/carousel/Carousel'
import Content  from '../commons/content/Content'

export default {
    name:"Front",
    components:{
        Carousel,
        Content,

    }
}
</script>

<style lang="scss" scope>
    
</style>