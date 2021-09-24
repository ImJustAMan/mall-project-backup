<template>
  <div class='like-item-wrap'>
    <div class='like-item-img'>

    </div>
    <div class='like-item-info'>
      <div class='like-item-intro'>
        {{ data.intro }}
      </div>
      <div class='like-item-content'>
        <div class='like-item-price'>
          ￥{{ data.price }}
        </div>
        <div class='like-item-pay'>
          {{ data.pay }}人付款
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object
})
</script>

<style lang='scss' scoped>
.like-item-wrap {
  width: 185px;

  .like-item-img {
    height: 185px;
    background-color: steelblue;
  }

  .like-item-info {
    padding: 10px;
    background-color: #fff;

    .like-item-intro {
      font-size: 13px;
      margin-bottom: 20px;
    }

    .like-item-content {
      display: flex;
      justify-content: space-between;
      align-items: baseline;

      .like-item-price {
        font-size: 13px;
        color: #FF5000;
      }

      .like-item-pay {
        font-size: 11px;
        color: #999999;
      }
    }
  }
}
</style>
