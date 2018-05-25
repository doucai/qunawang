<template>
    <div>
        <div class="banner" @click="gallaryIsshow">
            <img class="banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
                <p class="banner-item">{{sightName}}</p>
                <p class="banner-num">
                    <span class="iconfont">&#xe632;</span>
                    39
                </p>
            </div>
        </div>
        <com-Gallary @close="handleclose" :imgs="imgs" v-show="isshow"></com-Gallary>
    </div>
</template>

<script>
import comGallary from 'common/gallary/gallary'
export default {
    props: {
        sightName:String,
        bannerImg:String,
         
    },
    components: {
        comGallary
    },
    data () {
        return {
            imgs:[
                '//img1.qunarzz.com/sight/p0/1411/4f/146031f0bc5d7e0dd960d3f5bf0c9eca.water.jpg_600x330_6858704b.jpg',
                '//img1.qunarzz.com/sight/p0/1603/9b/9bf694a468dd774490.water.jpg_600x330_208523f8.jpg'
            ],
            isshow:false
        }
    },
    methods: {
        // 显示画廊
        gallaryIsshow(){
            this.isshow=true
        },
        handleclose(){
            // 隐藏画廊
            this.isshow=false
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner 
        overflow hidden
        height 0
        padding-bottom 55%
        position relative
        .banner-img 
            width 100%
        .banner-info
            color #fff
            position absolute
            left 0
            bottom 0
            display flex
            align-items center
            width 100%
            height .6rem
            background rgba(0,0,0,.5)
            .banner-item
                flex 1
                font-size .32rem
                padding 0 .2rem
                height .32rem
                line-height .32rem
            .banner-num
                padding 0 .4rem
                height .32rem
                line-height .32rem
                border-radius .2rem
                font-size .24rem  
</style>
