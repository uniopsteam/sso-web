<template>
    <div>
        <tab-control :titles="platform_name_list"  @tabClick="tabClick"></tab-control>
        <app-list :groups="getAppItemList(currentGroup)"></app-list>
    </div>
    
</template>

<script>
import TabControl from '@/components/tabControl/TabControl'
import AppList from '@/components/appLists/AppList'
import { mapGetters } from 'vuex'
export default {
    name: 'Content',
    components:{
        TabControl,
        AppList
    },
    data() {
        return {
            currentGroup:''
        }
    },
    computed:{
        ...mapGetters([
            'platform_name_list',
            'platforms'
        ])
    },
    
    methods:{
        tabClick(item){
            this.currentGroup = item
        },
        getAppItemList(flatformName){
            if(!this.platforms.hasOwnProperty(flatformName)){
                this.platforms[flatformName] = {page:1, list:[]}                  
            }
            if(!this.platforms[flatformName].hasOwnProperty("list")){
                this.platforms[flatformName].list = []
            }
            if(!this.platforms[flatformName].hasOwnProperty("page")){
                this.platforms[flatformName].page = 1            
            }
            return this.platforms[flatformName].list
        }
    },
    
    mounted(){
        this.$store.dispatch('platform/clean_platforms')
        this.$store.dispatch('platform/getPlatforms')
        .then(() => {
        })
        .catch(error => {
            window.console.log("get flatform info error:"+ error)
        })
    }
}
</script>

<style scoped> 

</style>