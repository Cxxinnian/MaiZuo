<template>
    <div class="login">
        登录页面
        <button @click='login'>点击登录</button>
    </div>
</template>

<script>
    import {instance2} from '@/utils/http'
    export default {
        methods: {
            // login(){
            //     // 需要携带用户名和密码发送异步请求
            //     setTimeout(() => {
            //         // 登录成功，后端会生成 token 令牌返回给前端
            //         localStorage.setItem("token", '3333.3333.3333.3333')
            //         // 最后路由跳转到 Center
            //         this.$router.push('/center')
            //     }, 2000)
            // }

            login(){
                instance2.post('/api/user/loginin', {
                    username: 'admin',
                    password: 123
                }).then(res => {
                    console.log('login ==> ', res)
                    // 登录成功后，需要将后端返回的 token 令牌放入到本地存储中
                    localStorage.setItem('token', res.token)
                    // 跳转到个人中心
                    this.$router.push('/center')
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style>
</style>