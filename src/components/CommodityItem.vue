<template>
 <div class='commodity-item-wrap'>
   <custom-radio
     v-model='checked'
   />
   <div class='commodity-item-img'>

   </div>
   <div class='commodity-item-info'>
     <div class='commodity-item-title'>
       {{ commodity.title }}
     </div>
     <div class='commodity-item-params'>
       {{ params }}
     </div>
     <div class='commodity-item-price'>
       ￥{{ commodity.price }}
     </div>
   </div>
   <div class='commodity-item-num'>
     X 1
   </div>
 </div>
</template>

<script setup>
import CustomRadio from './CustomRadio.vue'
import { computed, inject } from 'vue'

const props = defineProps({
  shopId: Number,
  commodity: Object
})

const params = computed(() => props.commodity.params.join('；'))

const selectCommodity = inject('selectCommodity')

const checked = computed({
  get() {
    return props.commodity.checked
  },
  set(v) {
    selectCommodity(v, props.shopId, props.commodity.id)
  }
})
</script>

<style lang='scss' scoped>
.commodity-item-wrap {
  display: flex;
  align-items: center;
  gap: 7px;

  .commodity-item-img {
    width: 76px;
    height: 89px;
    border-radius: 5px;
    background-color: #8a2be2;
  }

  .commodity-item-info {
    & > div {
      font-size: 12px;
      margin-bottom: 7px;
    }

    .commodity-item-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .commodity-item-params {
      display: inline-block;
      line-height: 23px;
      color: #616161;
      background-color: #d6d6d6;
      text-align: center;
      padding: 0 4px;
    }

    .commodity-item-price {
      text-indent: 8px;
      color: #f60400;
    }
  }

  .commodity-item-num {
    border: 1px solid #5f5f5f;
    border-radius: 5px;
    line-height: 18px;
    text-align: center;
    font-size: 12px;
    padding: 0 3px;
  }
}
</style>
