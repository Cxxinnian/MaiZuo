<template>
    <div class="serach">
        <div class="query">
            <input type="text" v-model="searchValue">
            <span>取消</span>
            <div v-show="searchValue">
                <ul>
                    <li
                        v-for="data in searchCinemaData"
                        :key="data.cinemaId"
                    >{{ data.name }}</li>
                </ul>
            </div>
        </div>
        <div v-show="!searchValue">
            <ul>
                <li
                    v-for="data in getCinemaListFive"
                    :key="data.cinemaId"
                >{{ data.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
    data(){
        return {
            searchValue: ""
        }
    },
    computed: {
        ...mapState({
            cinemaList: state => state.cinema.cinemaList,
            // isTabbarShow: state => state.tabbar.isTabbarShow
        }),
        ...mapGetters({
            getCinemaListFive: state => state.cinema.getCinemaListFive
        }),
        // getCinemaListFive(){
        //     return this.$store.state.cinemaList.slice(0, 5)
        // },
        searchCinemaData(){
            return this.cinemaList.filter(item => item.name.toLowerCase().includes(this.searchValue.toLowerCase()))
        }
    },
    created(){
        // console.log(this.$store.state.isTabbarShow)
        // 触发mutation的hide方法
        this.$store.commit("tabbar/hide")
        // console.log("search ==> ", this.$store.state.cinemaList)
        if(this.cinemaList.length === 0){
            this.$store.dispatch("cinema/getCinemaListAction")
        }
    },
    beforeDestroy(){
        this.$store.commit("tabbar/show")
    }
}
</script>

<style>

</style>