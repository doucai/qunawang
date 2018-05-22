<template>
    <div>
        <ul class="list" >
            <li class="item" v-for="(item,key) of cities " :key="key">{{key}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        cities:Object
    }

}
</script>

<style lang="stylus" scoped>
@import "~styles/varibies.styl"
.list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
        line-height .4rem
        text-align center
        color $bgColor

</style>
