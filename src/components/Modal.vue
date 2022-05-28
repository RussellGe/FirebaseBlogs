<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'
</script>
<template>
  <div @click.stop="ShowModal">
    <slot></slot>
  </div>
  <teleport to="main">
    <div
      v-if="showModal.value"
      left-0
      top-0
      flex
      items-center
      justify-center
      overflow-hidden
      absolute
      h="100%"
      w="100%"
      z-1000
    >
    <div v-on-click-outside='HideModal'>
        <slot name="content"></slot>
    </div>
    </div>
  </teleport>
</template>
<style lang="less" scoped></style>
