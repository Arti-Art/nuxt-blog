<script setup>
import { usePostsStore } from '@/stores/blogposts'
const store = usePostsStore()
const posts = computed(() => store.posts)
store.fetchPosts()
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="h1">My SuperBlog</h1>
    <section class="my-4">
      <h2 class="h2">Featured posts</h2>
      <div class="flex flex-col gap-3 md:flex-row md:gap-8 flex-wrap">
        <PostPreview v-for="post, index in posts" :isAdmin="false" :key="index" :id="index" :title="post.title"
          :previewText="post.previewText" :thumbnail="post.thumbnail" />
      </div>
    </section>
  </div>
</template>