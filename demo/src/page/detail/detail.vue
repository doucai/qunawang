<template>
    <div>
       <detail-Banner></detail-Banner>
       <detail-Header></detail-Header>
       <div class="contet"></div>
    </div>
</template>

<script>
import detailBanner from "./components/banner"
import detailHeader from "./components/header"
export default {
    name:'detail',
    components: {
        detailBanner,
        detailHeader
    }
}
</script>

<style lang="stylus" scoped>
.contet
    height 100rem
</style>
