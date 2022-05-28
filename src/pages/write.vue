<script setup lang="ts">
import { getImages } from '~/api/image';
import type { ImageOption } from '~/api/image';
import BaseEditor from '~/components/BaseEditor.vue';
import Test1 from '../components/Test.vue';

const images = ref<ImageOption[]>([]);
const currentImage = ref<string>('');
const title = ref<string>('');
const date = ref<number>(new Date().valueOf());
getImages().then((res) => {
  images.value = res.data;
  currentImage.value = images.value[0].download_url;
});

const router = useRouter();
const handleImg = () => {};
</script>

<template>
  <div flex px-10 items-center>
    <Card :preview="true" :title="title" :tags="[]" :img-url="currentImage" :desc="''" :time="date" />
    <div flex px-10>
      <input
        h-15
        v-model="title"
        placeholder="输入文章标题"
        type="text"
        outline="none"
        border-b="2 solid dark:white"
        bg="dark:#121212"
        px-4
        py-2
      />
      <Modal>
        <div ml-10 w-35 rounded-xl flex justify-center items-center c-white h-15 bg-gray-600>选择背景图片</div>
        <template #content>
          <ImageSelects />
        </template>
      </Modal>
    </div>
  </div>
  <BaseEditor px-10 />
</template>
