<template>
  <div class="hello">
  <Home-Header></Home-Header>
  <Home-Swipers></Home-Swipers>
  </div>
</template>

<script>
import HomeHeader from "./components/header"
import HomeSwipers from "./components/swiper"
export default {
  name: 'hello',
  components: {
    HomeHeader,
    HomeSwipers
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
