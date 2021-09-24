<template>
  <div class='headline-item-wrap'>
    <div class='headline-item-type'>
      {{ type }}
    </div>
    <div class='headline-item-content'>
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadlineItem',
  props: {
    type: String,
    content: String
  }
}
</script>

<style lang='scss' scoped>
.headline-item-wrap {
  line-height: 17px;

  & > div {
    display: inline-block;
    vertical-align: middle;
  }

  .headline-item-type {
    width: 24px;
    height: 12px;
    line-height: 12px;
    border: 1px solid #ff8d01;
    color: #ff8d01;
    border-radius: 2px;
    font-size: 10px;
    text-align: center;
    margin-right: 3px;
  }

  .headline-item-content {
    color: #B1B1B1;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 192px;
  }
}
</style>
