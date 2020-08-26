<template>
    <div>
        用户中心
    </div>
</template>

<script>
import {instance2} from '@/utils/http'
export default {
    // 组件内的路由守卫
    
    // 进入 center 之前，不能访问其内部的this
    beforeRouteEnter(to, from, next){
        // console.log('beforeRouteEnter..center', this)
        if(localStorage.getItem('token')){
            next()
        }else{
            next('/login')
        }
    },
    created(){
        console.log(1)
       // 进行接口请求，为了检测 token 是否处于失效状态
       instance2({
           method: 'post',
           url: "/api/user/isloginin",
        //    headers: {
        //        'X-Access-Token': localStorage.getItem('token')
        //    }
       }).then(res => {
           console.log('centerRes ==> ', res)
       }).catch(err => {    // token 失效后，跳转到登录页重新登录
           console.log('centerErr ==> ', err)
           this.$router.push('/login')
       })
    }

    // 从 center 离开，可以访问到其内部的this
    // beforeRouteLeave(to, from, next){
    //     console.log('beforeRouteLeave..center', this)
    //     next()
    // }
}
</script>
    
<style>

</style>