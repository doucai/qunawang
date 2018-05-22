<template>
    <div class="city">
        <city-Header></city-Header>
        <city-Serch></city-Serch>
    </div>
</template>

<script>
import cityHeader from "./components/header"
import citySerch from "./components/serch"
export default {
    components: {
        cityHeader,
        citySerch
    }
}
</script>

<style lang="stylus" scoped>

</style>
