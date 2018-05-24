import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let defaultCity = "上海";
try {
    if(localStorage.getItem('city')){
        defaultCity=localStorage.getItem('city')
    }
} catch (error) {
    
}
export default new Vuex.Store({
    state:{
        city:defaultCity
    },
    mutations:{
        handleCityBtn(state,city){
            this.state.city=city
            try {
                localStorage.setItem('city',city)
            } catch (error) {
                
            }
           
        }
    }/* ,
    getters:{
        doubcity(state){
            return state.city
        }
    } */
})