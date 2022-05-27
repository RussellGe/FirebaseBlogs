<script setup lang="ts">
import { searchDb } from '~/db';
import { usePostStore } from '~/store/posts';
import Card1 from '~/components/Card.vue';
const postStore = usePostStore();
onMounted(() => {
  postStore.getPosts();
});
const handleClick = (text: string) => {
  console.log(text);
};
</script>

<template>
  <div class="container">
    <div class="card-cantainer">
      <Card1
        v-for="post in postStore.Posts"
        :key="post.id"
        :img-url="post.blogCoverPhoto"
        :title="post.blogTitle"
        :desc="post.blogDesc"
        :tags="post.tags"
      />
    </div>
  </div>
</template>
<style lang="less" scoped>
.container {
  width: 100vw;
  display: flex;
}
.card-cantainer {
  width: calc(80vw + 96px);
  margin: auto;
}
</style>
