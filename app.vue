<script setup>
// So, apparently, this is where I can perform stuff like fetch if it needs to be done only once
import { usePostsStore } from '@/stores/blogposts'
const store = usePostsStore()
store.fetchPosts()
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
