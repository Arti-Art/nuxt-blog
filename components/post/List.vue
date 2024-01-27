<script setup>
import { usePostsStore } from '@/stores/blogposts'
const props = defineProps({
  isAdmin: {
    type: Boolean,
    default: false
  },
})
const store = usePostsStore()
const posts = computed(() => store.posts)
</script>

<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:flex-row md:gap-8 flex-wrap">
    <PostPreview v-for="post, index in posts" :isAdmin="isAdmin" :key="index" :id="index" :title="post.title"
      :previewText="post.previewText" :thumbnail="post.thumbnail" />
  </div>
</template>