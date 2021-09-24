<template>
  <div class='recommend-item-wrap'>
    <div class='recommend-item-img'/>
    <div class='recommend-item-text'>
      <div class='recommend-item-title'>
        {{ title }}
      </div>
      <div class='recommend-item-content'>
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendItem',
  props: {
    backgroundImg: String,
    title: String,
    content: String
  }
}
</script>

<style lang='scss' scoped>
.recommend-item-wrap {
  width: 125px;

  .recommend-item-img {
    width: 125px;
    height: 125px;
    position: relative;

    &:after {
      width: 30px;
      height: 14px;
      line-height: 14px;
      content: 'HOT';
      display: block;
      font-size: 9px;
      text-align: center;
      color: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #E93E5A;
      border-radius: 0 7px 0 0;
    }
  }

  .recommend-item-text {
    border-right: 1px solid #f1f1f1;
    padding: 10px;

    .recommend-item-title {
      font-size: 14px;
    }

    .recommend-item-content {
      font-size: 12px;
      color: #999;
    }
  }

  &:nth-child(1) {
    .recommend-item-img {
      background-color: cyan;
    }
  }

  &:nth-child(2) {
    .recommend-item-img {
      background-color: steelblue;
    }
  }

  &:nth-child(3) {
    .recommend-item-img {
      background-color: lawngreen;
    }

    .recommend-item-text {
      border: none;
    }
  }
}
</style>
