<template>
  <div class='category-item-wrap'>
    <div class='category-item-img'>
      <img :src='img' :alt='title'>
    </div>
    <div class='category-item-title'>
      {{ title }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: String,
  title: String
})

</script>

<style lang='scss' scoped>
.category-item-wrap {
  font-size: 11px;
  width: 50px;
  margin-right: 40px;

  & > div {
    margin: 0 auto;
  }

  .category-item-img {
    text-align: center;

    img {
      width: 40px;
    }
  }

  .category-item-title {
    text-align: center;
    color: #666;
    line-height: 21px;
  }
}

.category-item-wrap:nth-child(4n) {
  margin: 0;
}
</style>
