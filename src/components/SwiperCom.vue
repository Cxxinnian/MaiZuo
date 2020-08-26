<template>
    <div class="swiper-container" :class="cName">
        <div class="swiper-wrapper">
        <!-- 插槽 -->
        <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    export default {
        props: ['cName']
    }
</script>

<style>
</style>