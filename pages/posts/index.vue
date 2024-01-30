<script setup>
const runtimeConfig = useRuntimeConfig()
// On client-side, only keys in runtimeConfig.public are available, and the object is both writable and reactive.
console.log(runtimeConfig.public.message)
if (process.server) {
  // console.log('Runtime config:', runtimeConfig)
  console.log('API secret:', runtimeConfig.privateMessage) // will return undefined if done client-side
}
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="h1">Blog</h1>
    <h2 class="h2">Check the code to learn about Environment Variables.</h2>
    <section class="my-4">
      <h2 class="h2">All posts</h2>
      <PostList />
    </section>
  </div>
</template>