<template>
  <ul class="border-1px">
    <router-link
      v-for="nav in navList"
      :key="nav.id"
      :to="nav.path"
      tag="li"
      active-class="active"
    >
      <i class="iconfont" :class="nav.icon"></i>
      {{ nav.title }}
    </router-link>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { id: 1, title: "电影页面", path: "/films", icon: "icon-iconfontplay2" },
        { id: 2, title: "家庭影院", path: "/cinema", icon: "icon-all" },
        { id: 3, title: "个人中心", path: "/center", icon: "icon-account" },
      ],
    };
  },
};
</script>

<style lang='scss' scoped>
  @import '@/stylesheets/border-1.scss';
  ul {
    @include border-top(1px, #666);
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 3;
    width: 100%;
    height: .4rem;
    padding: .05rem;
    // border-top: 1px solid #666;
    background: #fff;
    display: flex;
    li{
      flex: 1;
      font-size: .12rem;;
      text-align: center;
      line-height: .2rem;
      display: flex;
      flex-direction: column;
    }
  }
  .active{
    color: orange;
  }
</style>