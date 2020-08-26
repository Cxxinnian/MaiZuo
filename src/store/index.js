import Vue from 'vue'
import Vuex from 'vuex'
import cinema from './module/cinema'
import tabbar from './module/tabbar'
Vue.use(Vuex)

let store = new Vuex.Store({
    modules: {
        cinema,
        tabbar
    }
})

export default store