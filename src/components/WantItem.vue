<template>
 <div class='want-item-wrap'>
   <div class='want-item-img'>

   </div>
   <div class='want-item-info'>
     <div class='want-item-title'>
       {{ want.title }}
     </div>
     <div class='want-item-description'>
      {{ want.description }}
     </div>
     <div class='want-item-bottom'>
       <div class='want-item-price'>
         ￥{{ want.price }}
       </div>
       <div class='want-item-menu'>
         ...
       </div>
     </div>
   </div>
 </div>
</template>

<script setup>
defineProps({
  want: Object
})
</script>

<style lang='scss' scoped>
@use "sass:math";
.want-item-wrap {
  width: 175px;
  border-radius: 5px;
  overflow: hidden;
  float: left;
  break-inside: avoid;
  margin-bottom: 10px;

  @for $i from 1 through 7 {
    &:nth-child(#{$i}) .want-item-img {
      height: max(200 + random($limit: 200), random($limit: 300)) + px;
      background-color: steelblue;
    }
  }

  .want-item-info {
    padding: 7px;
    background-color: #fff;

    .want-item-title {
      font-size: 12px;
      color: #010101;
      margin-bottom: 6px;
    }

    .want-item-description {
      font-size: 9px;
      color: #9f9f9f;
      margin-bottom: 10px;
    }

    .want-item-bottom {
      color: #f00;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      align-items: baseline;

      .want-item-menu {
        font-size: 20px;
      }
    }

  }
}
</style>
