<script setup>
import { usePostsStore } from '@/stores/blogposts'
const store = usePostsStore()
const posts = computed(() => store.posts)
store.fetchPosts()
definePageMeta({
  layout: 'admin'
})
</script>

<template>
  <div class="p-4">
    <section>
      <nuxt-link to="/admin/new-post">
        <button class="px-3 py-1 border-2 border-green-600 rounded-md hover:bg-green-200 transition">Create Post</button>
      </nuxt-link>
    </section>
    <section>
      <h2 class="h2 text-center">Posts</h2>
      <div class="flex flex-col gap-3 md:flex-row md:gap-8 flex-wrap">
        <PostPreview v-for="post, index in posts" :isAdmin="true" :key="index" :id="index" :title="post.title"
          :previewText="post.previewText" :thumbnail="post.thumbnail" />
      </div>
    </section>
  </div>
</template>