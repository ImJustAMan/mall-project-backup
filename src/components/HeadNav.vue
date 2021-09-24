<template>
  <div class='head-nav-wrap'>
    <div class='head-nav-menu'>
      <icon type='menu'></icon>
    </div>
    <div class='head-nav-logo'>
      <img :src='getQiniuImgUrl("logo.png")' alt='振东商城'>
    </div>
  </div>
</template>

<script setup>
import Icon from '@/components/Icon.vue'
import { getQiniuImgUrl } from '@/utils/utils'
</script>

<style lang='scss' scoped>
.head-nav-wrap {
  box-sizing: border-box;
  padding: 0 14px;
  height: 44px;
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 1000;

  & > div {
    height: 100%;
    text-align: center;
  }

  i {
    font-size: 30px;
    color: #333;
  }

  .head-nav-menu {
    width: 40px;
    line-height: 44px;
  }

  .head-nav-logo {
    width: 75px;
    height: 25px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    img {
      vertical-align: middle;
      width: 75px;
      height: 25px;
    }
  }
}
</style>
