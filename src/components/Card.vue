<script setup lang="ts">
const router = useRouter();
const go = (name: string) => {
  router.push(`/${name}`);
};
defineProps<{
  imgUrl: string;
  title: string;
  desc: string;
  tags: string[];
}>();
</script>
<template>
  <div class="card">
    <img class="topImg" :src="imgUrl" alt="" />
    <div class="bottom"></div>
  </div>
</template>
<style lang="less" scoped>
.card {
  border-radius: 10px;
  overflow: hidden;
  width: 20vw;
  height: 40vh;
  .topImg {
    width: 20vw;
    height: 14vh;
    object-fit: cover;
  }
  .bottom {
    width: 20vw;
    height: 26vh;
    background-color: aqua;
  }
}
</style>
