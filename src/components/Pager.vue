<script setup lang="ts">
import { computed } from 'vue';
export interface PagerConfig {
  total: number;
  pageSize: number;
  current: number;
}

const props = defineProps<{
  config: PagerConfig;
}>();
const emit = defineEmits(['changeCurrent']);
const handleChange = (item: number | string, index: number): void => {
  if (item === props.config.current) return;
  if (item === '...') {
    if (index === 1) {
      emit('changeCurrent', props.config.current - 3);
      return;
    } else {
      emit('changeCurrent', props.config.current + 3);
      return;
    }
  }
  emit('changeCurrent', item);
};
const showTotal = computed(() => {
  const pages = Math.ceil(props.config.total / props.config.pageSize);
  const res = [];
  if (pages <= 9) {
    for (let i = 1; i < pages; i++) {
      res.push(i);
    }
    return res;
  }
  res.push(1);
  if (props.config.current > 5) {
    res.push('...');
    if (props.config.current < pages - 4) {
      for (let i = props.config.current - 2; i < props.config.current + 3; i++) {
        res.push(i);
      }
    } else {
      for (let i = 6; i > 0; i--) {
        res.push(pages - i);
      }
    }
  } else {
    for (let i = 2; i < 8; i++) {
      res.push(i);
    }
  }
  if (props.config.current < pages - 4) {
    res.push('...');
  }
  res.push(pages);
  return res;
});
const handleLeft = () => {
  if (props.config.current > 1) {
    emit('changeCurrent', props.config.current - 1);
  }
};
const handleRight = () => {
  if (props.config.current < Math.ceil(props.config.total / props.config.pageSize)) {
    emit('changeCurrent', props.config.current - 1);
  }
};
</script>
<template>
  <div class="pager">
    <div class="left" @click="handleLeft"><IconFont type="iconglobal_03_action_xiangzuo_line" /></div>
    <span
      v-for="(item, index) in showTotal"
      :key="item"
      class="pager-number"
      :class="[item === config.current ? 'pager-number-focus' : '']"
      @click="handleChange(item, index)"
      >{{ item }}</span
    >
    <div class="right" @click="handleRight"><IconFont type="iconglobal_03_action_xiangzuo_line" /></div>
  </div>
</template>
<style scoped lang="less">
.pager {
  display: flex;
  align-items: center;
  .left {
    font-size: 16px;
    color: #0c62fa;
    margin-right: 44px;
    cursor: pointer;
  }
  .right {
    font-size: 16px;
    transform: rotate(180deg);
    color: #0c62fa;
    margin-left: 44px;
    cursor: pointer;
  }
  .pager-number {
    width: 22px;
    height: 22px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    margin-right: 5px;
  }
  .pager-number-focus {
    border-radius: 50%;
    background: #1f2329;
    color: white;
  }
  .pager-number:hover {
    border-radius: 50%;
    cursor: pointer;
    background: #1f2329;
    color: white;
  }
}
</style>
