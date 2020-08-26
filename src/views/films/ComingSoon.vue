<template>
    <div>
        <ul>
            <router-link
                v-for="data in dataList"
                :key="data.filmId"
                tag="li"
                to="/detail/1"
            >
            <FilmsItem :data="data" type="comingsoon"></FilmsItem>
                <!-- <img :src="data.poster" alt="">
                <div class="content">
                    <h4>{{ data.name }}</h4>
                    <p class="actors">主演：<span>{{ data.actors | actorsFilter }}</span></p>
                    <p>{{ data.nation}} | {{data.runtime}}分钟</p>
                    <p>上映时间：</p>
                </div> -->
            </router-link>
        </ul>
    </div>
</template>

<script>
import {instance} from '@/utils/http'
import FilmsItem from '@/components/FilmsItem'
export default {
    components: {
        FilmsItem
    },
    data(){
        return {
            dataList: []
        }
    },
    created(){
        instance.get('/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=9541990', {
            headers: {
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            // console.log(res)
            this.dataList = res.data.data.films
        })
    }
}
</script>

<style lang="scss" scoped>
    // /deep/ 
    ul{
        padding-bottom: .55rem;
    }
</style>