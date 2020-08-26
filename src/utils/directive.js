import Vue from 'vue'

Vue.directive('title', {
    // 插入到 DOM 时执行
    inserted(el, binding){
        el.style.opacity = 0
        window.onscroll = function (){
            let top = document.documentElement.scrollTop || document.body.scrollTop
            let value = binding.value || 167
            // console.log(top)
            if(top >= value){
                el.style.opacity = 1
            }else{
                el.style.opacity = 0
            }
        }
    },
    // 解绑
    unbind(){
        window.onscroll = null
    }
})