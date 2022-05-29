<script setup lang="ts">
import { getImages } from '~/api/image';
import type { ImageOption } from '~/api/image';
import BaseEditor from '~/components/BaseEditor.vue';
import Test1 from '../components/Test.vue';
import { usePostStore } from '~/store/posts';
import type { StyleValue } from 'vue';
import type { HeaderConfig } from './config';

const PostStore = usePostStore();

const images = ref<ImageOption[]>([]);

const textarea = ref<HTMLDivElement>();

const headerConfig = ref<HeaderConfig>({
  imgUrl: '',
  tags: [],
  imgTop: false,
  showDesc: false
});

getImages().then((res) => {
  images.value = res.data;
  PostStore.currentImage = images.value[0].download_url;
});

const showHeight = ref(88);

const getStyle = computed((): StyleValue => {
  return {
    height: showHeight.value + 'px' || '88px',
  };
});

const showScroll = () => {
  console.log(textarea.value?.scrollHeight);
  if (showHeight.value !== textarea.value?.scrollHeight) {
    showHeight.value = textarea.value?.scrollHeight || 88;
  }
};
const handleSetCover = (url: string) => {
  headerConfig.value.imgUrl = url;
};
const changeTop = () => {
  headerConfig.value.imgTop = !headerConfig.value.imgTop
}
const clearImage = () => {
  headerConfig.value.imgUrl = ''
}
const clearDesc = () => {
  headerConfig.value.showDesc = false
}
const showDesc = () => {
  headerConfig.value.showDesc = true
}
const submit = () => {};
</script>

<template>
  <div px-80>
    <HeaderTool @show-desc="showDesc" @set-cover="handleSetCover" :headerConfig="headerConfig" :images="images" />
    <HeaderContent @clear-desc="clearDesc" @change-top="changeTop" @clear-image="clearImage" :headerConfig="headerConfig" />
    <BaseEditor mb-20/>
  </div>
</template>
