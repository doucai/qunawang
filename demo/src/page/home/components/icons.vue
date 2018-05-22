<template>
    <div class="icons">
        <!-- :options="swiperOption" -->
         <swiper :options="swiperOption2">
            <!-- slides -->
            <swiper-slide v-for="(page ,index ) of pages" :key="index">
                <div class="icon" v-for="item of page" :kety="item.id">
                    <img class="icon-img" :src="item.imgUrl" >
                    <p class="icon-img-content">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    props: {
        list:Array
    },
    data () {
        return {
          swiperOption2:{
              autoplay:false,
              loop:false,
              speed:1000
          }
        }
    },
    computed: {
        // 多余icon放置在第二页
        pages(){
            const pages=[];
            this.list.forEach((item,index) => {
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
