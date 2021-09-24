<template>
  <div class='bargain-item-wrap'>
    <div class='bargain-item-img'>

    </div>
    <div class='bargain-item-info'>
      <div class='bargain-item-title'>
        宝贝详情内容宝贝详情内容
      </div>
      <div class='bargain-item-price'>
        <span class='bargain-item-discount'>
          ￥69
        </span>
        <span class='bargain-item-original'>
          ￥168
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BargainItem',
  props: {}
}
</script>

<style lang='scss' scoped>
.bargain-item-wrap {
  width: 90px;
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;
  float: left;
  margin-right: 7px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06);

  .bargain-item-img {
    width: 90px;
    height: 90px;
    background-color: #ff8d01;
  }

  .bargain-item-info {
    padding: 3px;

    .bargain-item-title {
      color: #353535;
      font-size: 10px;
      margin-bottom: 10px;
    }

    .bargain-item-price {
      display: flex;
      justify-content: space-between;
      align-items: baseline;

      .bargain-item-discount {
        font-size: 12px;
        color: #ff4343;
      }

      .bargain-item-original {
        font-size: 9px;
        color: #888;
        text-decoration: line-through;
      }
    }
  }
}
</style>
