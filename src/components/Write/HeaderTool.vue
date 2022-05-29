<script setup lang="ts">
import type { ImageOption } from '~/api/image';
import type { HeaderConfig } from '~/pages/config';
const emit = defineEmits(['setCover', 'showDesc', 'changeTags', 'publish']);
defineProps<{
  images: ImageOption[];
  headerConfig: HeaderConfig;
}>();
const handleSetCover = (url: string) => {
  emit('setCover', url);
};
const showDesc = () => {
  emit('showDesc');
};
const changeTags = (tags: string[]) => {
  emit('changeTags', tags);
};
const publish = () => {
    emit('publish')
}
</script>
<template>
  <div flex px-10 py-10 items-center>
    <Modal>
      <div
        v-if="!headerConfig.imgUrl"
        mx-5
        rounded-xl
        flex
        text-xl
        justify-center
        items-center
        c-gray-500
        px-2
        py-2
        hover:bg-gray-100
        cursor-pointer
      >
        <div i-carbon-image mr-1></div>
        选择背景图片
      </div>
      <template #content>
        <ImageSelects @set-cover="handleSetCover" :imgs="images" />
      </template>
    </Modal>
    <div
      v-if="!headerConfig.showDesc"
      mx-5
      rounded-xl
      flex
      text-xl
      justify-center
      items-center
      c-gray-500
      px-2
      py-2
      hover:bg-gray-100
      cursor-pointer
      @click="showDesc"
    >
      <div i-carbon-harbor mr-1></div>
      添加描述
    </div>
    <Popover>
      <div
        mx-5
        rounded-xl
        flex
        text-xl
        justify-center
        items-center
        c-gray-500
        px-2
        py-2
        hover:bg-gray-100
        cursor-pointer
      >
        <div i-carbon-categories mr-1></div>
        添加标签
      </div>
      <template #popover-menu>
        <TagSelects @change-tags="changeTags" />
      </template>
    </Popover>

    <div @click="publish" mx-5 rounded-xl flex text-xl justify-center items-center c-gray-500 px-2 py-2 hover:bg-gray-100 cursor-pointer>
      <div i-carbon-at mr-1></div>
      发布博客
    </div>
    <div mx-5 rounded-xl flex text-xl justify-center items-center c-gray-500 px-2 py-2 hover:bg-gray-100 cursor-pointer>
      <div i-carbon-camera-action mr-1></div>
      预览博客
    </div>
  </div>
</template>
