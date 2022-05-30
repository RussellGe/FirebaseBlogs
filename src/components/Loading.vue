<script lang="tsx" setup>
import * as svgLoading from '~/assets/svg';
import type { StyleValue } from 'vue';
const props = withDefaults(
  defineProps<{
    type: 'balls' | 'bars' | 'beat' | 'bubbles' | 'cylon' | 'spin' | 'spiningDubbles' | 'barsCylon';
    color: `#${string}`;
    size: `${string}px`;
    show: boolean;
  }>(),
  {
    type: 'beat',
    color: '#5ac1dd',
    size: '30px',
    show: false,
  },
);
const svg = computed(() => {
  console.log(props.type);
  return svgLoading[props.type];
});
const loadingStyle = computed((): StyleValue => {
  return {
    fill: props.color,
    width: props.size,
    height: props.size,
  };
});
</script>
<template>
  <div v-if="show" class="vue-loading" v-html="svg" :style="loadingStyle"></div>
</template>
