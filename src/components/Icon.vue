<template>
  <i
    :class='innerCls'
    v-bind='$attrs'
  />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true
  }
})

const innerCls = computed(() => [
  'iconfont',
  props.type
])
</script>

<style scoped>
@import "../style/iconfont.css";
i {
  vertical-align: top;
}
</style>
