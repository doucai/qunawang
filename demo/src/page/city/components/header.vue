<template>
    <div class="header">
        <router-link class="color-fff" to="/">
            <span class="iconfont back-icon">&#xe624;</span>
        </router-link>
        城市选择
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import "~styles/varibies.styl"
    .header
        overflow hidden
        height .86rem
        line-height .86rem
        text-align center
        color #fff
        background $bgColor
        font-size .32rem
        color #fff
        position relative
        z-index 5
        .color-fff
            color #fff
            .back-icon
                position absolute
                left .1rem
                top 0
</style>
