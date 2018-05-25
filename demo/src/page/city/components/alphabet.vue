<template>
    <div>
        <ul class="list" >
            <li class="item" :ref="item" @touchstart.prewent="handleTouchstart" @touchmove="handleTouchmove" @touchend="handleTouchend"  @click="btn" v-for="item of letters " :key="item">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        cities:Object
    },
    data () {
        return {
            touchstatus:false,
            timer:NaN
        }
    },
    computed: {
      letters(){
          const letters=[];
          for(let i in this.cities){
              letters.push(i)
          }
          return letters
      }  
    },
    updated () {
      this.startY=this.$refs['A'][0].offsetTop  
    },
    methods: {
        btn(e){
            this.$emit("change",e.target.innerHTML)
        },
        handleTouchstart(){
            this.touchstatus=true
        },
        handleTouchmove(e){
           if(this.touchstatus){
                //函数截流
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer=setTimeout(() => {
                    const touchY=e.touches[0].clientY-79
                    const index=Math.floor((touchY - this.startY) / 20)
                    if(index >= 0 && index<this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
                }, 16);
                
            }
        },
        handleTouchend(){
            this.touchstatus=false
        }
      
    }

}
</script>

<style lang="stylus" scoped>
@import "~styles/varibies.styl"
.list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
        line-height .4rem
        text-align center
        color $bgColor

</style>
