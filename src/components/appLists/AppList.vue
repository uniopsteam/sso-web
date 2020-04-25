<template>
    <div class="wrapper">
        <div class="applist" >
            <app-item class="appitem" v-for="item in groups" :key="item.name" :appitem="item"/>     
        </div>
    </div>
</template>
<script>
import AppItem from '@/components/appLists/AppItem'
import BScroll from 'better-scroll'
export default {
  name: 'applists',
  components:{
      AppItem
  },
  props:{
        groups:{
            type: Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            scroll: null  
        }
    },
    mounted() {
        this.scroll = new BScroll('.wrapper',{})
    },  
}
</script>

<style lang="css" scoped>

.applist {
    display:flex;  
    text-align: center;
    font-size: 15px;
    text-align: center;
    flex-wrap: wrap;
}


.appitem{
    width:250px;
    height:300px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 10px 10px 5px #888888;
    
}
</style>