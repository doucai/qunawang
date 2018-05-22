<template>
    <div class="city">
        <city-Header></city-Header>
        <city-Serch></city-Serch>
        <city-List></city-List>
        <city-Alphabet></city-Alphabet>
    </div>
</template>

<script>
import cityHeader from "./components/header"
import citySerch from "./components/serch"
import cityList from "./components/list"
import cityAlphabet from "./components/alphabet"
export default {
    components: {
        cityHeader,
        citySerch,
        cityList,
        cityAlphabet
    }
}
</script>

<style lang="stylus" scoped>

</style>
