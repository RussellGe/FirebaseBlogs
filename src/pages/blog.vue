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
const changeCurrent = (current: number) => {
  postStore.PagerConfig.current = current;
};
</script>

<template>
  <div class="container-main">
    <div class="card-cantainer">
      <Card1
        ease-in-out
        class="card-item"
        v-for="post in postStore.showPosts"
        :key="post.id"
        :img-url="post.blogCoverPhoto"
        :title="post.blogTitle"
        :desc="post.blogDesc"
        :tags="post.tags"
        :time="post.date"
      />
    </div>
    <Pager @change-current="changeCurrent" :config="postStore.PagerConfig" />
  </div>
</template>
<style lang="less" scoped>
.container-main {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
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
