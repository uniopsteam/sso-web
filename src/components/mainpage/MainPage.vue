<template>
    <div>
        <nav-bar></nav-bar>
        <carousel></carousel>
        <Footer></Footer>
    </div>
</template>

<script>
import NavBar  from '../commons/navbar/NavBar'
import Carousel  from '../commons/carousel/Carousel'
import Footer  from '../commons/footer/Footer'

export default {
  name: 'Login',
  components:{
    NavBar,
    Carousel,
    Footer
  }
}
</script>

<style lang="css" scope>

</style>