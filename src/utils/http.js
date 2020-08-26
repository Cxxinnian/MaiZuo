import axios from 'axios'
// 关联卖座相关的接口
const instance = axios.create({
    baseURL: 'https://m.maizuo.com',
    timeout: 20000,
    headers: {'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1597722546570315822333953","bc":"310100"}'}
})

// 关联 http://47.104.232.23:3000 的接口
const instance2 = axios.create({
    baseURL: '/info'
})

// 在发送请求之前做拦截
instance2.interceptors.request.use(config => {
    // console.log('config ==> ', config)
    if(localStorage.getItem('token')){
        config.headers['X-Access-Token'] = localStorage.getItem('token')
    }
    return config
})

// 获取数据后，后端给前端进行相应，做一次拦截
// 根据后端返回的不同状态码，进行业务逻辑实现，给前端返回不同的数据内容
instance2.interceptors.response.use(res => {
    if(res.data.flag){  // 后端成功相应结果
        return res.data.data
    }else{
        return Promise.reject('出错了...')
    }
    // console.log('res ==> ', res)
})


export {
    instance,
    instance2
}