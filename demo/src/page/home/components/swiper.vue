<template>
    <div class="wrap">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
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
    data() {
      return {
        swiperOption: {
				 autoplay:true,
				 loop:true,
         speed:2000,
         pagination:'.swiper-pagination'
				},
				swiperList:[{
					id:'01',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg'
				},
				{
					id:'02',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg'
				},
				{
					id:'03',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/d1/2ba49f4f21ed2102.jpg_750x200_79e641ad.jpg'
				},
				{
					id:'04',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1805/e4/d1086d4c5671aa02.jpg_750x200_60e211cd.jpg'
				}]
      }
    }
}
</script>

<style lang='stylus' scoped>
// >>>表示当前页面下的样式不受coped限制
.wrap >>> .swiper-pagination-bullet-active
  background :#fff
.wrap
  width: 100%
  height: 0
  overflow: hidden
  background :grayscale
  padding-bottom :31.25%    
  .swiper-slide
   img 
     width: 100%
</style>
