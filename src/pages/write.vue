<script setup lang="ts">
import { getImages } from '~/api/image';
import type { ImageOption } from '~/api/image';
import BaseEditor from '~/components/BaseEditor.vue';
import Test1 from '../components/Test.vue';
import { usePostStore } from '~/store/posts';
import type { StyleValue } from 'vue';
import type { HeaderConfig } from './config';
import { openMessage } from '~/components/message/message';
const router = useRouter();
const PostStore = usePostStore();

const images = ref<ImageOption[]>([]);
const tags = ref<string[]>([]);
const textarea = ref<HTMLDivElement>();
const title = ref('');
const desc = ref('');
const blogHtml = ref('');
const headerConfig = ref<HeaderConfig>({
  imgUrl: '',
  tags: [],
  imgTop: false,
  showDesc: false,
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
const changeHtml = (html: string) => {
  blogHtml.value = html;
};
const changeTitle = (text: string) => {
  title.value = text;
};
const changeDesc = (text: string) => {
  desc.value = text;
};
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
  headerConfig.value.imgTop = !headerConfig.value.imgTop;
};
const clearImage = () => {
  headerConfig.value.imgUrl = '';
};
const clearDesc = () => {
  headerConfig.value.showDesc = false;
};
const showDesc = () => {
  headerConfig.value.showDesc = true;
};
const changeTags = (tagList: string[]) => {
  tags.value = tagList;
};
const submit = () => {
  if (!title.value) {
    openMessage('请输入标题', 'error');
    return;
  }
  if (!blogHtml.value) {
    openMessage('文章内容不可为空', 'error');
    return;
  }
  PostStore.setPost({
    tags: tags.value,
    blogTitle: title.value,
    date: new Date().valueOf(),
    blogDesc: desc.value,
    blogCoverPhoto: headerConfig.value.imgUrl || images.value[0].download_url,
    blogHtml: blogHtml.value,
  })
    .then((res) => {
      openMessage('文章发布成功', 'success');
      router.push('/blog');
    })
    .catch((err) => {
      openMessage(`文章发布失败，错误信息：${err}`, 'error');
    });
};
</script>

<template>
  <div px-80>
    <HeaderTool
      @change-tags="changeTags"
      @show-desc="showDesc"
      @set-cover="handleSetCover"
      @publish="submit"
      :headerConfig="headerConfig"
      :images="images"
    />
    <HeaderContent
      @clear-desc="clearDesc"
      @change-top="changeTop"
      @clear-image="clearImage"
      @change-title="changeTitle"
      @change-desc="changeDesc"
      :headerConfig="headerConfig"
    />
    <BaseEditor @change-html="changeHtml" mb-20 />
  </div>
</template>
