<template>
  <div class='cart-wrap'>
    <div class='cart-total'>
      共{{ totalNum }}件宝贝
    </div>
    <div class='shop-group'>
      <shop-item
        v-for='shopCart in shopCartList'
        :key='shopCart.id'
        :shopCart='shopCart'
      />
    </div>
    <div class='cart-want-title'>
      你可能还喜欢
    </div>
    <div class='cart-want-group'>
      <want-item
        v-for='want in wantList'
        :key='want.id'
        :want='want'
      />
    </div>
    <div class='cart-settlement'>
      <custom-radio
        v-model='selectAll'
      >
        <span class='radio-text'>全选</span>
      </custom-radio>
      <div
        v-show='!management'
        class='cart-settlement-total'
      >
        <div class='cart-settlement-price'>
          合计：<span>￥{{ totalPrice }}</span>
        </div>
        <div class='cart-settlement-btn'>
          结算({{ payNum }}件)
        </div>
      </div>
      <div
        v-show='management'
        class='cart-settlement-management'
      >
        删除
      </div>
    </div>
  </div>
</template>

<script setup>
import ShopItem from '@/components/ShopItem.vue'
import CustomRadio from '@/components/CustomRadio.vue'
import WantItem from '@/components/WantItem.vue'
import { computed, onMounted, provide, ref } from 'vue'
import axios from 'axios'

const management = ref(false)
const shopCartList = ref([])
const wantList = ref([])

const totalNum = computed(() => {
  return shopCartList.value.reduce((o, i) => {
    return o + i?.commodityList.reduce((o, i) => o + i.num, 0)
  }, 0) || 0
})
const totalPrice = computed(() => {
  return shopCartList.value.reduce((o, i) => {
    return o + i?.commodityList.filter(item => item.checked).reduce((o, i) => o + i.price, 0)
  }, 0) || 0
})
const payNum = computed(() => {
  return shopCartList.value.reduce((o, i) => {
    return o + i?.commodityList.filter(item => item.checked).reduce((o, i) => o + i.num, 0)
  }, 0) || 0
})

const selectAll = computed({
  get() {
    return shopCartList.value.every(item =>
      item?.commodityList.every(child => !!child.checked)
    )
  },
  set(v) {
    shopCartList.value = shopCartList.value.map(item => ({
      ...item,
      commodityList: item?.commodityList.map(child => ({
        ...child,
        checked: v
      }))
    }))
  }
})

const selectCommodity = (v, shopId, commodityId) => {
  shopCartList.value = shopCartList.value.map(item => {
    if (item?.id === shopId) {
      return {
        ...item,
        commodityList: item?.commodityList.map(child => {
          if (commodityId) {
            return commodityId === child.id ?
              {
                ...child,
                checked: v
              } :
              child
          } else {
            return {
              ...child,
              checked: v
            }
          }
        })
      }
    }
    return item
  })
}

provide('selectCommodity', selectCommodity)

onMounted(() => {
  axios.get('/getShopCartList')
    .then(({ data }) => {
      console.log(data)
      shopCartList.value = data
    })

  axios.get('/getWantList')
    .then(({ data }) => {
      console.log(data)
      wantList.value = data
    })
})
</script>

<style lang='scss' scoped>
.cart-wrap {
  padding: 0 8px 43px;

  .cart-total {
    font-size: 9px;
    line-height: 33px;
    text-indent: 4px;
  }

  .shop-group {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .cart-want-title {
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

  .cart-want-group {
    column-width: 175px;
    column-gap: 9px;
  }

  @at-root .cart-settlement {
    height: 43px;
    background-color: #fff;
    position: fixed;
    bottom: 54px;
    left: 0;
    right: 0;
    box-shadow: 0 0 2px 0 #575a5c;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;

    .cart-settlement-total {
      display: flex;
      align-items: center;

      .cart-settlement-price {
        font-size: 9px;
        margin-right: 8px;

        span {
          color: #f60400;
        }
      }

      .cart-settlement-btn {
        width: 70px;
        height: 30px;
        color: #fff;
        font-size: 9px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        background: linear-gradient(to left, #F60200, #FF7C00);
      }
    }

    .cart-settlement-management {
      width: 68px;
      height: 28px;
      color: #f60400;
      font-size: 9px;
      line-height: 28px;
      border-radius: 15px;
      text-align: center;
      border: 1px solid #f60400;
    }
  }
}

.radio-text {
  margin-left: 4px;
  font-size: 9px;
  line-height: 20px;
}
</style>
