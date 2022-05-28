<script setup lang="ts">
const router = useRouter();
const go = (name: string) => {
  router.push(`/${name}`);
};
const getTime = (time: number) => {
  const date = new Date(time);
  return `${date.getFullYear()} ${date.getMonth() + 1}/${date.getDate()}  ${
    date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`
  }:${date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`}`;
};
defineProps<{
  imgUrl: string;
  title: string;
  desc: string;
  tags: string[];
  time: number;
  preview?: boolean;
}>();
</script>
<template>
  <div :class="[preview ? 'small-card' : 'card']">
    <img class="topImg" :src="imgUrl" alt="" />
    <div class="bottom">
      <div class="bottom-text">
        <div c-gray-700 class="bottom-title">{{ title }}</div>
        <div c-gray-500 class="bottom-time">Posted on: {{ getTime(time) }}</div>
        <div class="bottom-tags">
          <div v-if='!preview' bg-bluegray rounded mr-2 class="bottom-tag" v-for="item in tags" :key="item">{{ item }}</div>
        </div>
      </div>
      <div v-if='!preview' c-gray-700 class="bottom-btn">
        View The Post
        <div ml-3 i-carbon-arrow-right></div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.card {
  border-radius: 10px;
  overflow: hidden;
  width: 20vw;
  height: 30vw;
  background: #fff;
  transition: all 0.5s ease;
  box-shadow: 0 8px 12px 0 rgba(31, 35, 41, 0.08);
  .topImg {
    width: 20vw;
    height: 14vw;
    object-fit: cover;
  }
  .bottom {
    width: 20vw;
    height: 16vw;
    padding: 2vw;
    .bottom-text {
      height: 10vw;
      .bottom-title {
        font-size: 22px;
        font-weight: 500;
        font-family: monospace;
      }
      .bottom-tags {
        margin-top: 10px;
        display: flex;
        .bottom-tag {
          padding-left: 2px;
          padding-right: 2px;
          cursor: pointer;
        }
      }
    }
    .bottom-btn {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
}
.small-card {
  width: 14vw;
  border-radius: 10px;
  overflow: hidden;
  height: 21vw;
  background: #fff;
  transition: all 0.5s ease;
  box-shadow: 0 8px 12px 0 rgba(31, 35, 41, 0.08);
  .topImg {
    width: 14vw;
    height: 10vw;
    object-fit: cover;
  }
  .bottom {
    width: 14vw;
    height: 11vw;
    padding: 1vw;
    .bottom-text {
      height: 9vw;
      word-wrap: break-word;
      .bottom-title {
        font-size: 22px;
        font-weight: 500;
        font-family: monospace;
      }
      .bottom-tags {
        margin-top: 10px;
        display: flex;
        .bottom-tag {
          padding-left: 2px;
          padding-right: 2px;
          cursor: pointer;
        }
      }
    }
    .bottom-btn {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
}
.card:hover {
  transform: rotate(3deg);
}
</style>
