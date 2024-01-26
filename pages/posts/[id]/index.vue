<script setup>
const route = useRoute()
const firebaseDbUrl = `https://nuxt-blog-aa8ce-default-rtdb.europe-west1.firebasedatabase.app/posts/${route.params.id}.json`
const { data: responseData, status, error } = await useFetch(firebaseDbUrl)
const loadedPost = computed(() => responseData.value)
</script>

<template>
  <div class="p-8 text-center">
    <section class="w-full md:max-w-xl mx-auto">
      <h1 class="h1">{{ loadedPost.title }}</h1>
      <div class="p-2 border-b-2 border-b-slate-500 flex items-center justify-center flex-col md:flex-row gap-2">
        <div>Last updated on {{ loadedPost.updatedDate }}</div>
        <div>Written by {{ loadedPost.author }}</div>
      </div>
      <img :src="loadedPost.thumbnail" alt="">
      <p>{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about the post. Send en email to <a class="text-blue-500 hover:text-pink-600"
          href="arti.pelmeni@gmail.com">arti.pelmeni@gmail.com</a></p>
    </section>
  </div>
</template>