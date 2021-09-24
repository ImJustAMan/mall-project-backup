<template>
  <div class='tab-bar-wrap'>
    <router-link
      class='tab-bar-item'
      v-for='tabBar in innerTabBarList'
      :key='tabBar.title'
      :to='tabBar.matchRoute'
    >
      <img
        :src='tabBar.iconType'
        :alt='tabBar.title'
      >
      <span class='tab-bar-title'>
          {{ tabBar.title }}
      </span>
    </router-link>
  </div>
</template>

<script>
const tabBarList = [
  {
    matchRoute: '/',
    iconType: 'home',
    title: '首页'
  },
  {
    matchRoute: '/mall',
    iconType: 'mall',
    title: '商城'
  },
  {
    matchRoute: '/cart',
    iconType: 'cart',
    title: '购物车'
  },
  {
    matchRoute: '/mine',
    iconType: 'mine',
    title: '我的'
  }
]
</script>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getQiniuImgUrl } from '../utils/utils'

const route = useRoute()

const innerTabBarList = computed(() =>
  tabBarList.map(item => ({
    ...item,
    iconType: getQiniuImgUrl(`${item.iconType}${item.matchRoute === route.path ? '_active' : ''}.png`)
  }))
)

</script>

<style lang='scss' scoped>
.tab-bar-wrap {
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  border-top: 1px solid #D2D2D2;
  z-index: 1000;
  padding: 10px 40px;
  padding-bottom: calc(10px + env(safe-area-inset-bottom ));
  display: flex;
  justify-content: space-between;
  align-items: center;

  .tab-bar-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 16px;
    }

    .tab-bar-title {
      color: #353535;
      font-size: 9px;
    }
  }
}
</style>
