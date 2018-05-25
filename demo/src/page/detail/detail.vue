<template>
    <div>
       <detail-Banner :sightName="sightName" :bannerImg="bannerImg"></detail-Banner>
       <detail-Header></detail-Header>
       <detail-List   :categoryList="categoryList" :gallaryImgs="gallaryImgs"></detail-List>
       <div style="height:112rem">
           
       </div>
    </div>
</template>

<script>
import detailBanner from "./components/banner"
import detailHeader from "./components/header"
import detailList from "./components/list"
import Axios from 'axios';
export default {
    name:'detail',
    components: {
        detailBanner,
        detailHeader,
        detailList
    },
    data () {
        return {
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            categoryList:[]
        }
    },
    methods:{
        getHomeInfo(){
        // 获取本地json
        Axios.get('/api/detail.json',{
            params:{
                id:this.$route.params.id
            }
        })
        .then(this.getHomeInfoSuss)
        },
        getHomeInfoSuss :function (res){
            if(res.status = 200){
            this.sightName=res.data.data.sightName
            this.bannerImg=res.data.data.bannerImg
            this.categoryList=res.data.data.categoryList
            this.gallaryImgs=res.data.data.gallaryImgs
            }
        }
    },
    activated () {
        this.getHomeInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>
