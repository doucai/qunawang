<template>
  <div class="hello">
  <Home-Header></Home-Header>
  <Home-Swipers></Home-Swipers>
  <Home-Icons></Home-Icons>
  <Home-Recommend></Home-Recommend>
  <Home-Weekend></Home-Weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/header"
import HomeSwipers from "./components/swiper"
import HomeIcons from "./components/icons"
import HomeRecommend from "./components/recommend"
import HomeWeekend from "./components/weekend"
export default {
  name: 'hello',
  components: {
    HomeHeader,
    HomeSwipers,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
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
