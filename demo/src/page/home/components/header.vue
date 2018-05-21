<template>
  <div class="header">
    <div class="header-left">
        <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe632;</span>
       <input type="text" placeholder=" 请输入内容">
    </div>
    <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
  export default {
      props: {
          city:String
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
            height .62rem
            line-height .62rem
            margin -0.07rem 0 0 0.2rem
            border 0
    .header-right 
        width: 1.24rem
        text-align: center
        .arrow-icon
            display: inline-block
            font-size: .24rem
 

</style>
