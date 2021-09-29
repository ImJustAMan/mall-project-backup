<template>
  <div class='tabs-wrap'>
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style lang='scss' scoped>
.tabs-wrap {
  padding: 0 21px;
  display: flex;
  justify-content: space-between;
  color: #787c84;
  font-size: 12px;

  :slotted(div) {
    position: relative;

    &.active:after {
      content: '';
      display: block;
      width: 24px;
      height: 3px;
      border-radius: 2px;
      background-color: #ff5000;
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}


</style>
