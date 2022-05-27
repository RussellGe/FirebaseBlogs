<script setup lang="ts">
import BaseEditor from "~/components/BaseEditor.vue";
import Test1 from "../components/Test.vue";
const name = $ref('')

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}
</script>

<template>
home
</template>
