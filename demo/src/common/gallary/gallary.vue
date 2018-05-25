<template>
    <div class="gallary" @click="gallaryclick">
        <swiper class="wrapper" :options="swiperOption" >
            <!-- slides -->
            <swiper-slide v-for="(item,index) of imgs" :key="index">
                <img class="wrapper-img" :src="item" alt="">
            </swiper-slide>
            
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    props:{
        imgs:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    data () {
            return {
                swiperOption: {
                loop:true,
                speed:2000,
                pagination:'.swiper-pagination',
                paginationType:'fraction',
                observeParents:true,
                observer:true,
            }
        }
    },
    methods: {
        gallaryclick(){
            this.$emit('close')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .gallary
        display flex
        flex-direction column
        justify-content center
        position fixed
        left 0
        top 0
        right 0
        bottom 0
        background rgb(0,0,0)
        z-index 999
        .wrapper
            overflow hidden
            height 0
            padding-bottom 70%
            width 100%
            .wrapper-img
                width 100%
            .swiper-pagination
                color  #fff

</style>
