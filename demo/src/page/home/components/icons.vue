<template>
    <div class="icons">
        <!-- :options="swiperOption" -->
         <swiper >
            <!-- slides -->
            <swiper-slide v-for="(page ,index ) of pages" :kety="index">
                <div class="icon" v-for="item of page" :kety="item.id">
                    <img class="icon-img" :src="item.imgUrl" >
                    <p class="icon-img-content">{{item.content}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    data () {
        return {
          iconList:[
              {
                id:'001',
                content:"景点门票",
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
              },
              {
                id:'002',
                content:"一日游",
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
              },
              {
                id:'003',
                content:"必游榜单",
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'
              },
              {
                id:'004',
                content:"动植物园",
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'
              },
              {
                id:'005',
                content:"踏青赏花",
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png'
              },
              {
                id:'006',
                content:"城市观光",
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png'
              },
              {
                id:'007',
                content:"上海欢乐谷",
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png'
              },
              {
                id:'008',
                content:"Q+精选",
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png'
              },
              {
                id:'009',
                content:"上海迪士尼",
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png'
              }

          ]
        }
    },
    computed: {
        // 多余icon放置在第二页
        pages(){
            const pages=[];
            this.iconList.forEach((item,index) => {
                const page =Math.floor(index/8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            });
            return pages
        }
    }  
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixins.styl';
.icons >>> .swiper-container
    height :0
    padding-bottom :50%
.icons
    height :0
    overflow: hidden
    padding-bottom :50%
    margin-top 0.22rem
    .icon
        float left
        width 25%
        margin-bottom  0.22rem
        .icon-img 
            display block
            width 60%
            margin 0 auto
        .icon-img-content
            height 100%
            text-align center   
            line-height 0.44rem
            height 0.44rem
            color $darkTextColor 
            // 多余内容显示...
            ellipsis()
</style>
