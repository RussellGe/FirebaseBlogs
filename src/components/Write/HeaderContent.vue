<script setup lang="ts">
import type { HeaderConfig } from '~/pages/config';
const title = ref<string>('');
const desc = ref<string>('');
const emit = defineEmits(['changeTop', 'clearImage', 'clearDesc', 'changeTitle', 'changeDesc'])
defineProps<{
  headerConfig: HeaderConfig;
}>();
watchEffect(() => {
  if (title.value.length > 150) {
    title.value = title.value.slice(0, 150);
  }
  emit('changeTitle', title.value)
});
watchEffect(() => {
    if (desc.value.length > 300) {
    desc.value = desc.value.slice(0, 300);
  }
  emit('changeDesc', desc.value)
})
const changeTop = () => {
    emit('changeTop')
}
const clearImage = () => {
    emit('clearImage')
}
const clearDesc = () => {
    emit('clearDesc')
    desc.value = ''
}
</script>
<template>
  <div v-if='headerConfig.imgTop && headerConfig.imgUrl' relative mb-5>
    <p w='100%' h-0 overflow-hidden pb='50%'>
        <img w="100%" object-fit :src="headerConfig.imgUrl" alt="" />
        <div flex absolute top-5 right-5>
      <div
        @click="ShowModal()"
        flex
        justify-center
        items-center
        w-15
        h-12
        mr-5
        bg-gray-200:80
        rounded-xl
        hover:bg-white:90
      >
        <div text-xl i-carbon-arrow-left></div>
      </div>
      <div @click="changeTop" flex justify-center items-center w-15 h-12 mr-5 bg-gray-200:80 rounded-xl hover:bg-white:90>
        <div text-xl i-carbon-arrows-vertical></div>
      </div>
      <div @click="clearImage" flex justify-center items-center w-15 h-12 mr-5 bg-gray-200:80 rounded-xl hover:bg-white:90>
        <div text-xl i-carbon-close></div>
      </div>
    </div>
    </p>
    
  </div>
  <div relative px-10 py-2 text-3xl font-bold>
    <pre invisible block min-h-22 overflow-hidden b-0 whitespace-pre-wrap break-words>{{ title }}</pre>
    <textarea
      absolute
      top-0
      left-0
      w="100%"
      px-10
      py-2
      ref="textarea"
      v-model="title"
      text-3xl
      h="100%"
      resize-none
      font-bold
      placeholder="输入文章标题..."
      type="text"
      outline="none"
      bg="dark:#121212"
    />
  </div>
  <div v-if='headerConfig.showDesc' relative px-10 py-2 text-xl font-semibold>
      <div @click="clearDesc" flex justify-center items-center w-12 h-8 hover:bg-gray-500:80 rounded-xl absolute top-2 right--5 hover:c-white>
          <div font-semibold text-xl i-carbon-close></div>
      </div>
    <pre invisible block min-h-22 overflow-hidden b-0 whitespace-pre-wrap break-words>{{ desc }}</pre>
    <textarea
      absolute
      top-0
      left-0
      w="100%"
      px-10
      py-2
      ref="textarea"
      v-model="desc"
      text-xl
      h="100%"
      resize-none
      font-semibold
      placeholder="添加文章描述（可选）"
      type="text"
      outline="none"
      bg="dark:#121212"
    />
  </div>
  <div v-if='!headerConfig.imgTop && headerConfig.imgUrl' relative mb-5>
    <p w='100%' h-0 overflow-hidden pb='50%'>
        <img w="100%" object-fit :src="headerConfig.imgUrl" alt="" />
        <div flex absolute top-5 right-5>
      <div
        @click="ShowModal()"
        flex
        justify-center
        items-center
        w-15
        h-12
        mr-5
        bg-gray-200:80
        rounded-xl
        hover:bg-white:90
      >
        <div text-xl i-carbon-arrow-left></div>
      </div>
      <div @click="changeTop" flex justify-center items-center w-15 h-12 mr-5 bg-gray-200:80 rounded-xl hover:bg-white:90>
        <div text-xl i-carbon-arrows-vertical></div>
      </div>
      <div @click="clearImage" flex justify-center items-center w-15 h-12 mr-5 bg-gray-200:80 rounded-xl hover:bg-white:90>
        <div text-xl i-carbon-close></div>
      </div>
    </div>
    </p>
    
  </div>
</template>
