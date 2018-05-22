<template>
    <div class="city">
        <city-Header></city-Header>
        <city-Serch :cities="cities"></city-Serch>
        <city-List :cities="cities" :hot="hotCities" :letter="changeAlphaString"></city-List>
        <city-Alphabet :cities="cities" @change="changeAlpha"></city-Alphabet>
    </div>
</template>

<script>
import axios from 'axios'
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
    },
    data () {
        return {
        cities:{},
        hotCities:[],
        changeAlphaString:""     
        }
    },
    methods: {
        getCityInfo(){
            axios.get('/api/city.json')
                .then(this.getCitySucc)
        },
        getCitySucc(res){
            if(res.status){
               this.cities=res.data.data.cities
               this.hotCities=res.data.data.hotCities
            }
        },
        changeAlpha(res){
            this.changeAlphaString=res
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>
