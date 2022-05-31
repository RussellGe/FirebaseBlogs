<script setup lang="ts">
import { searchDb } from '~/db';
import { usePostStore } from '~/store/posts';
import Card1 from '~/components/Card.vue';
import { openMessage } from '~/components/message/message';
const postStore = usePostStore();
const loading = ref(false);
onMounted(() => {
  loading.value = true;
  postStore.getPosts().finally(() => {
    loading.value = false;
  });
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
    <Loading :show="loading" type="spiningDubbles" />
    <div class="left-area" v-if="!loading">
      <div class="side-bar">123</div>
    </div>
    <div class="right-area">
      <div v-if="!loading" class="card-cantainer">
        <Card1
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
      <Pager v-if="!loading" @change-current="changeCurrent" :config="postStore.PagerConfig" />
    </div>
  </div>
</template>
<style lang="less" scoped>
.container-main {
  width: 100vw;
  display: flex;
  height: calc(100vh - 90px);
  overflow: hidden;
  align-items: center;
  .left-area {
    width: 20vw;
    height: calc(100vh - 90px);
    box-sizing: border-box;
    border-right: 1px solid #f2f2f2;
  }
  .right-area {
    width: 80vw;
    padding-top: 10vw;
    padding-bottom: 10vw;
    height: calc(100vh - 90px);
    box-sizing: border-box;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    .card-cantainer {
      width: calc(60vw + 96px);
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      .card-item {
        margin-right: 24px;
        margin-bottom: 40px;
      }
    }
  }
  .right-area::-webkit-scrollbar {
    display: none;
  }
}
</style>
