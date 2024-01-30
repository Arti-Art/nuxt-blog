<script setup>
import { usePostsStore } from '@/stores/blogposts'
const store = usePostsStore()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const firebaseDbUrl = `${runtimeConfig.public.firebaseDbUrl}/${route.params.postId}.json`
const { data: responseData, status, error } = await useFetch(firebaseDbUrl)
const loadedPost = reactive(responseData.value)

const onSubmit = async () => {
  const currentDate = new Date()
  loadedPost.updatedDate = useFormatDate(currentDate)
  console.log(loadedPost)
  const { data: responseData, status, error } = await useFetch(firebaseDbUrl, {
    method: 'PUT',
    body: loadedPost
  })
  // data, pending, status and error are Vue refs and they should be accessed with .value when used within the <script setup>
  // console.log(responseData.value) // if error (401 unauthorized), will be null
  console.log("error?:", error.value)
  console.log("status:", status.value) // can be success, error, idle or pending
  store.updatePost(route.params.postId, loadedPost)
  await navigateTo('/admin')
}
const onCancel = async () => {
  await navigateTo('/admin')
}
</script>

<template>
  <div class="p-4">
    <h1 class="h1 text-center">Edit post</h1>
    <form v-if="!error" @submit.prevent="onSubmit" class="max-w-xl mx-auto mt-10">
      <UiInput v-model="loadedPost.author">Author Name</UiInput>
      <UiInput v-model="loadedPost.title">Title</UiInput>
      <UiInput v-model="loadedPost.thumbnail">Thumbnail URL</UiInput>
      <UiInput v-model="loadedPost.previewText">Preview text</UiInput>
      <UiInput v-model="loadedPost.content" control-type="textarea">Content</UiInput>

      <!-- Buttons -->
      <div class="flex justify-end gap-2">
        <button type="submit"
          class="border-2 border-green-500 text-green-600 rounded-md px-3 py-1 hover:bg-green-200 transition">
          Save
        </button>
        <button @click="onCancel" type="button"
          class="border-2 border-slate-500 rounded-md px-3 py-1 hover:bg-slate-200 transition">
          Cancel
        </button>
      </div>
    </form>
    <div v-else>
      <h2 class="h2">An error occurred when retrieving the post. Please contact the developer.</h2>
      <div>{{ error.message }}</div>
    </div>
  </div>
</template>