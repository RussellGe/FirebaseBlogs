<script setup lang="ts">
import { getImages } from '~/api/image';
import type { ImageOption } from '~/api/image';
import BaseEditor from '~/components/BaseEditor.vue';
import Test1 from '../components/Test.vue';
import { usePostStore } from '~/store/posts';
import type { StyleValue } from 'vue';
const PostStore = usePostStore();
const images = ref<ImageOption[]>([]);
const title = ref<string>('');
const date = ref<number>(new Date().valueOf());
const textarea = ref<HTMLDivElement>();
getImages().then((res) => {
  images.value = res.data;
  PostStore.currentImage = images.value[0].download_url;
});
const getStyle = computed((): StyleValue => {
  console.log(textarea.value?.scrollHeight);
  return {
    height: textarea.value?.scrollHeight + 'px' || '88px',
  };
});
const router = useRouter();
const handleImg = () => {};

watchEffect(() => {
  if (title.value.length > 150) {
    title.value = title.value.slice(0, 150);
  }
});
const submit = () => {};
</script>

<template>
  <div px-40>
    <div flex px-10 py-20 items-center>
      <Modal>
        <div ml-10 w-35 rounded-xl flex justify-center items-center c-white h-15 bg-gray-600>选择背景图片</div>
        <template #content>
          <ImageSelects :imgs="images" />
        </template>
      </Modal>
    </div>
    <textarea
      ref="textarea"
      mx-20
      v-model="title"
      text-3xl
      :style="getStyle"
      resize-none
      font-bold
      placeholder="输入文章标题..."
      type="text"
      outline="none"
      bg="dark:#121212"
      px-4
      py-2
    />
    <BaseEditor px-10 />
    <div px-10 py-10 flex>
      <div
        @click="submit"
        w-30
        h-18
        rounded-xl
        mr-10
        flex
        items-center
        justify-center
        c-white
        font-semibold
        bg-gray-600:80
      >
        发布博客
      </div>
      <div w-30 h-18 rounded-xl flex items-center justify-center c-white font-semibold bg-gray-600:80>预览博客</div>
    </div>
  </div>
</template>
