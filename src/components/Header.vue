<script setup lang="ts">
const router = useRouter();
const go = (name: string) => {
  router.push(`/${name}`);
};
</script>
<template>
  <div class="header" shadow>
    <div class="title">RussellGe</div>
    <div class="btn-container">
      <button class="btn-item icon-btn !outline-none" @click="toggleDark()">
        <div v-if="isDark.value" i-carbon-moon />
        <div v-else i-carbon-sun />
      </button>
      <div @click="go('')" class="btn-item">主页</div>
      <div @click="go('blog')" class="btn-item">博客</div>
      <div @click="go('write')" class="btn-item">写作</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.header {
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    margin-left: 50px;
    font-size: 25px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    cursor: pointer;
  }
  .btn-container {
    display: flex;
    margin-right: 40px;
    font-size: 20px;
    font-weight: 500;
    .btn-item {
      cursor: pointer;
      margin-right: 20px;
    }
  }
}
</style>
