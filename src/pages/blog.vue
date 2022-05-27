<script setup lang="ts">
import { searchDb } from '~/db';
import { usePostStore } from '~/store/posts';
const postStore = usePostStore();
onMounted(() => {
  postStore.getPosts();
});
const handleClick = (text: string) => {
  console.log(text)
}
</script>

<template>
  <div flex>
    <div>{{ postStore.Posts.length }}</div>
    <div v-for="post in postStore.Posts" :key="post.id">
      <div v-html="post.blogHtml"></div>
      <div @click="handleClick(post.blogHtml)">123</div>
    </div>
  </div>
</template>
