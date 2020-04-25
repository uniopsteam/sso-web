<template>
    <span class="thumbnail">
        <a v-bind:href="appitem.redirect_url" v-bind:title="appitem.name" target="_blank">
            <img class="lazy" v-bind:src="appitem.icon_url"  data-src="" v-bind:alt="appitem.name">
        </a>
        <div class="caption">
            <h3>
                <a v-bind:href="appitem.redirect_url" v-bind:title="appitem.name" target="_blank">{{ appitem.name }}<br><small> </small></a>
            </h3>
            <p>{{ appitem.description }}</p>
        </div>
    </span>
</template>

<script>
export default {
    name: "AppItem",
    props:{
        appitem:{
            type: Object,
            default(){
                return {}
            }
        }
    } 
}
</script>


<style lang="scss" scoped>
img {
    width:300px;
    height:150px !important;
}
</style>