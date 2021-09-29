<template>
  <div class='want-title'>
    你可能还喜欢
  </div>
  <div
    class='want-group'
    ref='want'
  >
    <want-item
      v-for='(want, i) in wantList'
      :key='i'
      :want='want'
    />
  </div>
</template>

<script setup>
import WantItem from './WantItem.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const wantList = ref([])
const want = ref(null)

onMounted(() => {
  axios.get('/getWantList')
    .then(({ data }) => {
      console.log(data)
      wantList.value = wantList.value.concat(data)
    })
  // window.onscroll = throttle((e) => {
  window.onscroll = e => {
    const contentHeight = want.value.clientHeight
    const contentOffSetHeight = want.value.offsetTop
    const windowHeight = document.documentElement.clientHeight || document.body.clientHeight
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const wantPos = contentHeight + contentOffSetHeight - windowHeight - scrollTop + 55
    if (wantPos < 40) {
      axios.get('/getWantList')
        .then(({ data }) => {
          console.log(data)
          wantList.value = wantList.value.concat(data)
        })
    }
  }
  // }, 1000)
})
</script>

<style lang='scss' scoped>
.want-title {
  font-size: 12px;
  color: #f05151;
  text-align: center;
  margin: 15px 0;
  position: relative;

  &:before, &:after {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &:before {
    background: linear-gradient(to left, #f05151, transparent);
    left: 72px;
  }

  &:after {
    background: linear-gradient(to right, #f05151, transparent);
    right: 72px;
  }
}

.want-group {
  column-width: 175px;
  column-gap: 9px;
}
</style>
