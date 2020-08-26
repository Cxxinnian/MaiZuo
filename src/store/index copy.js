import Vue from 'vue'
import Vuex from 'vuex'
import {instance} from '@/utils/http'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {    // 用来定义vuex所维护的状态
        isTabbarShow: true,
        cinemaList: []
    },
    getters: {
        getCinemaListFive(state){
            return state.cinemaList.slice(0, 5)
        }
    },
    actions: {  // 进行异步请求的方法，做异步操作获取数据
        getCinemaListAction(context){
            instance.get("/gateway?cityId=310100&ticketFlag=1&k=9025292", {
                headers: {
                    'X-Host': 'mall.film-ticket.cinema.list'
                }
            }).then(res => {
                // console.log(res.data)
                // this.cinemaList = res.data.data.cinemas
                // 调用 setCinemaList 方法
                context.commit("setCinemaList", res.data.data.cinemas)
            })
        }
        
    },
    mutations: {
        show(state){
            state.isTabbarShow = true
        },
        hide(state){
            state.isTabbarShow = false
        },
        setCinemaList(state, data){
            state.cinemaList = data
        }
    }
})

export default store