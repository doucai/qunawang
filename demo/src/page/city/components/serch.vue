<template>
    <div>
        <div class="serch">
            <input class="serch-input" v-model="keyword" type="text" placeholder="输入城市名或拼音">
        </div>

        <div class="serch-content" ref="wrapper2" v-show="keyword">
            <ul >
                <li class="serch-item border-topbottom" @click="handleCity(item.name)" v-for="item of list">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
    props: {
        cities:Object
    },
    data () {
        return {
            keyword:'',
            timer:null,
            list:[]
        }
    },
    methods: {
        handleCity(city){
            this.handleCityBtn(city)
            this.$router.push('/')
        },
        ...mapMutations(['handleCityBtn'])
    },
    watch: {
        // 搜索功能
        keyword(){
            if(this.timer){
                // 函数截流处理
                clearTimeout(this.timer)
            }
            // 若input没有内容了则让下面的为空
            if(!this.keyword){
                this.list=[]
                return this.list
            }
            // 函数截流,取到input值去循环
            this.timer=setTimeout(()=>{
                const reslt=[]
                for(let i in this.cities){
                    this.cities[i].forEach((val) => {
                        if(val.spell.indexOf(this.keyword) > -1 || val.name.indexOf(this.keyword) > -1){
                            reslt.push(val)
                        }
                    });
                }
                this.list=reslt
            },100)
        }
    },
     mounted () {
        // bs引入
       this.scroll = new BScroll(this.$refs.wrapper2)
    },
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibies.styl";
    .serch
        height .72rem
        padding 0 .1rem
        background $bgColor
        position relative
        z-index 5
        .serch-input
            box-sizing border-box
            padding .1rem
            width 100%
            height .62rem
            line-height .62rem
            text-align  center
            border-radius .06rem
            color #666
    .serch-content
        position absolute
        left 0
        top 1.6rem
        right 0 
        bottom 0
        width 100%
        height 18rem
        z-index 2
        background #eee
        .serch-item
            line-height .62rem
            padding .2rem
            color #666666
            background #fff

</style>
