import {instance} from '@/utils/http'

const cinema = {
    namespaced: true,
    state: {
        cinemaList: []
    },
    mutations: {
        setCinemaList(state, data){
            state.cinemaList = data
        }
    },
    actions: {
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
    getter: {
        getCinemaListFive(state){
            return state.cinemaList.slice(0, 5)
        }
    }
}

export default cinema