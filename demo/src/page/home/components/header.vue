<template>
  <div class="header">
    <div class="header-left">
        <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe632;</span>
       <input type="text" placeholder=" 请输入内容">
    </div>
    <router-link to="/city">
        <div class="header-right">
        {{this.currentcity}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
    </router-link>
  </div>
</template>

<script>
import { mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({currentcity:'city'}),  
      
    }
  }

</script>

<style lang="stylus" scoped>
@import "~styles/varibies.styl"
  .header  
    display: flex
    height: .86rem
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left 
        width: .64rem
        float: left
        .back-icon
            width: 100%
            display: inline-block
            font-size: 0.2rem
            text-align: center
    .header-input
        flex: 1
        margin: .12rem
        background: #fff
        border-radius: 0.1rem
        color: #888
        line-height: .62rem
        padding-left: .2rem
        input 
            width 80%
            height .5rem
            line-height .5rem
            margin -0.07rem 0 0 0.2rem
            border 0
    .header-right 
        min-width: 1.04rem
        text-align: center
        color #fff
        .arrow-icon
            display: inline-block
            font-size: .24rem
 

</style>
