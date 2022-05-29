<script setup lang="ts">
import type { ImageOption } from '~/api/image';
const emit = defineEmits(['setCover']);
defineProps<{
  imgs: ImageOption[];
}>();
const changeImg = (url: string) => {
  emit('setCover', url);
  HideModal();
};
</script>
<template>
  <div w-354 h-150 px-25 py-10 b="2 solid gray-200" shadow-xl bg-white rounded-2xl overflow-scroll class="no-scrollbar">
    <h1 my-10 text-4xl c-gray-700:80>选择封面图片</h1>
    <div flex flex-wrap overflow-scroll class="no-scrollbar">
      <div v-for="item in imgs" :key="item.id">
        <img
          @click="changeImg(item.download_url)"
          rounded-xl
          cursor-pointer
          mx-2
          my-2
          :src="item.download_url"
          alt=""
          w-71
          h-50
        />
        <div ml-5 mb-5>by: {{ item.author }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
