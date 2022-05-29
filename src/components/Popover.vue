<script lang="ts" setup>
const showMene = ref(false);
const showPopover = () => {
  showMene.value = !showMene.value;
  nextTick(() => {
    leftWidth.value =
      ((content.value?.getBoundingClientRect().width || 0) - (menu.value?.getBoundingClientRect().width || 0)) / 2;
  });
};
const leftWidth = ref(0);
const content = ref<HTMLDivElement>();
const menu = ref<HTMLDivElement>();
</script>
<template>
  <div class="popover">
    <div ref="content" @click="showPopover">
      <slot></slot>
    </div>
    <div
      ref="menu"
      v-show="showMene"
      z-10
      :style="{
        top: `${content?.getBoundingClientRect().height ? content?.getBoundingClientRect().height + 5 : 0}px`,
        left: `${leftWidth}px`,
      }"
      class="menu"
    >
      <slot name="popover-menu"></slot>
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
