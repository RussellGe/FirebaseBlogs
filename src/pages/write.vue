<script setup lang="ts">
import BaseEditor from '~/components/BaseEditor.vue';
import Test1 from '../components/Test.vue';
const name = $ref('');

const router = useRouter();
const go = () => {
  if (name) router.push(`/hi/${encodeURIComponent(name)}`);
};
const handleImg = () => {
};
</script>

<template>
  <img src="https://source.unsplash.com/random" alt="" />
  <div @click="handleImg">获得图片</div>
  <BaseEditor />
</template>
