<template>
  <head-nav />
  <router-view/>
  <tab-bar />
</template>

<script>
import HeadNav from "@/components/HeadNav.vue";
import TabBar from "@/components/TabBar.vue";

export default {
  components: {
    HeadNav,
    TabBar
  }
}
</script>
