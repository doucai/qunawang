<template>
  <div class="hello">
  <Home-Header :city="city"></Home-Header>
  <Home-Swipers :list="swiperList"></Home-Swipers>
  <Home-Icons :list="iconlist"></Home-Icons>
  <Home-Recommend :recommed="recommeds"></Home-Recommend>
  <Home-Weekend :recommed="recommeds"></Home-Weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/header"
import HomeSwipers from "./components/swiper"
import HomeIcons from "./components/icons"
import HomeRecommend from "./components/recommend"
import HomeWeekend from "./components/weekend"
import axios from 'axios'
export default {
  name: 'hello',
  data(){
    return{
      city:'',
      recommeds:[],
      swiperList:[],
      iconlist:[]
    }
  },
  components: {
    HomeHeader,
    HomeSwipers,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo(){
      // 获取本地json
      axios.get('/api/index.json')
      .then(this.getHomeInfoSuss)
    },
    getHomeInfoSuss :function (res){
          if(res.status = 200){
          this.city=res.data.city
          this.recommeds=res.data.recommed
          this.swiperList=res.data.swiperList
          this.iconlist=res.data.iconList
        }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  list-style: none;
}
</style>
