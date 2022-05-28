<script setup lang="ts">
import type { ImageOption } from '~/api/image';
import { usePostStore } from '~/store/posts';
const PostStore = usePostStore()
defineProps<{
  imgs: ImageOption[];
}>();
const changeImg = (url: string) => {
    PostStore.currentImage = url
    HideModal()
}
</script>
<template>
  <div w-350 h-150  px-25 py-10 bg-black:70 rounded-2xl overflow-scroll class="no-scrollbar">
      <h1 my-10 text-4xl c-white>选择封面图片</h1>
      <div flex flex-wrap overflow-scroll  class="no-scrollbar">
          <img @click="changeImg(item.download_url)" rounded-xl v-for="item in imgs" cursor-pointer mx-2 my-2 :key="item.id" :src="item.download_url" alt="" w-71 h-50 />
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
