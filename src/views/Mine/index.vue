<template>
 <div class='mine-wrap'>
   <tabs>
     <div
       v-for='(tab, i) in tabList'
       :class='{"active": i === activeIndex}'
       @click='activeIndex = i'
     >
       {{ tab }}
     </div>
   </tabs>
   <div class='order-group'>
     <order-item/>
     <order-item/>
     <order-item/>
   </div>
   <may-like/>
 </div>
</template>

<script setup>
import Tabs from '@/components/Tabs.vue'
import OrderItem from '@/components/OrderItem.vue'
import MayLike from '@/components/MayLike.vue'
import { ref } from 'vue'

const tabList = [
  "全部",
  "待付款",
  "待发货",
  "待收货",
  "待评价"
]

const activeIndex = ref(0)

</script>

<style lang='scss' scoped>
.mine-wrap {
  padding: 0 8px;
  overflow: hidden;

  .tabs-wrap {
    margin: 16px 0 28px;
  }
}
</style>
