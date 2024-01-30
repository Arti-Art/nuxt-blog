<script setup>
// !! Load the post here instead of reaching to the store, because...
// this script setup will wait for the fetch to be resolved (using Suspense). Using the store will not (unless I implement stuff)
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const firebaseDbUrl = `${runtimeConfig.public.firebaseDbUrl}/${route.params.id}.json`
const { data: responseData, status, error } = await useFetch(firebaseDbUrl)
const loadedPost = responseData.value
</script>

<template>
  <div class="text-center">
    <section class="w-full md:max-w-xl mx-auto">
      <!-- Success -->
      <div v-if="status === 'success'">
        <!-- Header -->
        <div class="grid w-full md:rounded-2xl overflow-clip mb-4 md:mt-8">
          <div class="relative z-20 col-span-full row-span-full text-white flex flex-col justify-center">
            <h1 class="h1">{{ loadedPost.title }}</h1>
            <div>Last updated on {{ loadedPost.updatedDate }}</div>
            <div>Written by {{ loadedPost.author }}</div>
          </div>
          <div class="relative z-10 col-span-full row-span-full bg-slate-900/30"></div>
          <img :src="loadedPost.thumbnail" alt=""
            class="relative col-span-full row-span-full w-full aspect-video object-cover z-0">
        </div>
        <!-- Content -->
        <div class="p-4">
          <p>{{ loadedPost.content }}</p>
          <div class="mt-4 pt-2 border-t-2">
            <p>Let me know what you think about the post. Send en email to <a class="text-blue-500 hover:text-pink-600"
                href="arti.pelmeni@gmail.com">arti.pelmeni@gmail.com</a></p>
          </div>
        </div>
      </div>
      <!-- Error -->
      <template v-else>
        <h1 class="h1">An error occurred. Please contact the devs.</h1>
        <div>Error {{ error.statusCode }} - {{ error.message }}</div>
      </template>
    </section>
  </div>
</template>