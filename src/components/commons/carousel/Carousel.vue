<template>
    <swiper :options="swiperOption" >
            <swiper-slide v-for="item in backgrounds " class="jumbotron" :style='{ background:"url("+item.picture_url+") no-repeat top", backgroundSize: "100% 100%"}' :key="item.id">
                <div class="container">
                    <h2>{{ item.name}}!</h2>
                    <p>{{ item.description}}</p>
                </div>
            </swiper-slide> 
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapGetters } from 'vuex'

export default {
    name: 'Carousel',
    components: {
        swiper,
        swiperSlide
    },
    computed:{
        ...mapGetters([
            'backgrounds'
        ])
    },
    data(){
        return  {
                    swiperOption: {
                        autoplay: true,
                        speed:3000,
                        autoHeight: true,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }
                    }
                }
    },
    mounted(){
        this.$store.dispatch('background/getBackgrounds')
        .then(() => {

        })
        .catch(error=>{
            window.console.log("get background info error:"+ error)
        })
    }
}
</script>

<style style="scss" scoped> 
.swiper-slide{
        height: 400px;
        width:100%;
        background-size:100%;
}

</style>