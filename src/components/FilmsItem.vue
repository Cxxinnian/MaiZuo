<template>
    <div class="item">
        <img :src="data.poster" alt="">
        <div class="content">
            <h4>{{ data.name }}</h4>
            <p v-if="type === 'nowplaying'">观众评分 <span class="score">{{ data.grade }}</span></p>
            <!-- <p class="actors">主演：<span v-for="actor in data.actors" :key="actor.name">{{ actor.name}}</span></p> -->
            <p class="actors">主演：<span>{{ data.actors | actorsFilter }}</span></p>
            <p>{{ data.nation}} | {{data.runtime}}分钟</p>
            <p v-if="type === 'comingsoon'">上映时间：{{ data.premiereAt | time}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["data", "type"]
}
</script>

<style lang="scss" scoped>
    .item{
        padding: .1rem .15rem;
        display: flex;
        font-size: .16rem;
        img{
            width: .66rem;
            height: .9rem;
        }
        p{
            margin-top: .045rem;
        }
        .content{
            display: flex;
            flex-direction: column;
            margin-left: .15rem;
            font-size: .13rem;
        }
        .actors{
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 2rem;
            // background: orange;
        }
        .score{
            font-size: .16rem;
            color: orange;
        }
    }
</style>