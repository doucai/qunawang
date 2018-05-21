<template>
    <div class="recommend">
        <div class="recommend-title">周末去哪</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommed" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        recommed:Array
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixins.styl';
.recommend-title
    height .8rem
    line-height .8rem
    background #eee
    text-indent .4rem
.item-img
    width 100%
    padding .1rem
.item-info
    flex 1
    min-width 0
    padding .1rem
    .item-title
        line-height .54rem
        font-size .32rem
        ellipsis ()
    .item-desc
        line-height .4rem
        color #ccc
        ellipsis ()
</style>
