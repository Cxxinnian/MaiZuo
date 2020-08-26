<template>
    <div class="detail-title">
        <i @click="goBack" class="iconfont icon-back"></i>
        <slot></slot>
    </div>
</template>

<script>
export default {
    methods: {
        goBack(){
            // console.log(this)
            // 点击的时候，可以触发自定义事件   <mz-title @change="back"></mz-title>
            this.$emit('change')
        }
    }
}
</script>

<style lang="scss" scoped>
    .detail-title{
        width: 100%;
        height: .44rem;
        background: #fff;
        line-height: .44rem;
        text-align: center;
        position: fixed;
        top: 0;
        z-index: 3;
        transition: opacity 1s linear;
        i{
            position: absolute;
            left: .1rem;
        }
    }
</style>