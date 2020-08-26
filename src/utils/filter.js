import Vue from 'vue'
import moment from 'moment'

// 过滤器添加主演表
Vue.filter("actorsFilter", actors => {
    // console.log(actors)
    return actors.map(item => item.name).join(" ")
})

// 过滤时间
moment.locale('zh-cn')
Vue.filter('time', time => {
    let date = new Date(time * 1000)
    // return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    return moment(date).format('YYYY-MM-DD')
})