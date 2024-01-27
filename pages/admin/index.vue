<script setup>
definePageMeta({
  layout: 'admin'
})
</script>

<template>
  <div class="container mx-auto p-4">
    <section>
      <nuxt-link to="/admin/new-post">
        <button class="px-3 py-1 border-2 border-green-600 rounded-md hover:bg-green-200 transition">Create Post</button>
      </nuxt-link>
    </section>
    <section>
      <h2 class="h2 text-center">Posts</h2>
      <PostList :isAdmin="true" />
    </section>
  </div>
</template>