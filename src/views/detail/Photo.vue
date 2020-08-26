<template>
  <div class="photos">
        <!-- 调用全局 Title 组件 -->
        <!-- <mz-title @change="back">
            <span>剧照</span>
        </mz-title> -->
        <slot></slot>
        <ul>
            <li
                v-for="item in photos"
                :key="item"
            >
                <img :src="item" alt="">
            </li>
        </ul>
  </div>
</template>

<script>
export default {
    // methods: {
    //     back(){
    //         // 希望父组件可以把 isShow 变成 false
    //         // 通过 viewModel 关系链实现了通信
    //         // 通过关系链找到父组件，从而让父组件的 isShow 变成 false
    //         this.$parent.isShow = false
    //     }
    // }
    props: ["photos"]
}
</script>

<style lang="scss" scoped>
    .photos{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0; left: 0;
        background: #fff;
        z-index: 5;
        ul{
            display: flex;
            flex-wrap: wrap;
            padding: .46rem 0 .4rem;
            li{
                width: 33.33%;
                height: 1.24rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>