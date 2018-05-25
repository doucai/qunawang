<template>
    <div class="detailheader">
        <router-link v-show="show" tag="div" to="/" class="header-abs">
            <span class="iconfont back-icon">&#xe624;</span>
        </router-link>
        <div class="header-fixd" v-show="!show" :style="opacityStyle">
            <router-link  to="/" class="header-fixd-abs">
                <span class="iconfont back-fixd-icon">&#xe624;</span>
            </router-link>
            <div class="header-tit">
                景点详情
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            show:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods: {
        handleScroll(){
           const pos=document.documentElement.scrollTop;
           if(pos >60){
               let opacity=pos/140
               opacity=opacity>1? 1:opacity
               this.opacityStyle={opacity}
               this.show=false
           }else{
               this.show=true
           }
        }
    },
    activated () {
        // 监听scroll执行handleScroll
        window.addEventListener('scroll',this.handleScroll)
    },
    // 引用了keep-alive后会产生两个生命周期，activated每次页面加载时调用，deactivated每次离开页面时调用
    deactivated () {
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibies.styl"
.header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem 
    height .8rem
    line-height .8rem
    border-radius .4rem
    background rgba(0,0,0,.6)
    text-align center
    .back-icon
        color #ffffff
        font-size .4rem
.header-fixd
    overflow hidden
    width 100%
    height .86rem
    line-height .86rem
    color #fff
    background $bgColor
    font-size .32rem
    color #fff
    position fixed
    left 0 
    top 0
    z-index 5
    display flex
    flex-direction row
    .header-fixd-abs
        display inline-block
        width .8rem 
        height .8rem
        margin-left .2rem
        color #ffffff
    .header-tit
        flex 1
        justify-content  center 
        margin-left 28%
</style>
