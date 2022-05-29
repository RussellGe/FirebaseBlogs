//图标
// 文本
import { createVNode, render, VNode } from 'vue';
import type { ComponentPublicInstance } from 'vue';
import Message from './main.vue';

type MessageQueueItem = {
  vm: VNode;
};
let seed = 1;
const instances: MessageQueueItem[] = [];

export function openMessage(message: string, type: 'success' | 'info' | 'warning' | 'error', ...params: any[]) {
  // 动态创建一个DOM容器
  const id = `k-message-container_${seed++}`;
  const container = document.createElement('div');
  container.setAttribute('class', id);
  let verticalOffset = 20;
  instances.forEach(({ vm }) => {
    verticalOffset += (vm.el?.offsetHeight || 0) + 16;
  });
  // verticalOffset += 16;
  const props = {
    message,
    type,
    ...params,
    id,
    offset: verticalOffset,
    onClose: () => {
      close(id);
    },
  };
  //createVNode 用于创建一个虚拟节点 // 参数1 支持组件 // 参数2 表示传递给组件的选项
  const vm = createVNode(Message, props);
  // 把虚拟的节点渲染到页面的DOM中即可
  // render函数的参数
  // 参数一：表示表示需要渲染的内容（虚拟节点）
  // 参数二：表示渲染的目标位置 （DOM元素）
  render(vm, container);
  document.body.appendChild(container.firstElementChild!);
  instances.push({ vm });
  vm.props!.onDestroy = () => {
    render(null, container);
  };
  return {
    close: () => ((vm.component!.proxy as ComponentPublicInstance<{ visible: boolean }>).visible = false),
  };
}

function close(id: string) {
  const idx = instances.findIndex(({ vm }) => {
    return id === vm.component!.props.id;
  });
  if (idx === -1) return;
  const { vm } = instances[idx];
  if (!vm) return;
  const removedHeight = vm.el!.offsetHeight;
  instances.splice(idx, 1);
  const len = instances.length;
  if (len < 1) return;
  for (let i = idx; i < len; i++) {
    const pos = Number.parseInt(instances[i].vm.el!.style['top'], 10) - removedHeight - 16;
    instances[i].vm.component!.props.offset = pos;
  }
}

export default {
  success: (message: string) => {
    return openMessage(message, 'success');
  },
  warning: (message: string) => {
    return openMessage(message, 'warning');
  },
  error: (message: string) => {
    return openMessage(message, 'error');
  },
  info: (message: string) => {
    return openMessage(message, 'info');
  },
};
