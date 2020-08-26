<template>
    <div>
        <SwiperCom cName="films-banner">
            <div
                class="swiper-slide"
                v-for="banner in banners"
                :key="banner.bannerId"
            >
                <img :src="banner.imgUrl" alt="">
            </div>
        </SwiperCom>
        <div class="nav">
            <router-link active-class="active" :to="{
                name: 'now'
            }">正在热映</router-link>
        <!--
            <router-link :to="{path: '/films/ComingSoon'}">即将上映</router-link>
        -->
            <router-link active-class="active" to='/films/ComingSoon'>即将上映</router-link>
        </div>
        

        <router-view></router-view>
    </div>
</template>

<script>
// import 'swiper/css/swiper.min.css'
import axios from 'axios'
import SwiperCom from '@/components/SwiperCom'
import Swiper from 'swiper'
import {instance} from "@/utils/http"
export default {
    components: {
        SwiperCom
    },
    data(){
        return {
            banners: []
        }
    },
    created(){
        instance.get('/gateway?type=2&cityId=310100&k=7491208', {
            headers: {
                // 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1597722546570315822333953","bc":"310100"}',
                'X-Host': 'mall.cfg.common-banner'
            }
        }).then(res => {
            // console.log(res)
            this.banners = [...res.data.data, {bannerId:333, imgUrl: "https://pic.maizuo.com/usr/movie/463392bf3a2dd33e5f6e2b2fbbe32665.jpg?x-oss-process=image/quality,Q_70"}]
            this.$nextTick(() => {
                new Swiper('.films-banner', {
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                })
            })
        })

        // http.request({
        //     url: 'gateway?type=2&cityId=310100&k=7491208',
        //     headers: {
        //         'X-Host': 'mall.cfg.common-banner'
        //     }
        // }).then(res => {
        //     this.banners = [...res.data.data, {bannerId:333, imgUrl: "https://pic.maizuo.com/usr/movie/463392bf3a2dd33e5f6e2b2fbbe32665.jpg?x-oss-process=image/quality,Q_70"}]
        //     this.$nextTick(() => {
        //         new Swiper('.films-banner', {
        //             loop: true,
        //             pagination: {
        //                 el: '.swiper-pagination'
        //             }
        //         })
        //     })
        // })
    }
}
</script>

<style lang="scss" scoped>
    .nav{
        height: .4rem;
        line-height: .4rem;
        font-size: .14rem;
        display: flex;
        // background: pink;
        justify-content: space-around;
        .active{
            color: orange;
            
        }
    }
    .swiper-slide{
        img{
            width: 100%;
            height: 1.9rem;
        }
    }
    // 圆点
    /deep/ .swiper-pagination-bullet-active{
        background: #fff;
    }
</style>