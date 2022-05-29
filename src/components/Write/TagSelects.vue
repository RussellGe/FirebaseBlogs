<script setup lang="ts">
const tagList = ref<string[]>([]);
const tagInput = ref('');
const emit = defineEmits(['changeTags']);
const handleEnter = () => {
  if (tagList.value.includes(tagInput.value)) {
    tagList.value.splice(tagList.value.indexOf(tagInput.value), 1);
  } else {
    tagList.value.push(tagInput.value);
  }
  tagInput.value = '';
  emit('changeTags', tagList.value);
};
const handleRemove = (tag: string) => {
  tagList.value.splice(tagList.value.indexOf(tagInput.value), 1);
};
</script>
<template>
  <div w-150 h-80 b="1 solid gray-200" bg-white py-4 px-6 shadow-xl z-100>
    <div text-xl font-semibold mb-5 c-gray-600 flex justify-between items-center>添加标签:</div>
    <div p-2 text-base flex flex-wrap w-138 b="1 solid gray-200">
      <div flex items-center bg-gray-200 mr-2 mb-2 p-1 rounded v-for="tag in tagList">
        {{ tag }}
        <div i-carbon-close @click="handleRemove(tag)"></div>
      </div>
      <input @keypress.prevent.enter="handleEnter" px-1 outline-none type="text" v-model="tagInput" />
    </div>
  </div>
</template>
