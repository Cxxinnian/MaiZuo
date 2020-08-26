<template>
    <div class="cinema">
        <div class="title">
            <div class="left">上海</div>
            <div class="center">影院</div>
            <div class="right"><i class="iconfont icon-search"  @click="toSearch"></i></div>
        </div>
        <div class="select">
            <div @click="isAreaShow=!isAreaShow" :class="isAreaShow?'active':''">{{ currentArea }}</div>
            <div>APP订票</div>
            <div>最近去过</div>
        </div>
        <!-- 地址 -->
        <div class="area" v-show="isAreaShow">
            <ul>
                <li
                    v-for="data in cinemaArea"
                    :key="data"
                    @click="currentArea=data; isAreaShow=false"
                    :class="{active:data===currentArea}"
                >{{ data }}</li>
            </ul>
        </div>
        <!-- 影院数据 -->
        <div class="cinemaList">
            <ul>
                <li
                    v-for="data in filterCinemaArea"
                    :key="data.cinemaId"
                >
                    <h4>{{ data.name }}</h4>
                    <p>{{ data.address }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {instance} from '@/utils/http'
import {mapState} from 'vuex'
export default {
    methods: {
        toSearch(){
            this.$router.push("./cinema/search")
        }
    },
    data(){
        return {
            // cinemaList: [],     // 影院列表
            isAreaShow: false,  // 默认不显示地区
            currentArea: "全城"
        }
    },
    computed: {
        // ...mapState("cinema", ["cinemaList","isTabbarShow"]),
        // 获取所有的区域
        cinemaArea(){
            console.log(this.isTabbarShow)
            console.log(this.cinemaList)
            let newArr = this.cinemaList.map(item => item.districtName)
            // 数组去重
            // console.log("newArr ==> ",Array.from(new Set(newArr)))
            // return Array.from(new Set(newArr))
            return [ "全城", ...Array.from(new Set(newArr))]
        },
        // 点击不同的区域，显示不同区域的影院
        filterCinemaArea(){
            if(this.currentArea === "全城") return this.cinemaList
            return this.cinemaList.filter(item => {
                if(item.districtName === this.currentArea){
                    return true
                }
                return false
            })
        },
        ...mapState({
            cinemaList: state => state.cinema.cinemaList,
            isTabbarShow: state => state.tabbar.isTabbarShow
        })
    },
    created(){
        
        // instance.get("/gateway?cityId=310100&ticketFlag=1&k=9025292", {
        //     headers: {
        //         'X-Host': 'mall.film-ticket.cinema.list'
        //     }
        // }).then(res => {
        //     console.log(res.data)
        //     this.cinemaList = res.data.data.cinemas
        // })

        // console.log(this.$store)
        // 可以通过 this.$store.dispatch 方法去触发vuex的action方法
        if(this.cinemaList.length){
        }else{
            this.$store.dispatch("cinema/getCinemaListAction")
        }
    }
}
</script>

<style lang="scss" scoped>
    .area{
        position: fixed;
        top: .93rem; left: 0;
        z-index: 2;
        width: 94.67%;
        padding: .1rem;
        background: #fff;
        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                width: 22%;
                height: .3rem;
                background: #fff;
                line-height: .3rem;
                text-align: center;
                border: 1px solid rgba(210, 214, 220, .5);
                border-radius: .03rem;
                margin: 1.2%;
                font-size: .12rem;
                color: #797d82;
                &.active{
                    border-color: orange;
                }
            }
        }
    }
    .title{
        width: 92%;
        height: .44rem;
        display: flex;
        position: fixed;
        top: 0; left: 0;
        line-height: .44rem;
        background: #fff;
        padding: 0 .15rem;
        z-index: 1;
        div{
            flex: 1;
        }
        .left{
            text-align: left;
            font-size: .14rem;
        }
        .right{
            text-align: right;
        }
        .center{
            text-align: center;
        }
    }
    .select{
        position: fixed;
        top: .44rem; left: 0;
        width: 100%;
        height: .49rem;
        display: flex;
        background: #fff;
        z-index: 1;
        .active{
            color: orange;
        }
        div{
            flex: 1;
            text-align: center;
            line-height: .49rem;
            font-size: .13rem;
        }
    }
    .cinemaList{
        position: relative;
        top: .93rem; left: 0;
        li{
            width: 70%;
            padding: .15rem;
            // background: chocolate;
            h4{
                font-size: .14rem;
                color: #191a1b;
                margin-bottom: .05rem;
            }
            p{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: .14rem;
                color: #797d82;
            }
        }
    }
</style>