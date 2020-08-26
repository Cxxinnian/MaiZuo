<template>
  <div id="app">
    <!--
    <a href="#/films">电影页面</a>
    <a href="#/cinema">家庭影院</a>
    <a href="#/center">用户中心</a>
    -->

    <!--
    <router-link tag='li' to='/films' active-class='active'>电影页面</router-link>
    <router-link tag='li' to='/cinema' active-class='active'>家庭影院</router-link>
    <router-link tag='li' to='/center' active-class='active'>用户中心</router-link>
    -->

    <!--
    <ul>
      <router-link
        v-for='nav in navList'
        :key='nav.id'
        :to='nav.path'
        tag='li'
        active-class='active'
      >{{ nav.title }}</router-link>
    </ul>
    -->

    <Tabbar v-if="$store.state.tabbar.isTabbarShow"></Tabbar>

    <!-- router-view 指定路由切换的位置 -->
    <router-view></router-view>
  </div>
</template>

<script>

import Tabbar from '@/components/Tabbar'

export default {
  name: 'App',
  mounted(){
    // console.log(this)
  },
  components: {
    Tabbar
  }
  // data(){
  //   return {
  //     navList: [
  //       {id:1, title: '电影页面', path: '/films'},
  //       {id:2, title: '家庭影院', path: '/cinema'},
  //       {id:3, title: '个人中心', path: '/center'},
  //     ]
  //   }
  // }
}
</script>

<style lang="scss">
</style>
