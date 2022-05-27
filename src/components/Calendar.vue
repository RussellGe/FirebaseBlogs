<script setup lang="ts">
import { searchDb, updateData } from '~/db';

const handleClick = async () => {
  let snapshot = await searchDb('Posts');
  const events: any[] = [];
  snapshot.forEach((doc: any) => {
    let appData = doc.data();
    appData.id = doc.id;
    events.push(appData);
  });
  console.log(events);
};
const handleClickUpdate = async () => {
  let snapshot = await searchDb('Posts');
  const posts = await updateData('Posts', 'SM69VMouXNSVMD83NwmY', {
    content: '1',
    hello: '1',
    test: '1',
  });

  console.log(posts);
  const events: any[] = [];
  snapshot.forEach((doc: any) => {
    let appData = doc.data();
    appData.id = doc.id;
    events.push(appData);
  });
  console.log(events);
};
</script>

<template>
  <div @click="handleClick">Calendar</div>
  <div @click="handleClickUpdate">update</div>
</template>
