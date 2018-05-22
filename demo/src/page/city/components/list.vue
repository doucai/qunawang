<template>
    <div class="list">
       <div>
           <div class="area">
           <div class="title border-topbottom">当前城市</div>
           <div class="btn-list">
               <div class="btn-wrap">
                   <div class="btn">北京</div>
               </div>
               <div class="btn-wrap">
                   <div class="btn">北京</div>
               </div>
               <div class="btn-wrap">
                   <div class="btn">北京</div>
               </div>
               <div class="btn-wrap">
                   <div class="btn">北京</div>
               </div>
               <div class="btn-wrap">
                   <div class="btn">北京</div>
               </div>
               <div class="btn-wrap">
                   <div class="btn">北京</div>
               </div>
               <div class="btn-wrap">
                   <div class="btn">北京</div>
               </div>
           </div>
       </div>
       <div class="area">
           <div class="title border-topbottom">热门城市</div>
           <div class="btn-list">
               <div class="btn-wrap">
                   <div class="btn">北京</div>
               </div>
               <div class="btn-wrap">
                   <div class="btn">北京</div>
               </div>
               <div class="btn-wrap">
                   <div class="btn">北京</div>
               </div>
               <div class="btn-wrap">
                   <div class="btn">北京</div>
               </div>
               <div class="btn-wrap">
                   <div class="btn">北京</div>
               </div>
               <div class="btn-wrap">
                   <div class="btn">北京</div>
               </div>
               <div class="btn-wrap">
                   <div class="btn">北京</div>
               </div>
           </div>
       </div>
       <div class="area">
           <div class="title border-topbottom">A</div>
           <div class="item-list">
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
           </div>

           <div class="title border-topbottom">b</div>
           <div class="item-list">
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
           </div>

           <div class="title border-topbottom">c</div>
           <div class="item-list">
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
           </div>

           <div class="title border-topbottom">d</div>
           <div class="item-list">
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
           </div>


           <div class="title border-topbottom">E</div>
           <div class="item-list">
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
               <div class="item border-bottom">阿拉尔</div>
           </div>
       </div>
       </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    mounted () {
        // bs引入
        const wrapper = document.querySelector('.list')
        const scroll = new BScroll(wrapper)
    }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibies.styl"
    .border-topbottom
        &:before
            border-color #cccccc
        &:after
            border-color #ccc  
    .border-bottom
        &:before
            border-color #cccccc
.list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0

    .title
        line-height .54rem
        background #eeeeee
        padding-left .2rem
        color #666666
        font-size .26rem
    .btn-list
        padding .1rem
        overflow hidden
        padding .1rem .6rem .1rem .1rem
        .btn-wrap
            float left
            width 33.33%
            .btn
                margin .1rem
                text-align center
                border .02rem solid #ccc
                padding .1rem 0
                border-radius .1rem
    .item-list
        .item
            line-height .76rem
            padding-left .2rem
</style>
