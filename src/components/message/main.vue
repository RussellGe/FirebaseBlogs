<template>
  <transition name="message-fade" @before-leave="onClose" @after-leave="$emit('destroy')">
    <div p-2 shadow-lg v-show="visible" :id="id" :class="['message', type && `message--${type}`]" :style="customStyle">
      <div mr-1 :class="[type ? `icon-${type}` : '', type ? `i-carbon-${getTypes(type)}` : '']"></div>
      <span class="message__content">
        {{ message }}
      </span>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue';
import { useTimeoutFn } from '@vueuse/core';

const props = withDefaults(
  defineProps<{
    message: string;
    type: 'info' | 'success' | 'error' | 'warning';
    offset: number;
    zIndex: number;
    duration: number;
    id: string;
    onClose: () => {};
  }>(),
  {
    message: '',
    type: 'info',
    offset: 20,
    zIndex: 1,
    duration: 30000,
  },
);

let stopTimer: (() => void) | undefined = undefined;
const visible = ref(false);
const getTypes = (type: string) => {
  if (type === 'success') return 'checkmark-filled';
  if (type === 'error') return 'close-filled';
  if (type === 'warning') return 'warning-alt-filled';
  if (type === 'info') return 'warning-filled';
};
const customStyle = computed(() => {
  return {
    top: `${props.offset}px`,
    zIndex: props.zIndex,
  };
});

// 组件模板渲染成功后触发
onMounted(() => {
  startTimer();
  visible.value = true;
});

function startTimer() {
  if (props.duration > 0) {
    ({ stop: stopTimer } = useTimeoutFn(() => {
      if (visible.value) close();
    }, props.duration));
  }
}

function clearTimer() {
  stopTimer?.();
}

function close() {
  visible.value = false;
}
</script>
<style lang="less">
.message__closeBtn:focus,
.message__content:focus {
  outline-width: 0;
}
.message {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  position: fixed;
  left: 50%;
  top: 20px;
  color: gray;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  -webkit-transition: opacity 0.3s, top 0.4s, -webkit-transform 0.4s;
  transition: opacity 0.3s, top 0.4s, -webkit-transform 0.4s;
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  transition: opacity 0.3s, transform 0.4s, top 0.4s, -webkit-transform 0.4s;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: white;
}
.message__icon {
  margin-right: 4px;
}
.message__content {
  padding: 0;
  margin: 0;
  font-size: 14px;
  line-height: 1;
  color: black;
}
.message .icon-success {
  color: #67c23a;
}
.message .icon-error {
  color: #f56c6c;
}
.message .icon-info {
  color: #909399;
}
.message .icon-warning {
  color: #e6a23c;
}
.message-fade-enter-from,
.message-fade-leave-to {
  opacity: 0;
  -webkit-transform: translate(-50%, -100%);
  transform: translate(-50%, -100%);
}
</style>
