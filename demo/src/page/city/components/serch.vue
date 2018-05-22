<template>
    <div class="serch">
        <input class="serch-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibies.styl";
    .serch
        height .72rem
        padding 0 .1rem
        background $bgColor
        .serch-input
            box-sizing border-box
            padding .1rem
            width 100%
            height .62rem
            line-height .62rem
            text-align  center
            border-radius .06rem
            color #666
</style>
