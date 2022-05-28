<script lang="ts" setup>
const showMene = ref(false);
const showPopover = () => {
  showMene.value = !showMene.value;
};
const content = ref<HTMLDivElement>()
const menu = ref<HTMLDivElement>()
</script>
<template>
  <div class="popover">
    <div ref="menu" v-if="showMene" :style="{top: `-${menu?.getBoundingClientRect().height}px`}" class="menu">
      <slot name="popover-menu">123</slot>
    </div>
    <div ref="content" @click="showPopover">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="less" scoped>
.popover {
  position: relative;
  .menu {
    position: absolute;
  }
}
</style>
