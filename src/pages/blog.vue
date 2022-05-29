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
  <div class="container-main">
    <div class="card-cantainer">
      <Card1
        class="card-item"
        v-for="post in postStore.Posts"
        :key="post.id"
        :img-url="post.blogCoverPhoto"
        :title="post.blogTitle"
        :desc="post.blogDesc"
        :tags="post.tags"
        :time='post.date'
      />
      <Card1
        class="card-item"
        v-for="post in postStore.Posts"
        :key="post.id"
        :img-url="post.blogCoverPhoto"
        :title="post.blogTitle"
        :desc="post.blogDesc"
        :tags="post.tags"
        :time='post.date'
      />
      <Card1
        class="card-item"
        v-for="post in postStore.Posts"
        :key="post.id"
        :img-url="post.blogCoverPhoto"
        :title="post.blogTitle"
        :desc="post.blogDesc"
        :tags="post.tags"
        :time='post.date'
      />
      <Card1
        class="card-item"
        v-for="post in postStore.Posts"
        :key="post.id"
        :img-url="post.blogCoverPhoto"
        :title="post.blogTitle"
        :desc="post.blogDesc"
        :tags="post.tags"
        :time='post.date'
      />
      <Card1
        class="card-item"
        v-for="post in postStore.Posts"
        :key="post.id"
        :img-url="post.blogCoverPhoto"
        :title="post.blogTitle"
        :desc="post.blogDesc"
        :tags="post.tags"
        :time='post.date'
      />
    </div>
  </div>
</template>
<style lang="less" scoped>
.container-main {
  width: 100vw;
  display: flex;
  padding-top: 10vw;
  padding-bottom: 10vw;
  .card-cantainer {
    width: calc(80vw + 96px);
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    .card-item {
      margin-right: 24px;
      margin-bottom: 40px;
    }
  }
}
</style>
