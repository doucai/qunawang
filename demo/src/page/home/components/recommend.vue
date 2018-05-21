<template>
    <div class="recommend">
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommed" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            recommed:[
                {
                    id:"001",
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg",
                    title:"上海玛雅海滩水公园",
                    desc:"走进自然或玩转乐园，感知大千世界"
                },
                {
                    id:"002",
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg",
                    title:"上海玛雅海滩水公园",
                    desc:"走进自然或玩转乐园，感知大千世界"
                },{
                    id:"003",
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg",
                    title:"上海玛雅海滩水公园",
                    desc:"走进自然或玩转乐园，感知大千世界"
                },{
                    id:"004",
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg",
                    title:"上海玛雅海滩水公园",
                    desc:"走进自然或玩转乐园，感知大千世界"
                },{
                    id:"005",
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg",
                    title:"上海玛雅海滩水公园",
                    desc:"走进自然或玩转乐园，感知大千世界"
                },{
                    id:"006",
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg",
                    title:"上海玛雅海滩水公园",
                    desc:"走进自然或玩转乐园，感知大千世界"
                },{
                    id:"007",
                    imgUrl:"http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg",
                    title:"上海玛雅海滩水公园",
                    desc:"走进自然或玩转乐园，感知大千世界"
                }
            ]
        }
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
