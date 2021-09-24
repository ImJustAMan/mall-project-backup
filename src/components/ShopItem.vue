<template>
  <div class='shop-item-wrap'>
    <div class='shop-item-head'>
      <custom-radio
        v-model='checked'
      />
      <div class='shop-item-name'>
        {{ shopCart.shopName }} >
      </div>
    </div>
    <div class='commodity-group'>
      <commodity-item
        v-for='commodity in shopCart.commodityList'
        :key='commodity.id'
        :commodity='commodity'
        :shop-id='shopCart.id'
      />
    </div>
  </div>
</template>

<script setup>
import CustomRadio from './CustomRadio.vue'
import CommodityItem from './CommodityItem.vue'
import { inject, computed } from 'vue'

const props = defineProps({
  shopCart: Object
})

const selectCommodity = inject('selectCommodity')

const checked = computed({
  get() {
    return props.shopCart.commodityList.every(item => !!item.checked)
  },
  set(v) {
    selectCommodity(v, props.shopCart.id)
  }
})
</script>

<style lang='scss' scoped>
.shop-item-wrap {
  padding: 7px;
  background-color: #fff;
  border-radius: 5px;

  .shop-item-head {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 5px;

    .shop-item-name {
      font-size: 12px;
    }
  }

  .commodity-group {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
}
</style>
