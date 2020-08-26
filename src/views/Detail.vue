<template>
    <div class="detail" v-if="filmInfo" style="min-height:8rem">
        <!-- <div class="detail-title" v-title>
            <i class="iconfont icon-back"></i>
            <span>babai</span>
        </div> -->

        <!-- 调用全局 Title 组件 -->
        <mz-title @change="back">
            <span>{{ filmInfo.name }}</span>
        </mz-title>

        <img :src="filmInfo.poster" alt="" width="100%">
        <div class="filmInfo-con">
            <h4>{{ filmInfo.name }} {{ filmInfo.filmType.name}}</h4>
            <p>{{ filmInfo.category }}</p>
            <p>{{ filmInfo.premiereAt | time}} 上映</p>
            <p>{{ filmInfo.nation }} | {{ filmInfo.runtime }} 分钟</p>
            <p :class="{synopsis:synopsis}" style="height:1.15rem;font-size:.14rem;margin-top:.08rem;transition:height .5s ease;overflow:hidden;">{{ filmInfo.synopsis }}</p>
            <p class="grade">{{ filmInfo.grade}} 分</p>
            <i @click="synopsis = !synopsis" class="iconfont" :class="synopsis ? 'icon-moreunfold' : 'icon-less'"></i>

            <h4 class="title">演职人员</h4>
            <SwiperCom cName='actors'>
                <div
                    class="swiper-slide"
                    v-for="data in filmInfo.actors"
                    :key="data.name"
                >
                    <img class="actor-img" :src="data.avatarAddress" alt="">
                    <p class="actor-name">{{ data.name }}</p>
                    <p class="actor-role">{{ data.role }}</p>
                </div>
            </SwiperCom>

            <h4 @click="isShow=true" class="title">剧照</h4>
            <SwiperCom cName='photos'>
                <div
                    class="swiper-slide"
                    v-for="(data, index) in filmInfo.photos"
                    :key="index"
                >
                    <img class="photo-img" :src="data" alt="">
                </div>
            </SwiperCom>
        </div>
        <!-- 显示剧照页面 -->
        <Photos v-if="isShow" :photos="filmInfo.photos">
            <mz-title @change="back">
                <span>剧照 ({{ filmInfo.photos.length }})</span>
            </mz-title>
        </Photos>
    </div>
</template>

<script>
import {instance} from '@/utils/http'
import SwiperCom from '@/components/SwiperCom'
import Swiper from 'swiper'
import Photos from '@/views/detail/Photo'

// import Vue from 'vue'
// import moment from 'moment'

// moment.locale('zh-cn')
// Vue.filter('time', time => {
//     let date = new Date(time * 1000)
//     // return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
//     return moment(date).format('YYYY-MM-DD')
// })

export default {
    // mounted(){
    //     // 获取 /:id        this.$route.params.id
    //     // 获取 ?title=xxx  this.$route.query.title
    //     // console.log(this)
    //     console.log(this.$route.params.id)
    //     console.log(this.$route.query.title)
    // },
    // props: ['id'],
    // beforeRouteUpdate(to, from, next){
    //     // 在当前路由改变，但是该组件被复用时调用       带有动态参数的路径：foo/1 和 foo/2 之间跳转
    //     // 由于会渲染同样的 foo 组件，因此组件实例会被复用，钩子函数也会在这个情况下被调用
    //     console.log('beforeRouteUpdate..detail')
    //     next()
    // }
    components: {
        SwiperCom,
        Photos
    },
    data(){
        return {
            filmInfo: null,
            synopsis: true,
            isShow: false
        }
    },
    // mounted(){
    //     window.onscroll = function (){
    //         console.log(document.documentElement.scrollTop)
    //     }
    // },
    // beforeDestroy(){
    //     window.onscroll = null;
    // },
    created(){
        instance.get(`/gateway?filmId=${this.$route.params.id}&k=6579078`, {
            headers: {
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(res => {
            // console.log(res)
            this.filmInfo = res.data.data.film
            this.$nextTick(() => {
                new Swiper('.actors', {
                    slidesPerView: 4,
                    spaceBetween: 30
                })
                new Swiper('.photos', {
                    slidesPerView: 2.2,
                    spaceBetween: 5
                })
            })
        })
    },
    methods: {
        back(){
            this.$router.back()
        },
        back2(){
            this.isShow = false
        }
    }
}
</script>

<style lang="scss" scoped>
    .detail{
        padding-bottom: .55rem;
    }
    // .detail-title{
    //     width: 100%;
    //     height: .44rem;
    //     background: #fff;
    //     line-height: .44rem;
    //     text-align: center;
    //     position: fixed;
    //     top: 0;
    //     z-index: 3;
    //     transition: opacity 1s linear;
    //     i{
    //         position: absolute;
    //         left: .1rem;
    //     }
    // }
    .filmInfo-con{
        position: relative;
        padding: .15rem;
        font-size: .13rem;
        color: #797d82;
        h4{
            font-size: .17rem;
            color: black;
        }
        p{
            margin-top: .05rem; 
        }
        .grade{
            position: absolute;
            top: .11rem; right: .15rem;
            color: orange;
            font-size: .16rem;
            font-style: italic;
        }
        i{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
        .synopsis{
            height: .38rem !important;
            transition: height .5s ease;
            margin-top: .08rem;
        }
        .title{
            margin: .15rem 0;
        }
        .actor-img{
            width: .85rem;
            height: 1.21rem;
        }
        .actor-name{
            width: .85rem;
            text-align:center;
            color:black;
        }
        .actor-role{
            width: .85rem;
            text-align:center;
            color:#797d82;
        }
        .photo-img{
            width: 1.5rem;
            height: .94rem;
        }
    }
</style>