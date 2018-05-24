<template>
    <div class="wrap">
        <!-- v-if解决初次创建问题 -->
        <swiper :options="swiperOption" v-if="list.length">
            <!-- slides -->
            <swiper-slide v-for="item of list" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'carrousel',
     props: {
        list:Array
    },
    data() {
      return {
        swiperOption: {
            autoplay:true,
            loop:true,
            speed:2000,
            pagination:'.swiper-pagination',
            observeParents:true,
            observer:true,
        }
      }
    }
}
</script>

<style lang='stylus' scoped>
// >>>表示当前页面下的样式不受coped限制
.wrap >>> .swiper-pagination-bullet-active
  background :#fff
.wrap >>> .swiper-container-horizontal 
             .swiper-pagination-bullets
                 margin-bottom .2rem
.wrap
  width: 100%
  height: 0
  overflow: hidden
  background :grayscale
  padding-bottom :27.25%    
  .swiper-slide
   img 
     width: 100%
</style>
