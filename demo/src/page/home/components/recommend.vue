<template>
    <div class="recommend">
        <div class="recommend-title">热销推荐</div>
        <ul>
            <router-link tag="li" :to="'/detail/'+item.id" class="item border-bottom" v-for="item of recommed" :key="item.id">
                    <img class="item-img" :src="item.imgUrl" alt="">
                    <div class="item-info">
                        <p class="item-title">{{item.title}}</p>
                        <p class="item-desc">{{item.desc}}</p>
                        <button class="item-btn">查看详情</button>
                    </div>
            </router-link>
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
.item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
        width 1.7rem
        height 1.7rem
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
        .item-btn
            background #ff9300
            padding 0 .2rem
            border-radius .06rem
            margin-top .16rem
            color #ffffff
            line-height .44rem
</style>
