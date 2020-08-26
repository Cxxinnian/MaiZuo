<template>
    <div>
        <!--
        <ul>
            <li @click="toDetail(1)">详情页1</li>
            <li @click="toDetail(2)">详情页2</li>
            <router-link to='/detail/3?title=详情3' tag='li'>详情页3</router-link>
        </ul>
        -->
        <ul>
            <router-link
                v-for="data in dataList"
                :key="data.filmId"
                tag="li"
                :to="'/detail/' + data.filmId"
            >
                <FilmsItem :data="data" type="nowplaying"></FilmsItem>
                <!-- <img :src="data.poster" alt="">
                <div class="content">
                    <h4>{{ data.name }}</h4>
                    <p>观众评分 <span class="score">{{ data.grade }}</span></p>
                    <p class="actors">主演：<span>{{ data.actors | actorsFilter }}</span></p>
                    <p>{{ data.nation}} | {{data.runtime}}分钟</p>
                </div> -->
            </router-link>
        </ul>
    </div>
</template>

<script>
import { instance } from "@/utils/http"
import FilmsItem from "@/components/FilmsItem"

// 过滤器添加主演表
// import Vue from 'vue'
// Vue.filter("actorsFilter", actors => {
//     console.log(actors)
//     return actors.map(item => item.name).join(" ")
// })
export default {
    // methods: {
    //   // 编程式导航跳转
    //   toDetail(id) {
    //     // console.log(this)
    //     this.$router.push('/detail/' + id)
    //   },
    // },
    components: {
        FilmsItem
    },
    data(){
        return{
            dataList: []
        }
    },
    created(){
        instance.get("/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=6819827", {
            headers: {
                "X-Host": "mall.film-ticket.film.list"
            }
        }).then((res) => {
            // console.log(res)
            this.dataList = res.data.data.films
        })
    }
}
</script>

<style lang="scss" scoped>
    ul{
        padding-bottom: .55rem;
    }
    // /deep/ li{
    //     padding: .1rem .15rem;
    //     display: flex;
    //     font-size: .16rem;
    //     img{
    //         width: .66rem;
    //         height: .9rem;
    //     }
    //     p{
    //         margin-top: .04rem;
    //     }
    //     .content{
    //         display: flex;
    //         flex-direction: column;
    //         margin-left: .15rem;
    //         font-size: .13rem;
    //     }
    //     .actors{
    //         overflow: hidden;
    //         -o-text-overflow: ellipsis;
    //         text-overflow: ellipsis;
    //         white-space: nowrap;
    //         width: 2rem;
    //         // background: orange;
    //     }
    //     .score{
    //         font-size: .16rem;
    //         color: orange;
    //     }
    // }
</style>