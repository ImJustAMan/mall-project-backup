<template>
  <div
    class='custom-radio-wrap'
    @click='$emit("update:modelValue", !modelValue)'
  >
    <div
      class='custom-radio-circle'
      :class='{"checked": modelValue}'
    >
      <icon
        type='check'
        class='custom-radio-check'
      />
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
import Icon from './Icon.vue'

defineProps({
  modelValue: Boolean
})
</script>

<style lang='scss' scoped>
.custom-radio-wrap {
  display: flex;

  .custom-radio-circle {
    line-height: 18px;
    height: 18px;
    width: 18px;
    border: 1px solid #ccc;
    border-radius: 50%;

    .custom-radio-check {
      font-size: 18px;
      vertical-align: baseline;
      color: white;
      display: none;
    }

    &.checked {
      line-height: 17px;
      background-color: #f05151;
      border-color: #f05151;
      position: relative;

      .custom-radio-check {
        display: inline-block;
      }
    }
  }
}
</style>
