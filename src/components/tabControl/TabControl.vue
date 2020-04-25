<template>
    <div class="tab-control">
        <div v-for="item in titles" :key="item.name" 
             class="tab-control-item" :class="{active: item === currentName}"
             @click="tabClick(item)">
            <span>{{ item }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "TabControl",
    props:{
        titles:{
            type: Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentName: ''
        }
    },
    computed: {
        
    },
    methods:{
        tabClick(item){
            this.currentName = item
            this.$emit('tabClick', item)
        }
    }
}
</script>

<style lang="css" scoped>
.tab-control{
    display:flex;  
    text-align: center;
    font-size: 15px;
    background-color:#545c64;
    color:#fff;
}

.tab-control-item {
    flex:1;
    height: 50px;
    line-height: 50px;
}
.tab-control-item span{
    padding: 8px;
}
.active {
    color:#ffd04b;
    
}
.active span {
    border-bottom: 3px solid;
}
</style>