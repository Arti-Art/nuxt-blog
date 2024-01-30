<script setup lang="ts">
import { usePostsStore } from '@/stores/blogposts'
const store = usePostsStore()

const editedPost = reactive({
  title: '',
  author: '',
  thumbnail: '',
  updatedDate: '',
  previewText: '',
  content: '',
})
const runtimeConfig = useRuntimeConfig()
const firebaseDbUrl = runtimeConfig.public.firebaseDbUrl + '.json'
const onSubmit = async () => {
  const currentDate = new Date()
  editedPost.updatedDate = useFormatDate(currentDate)
  const { data: responseData, status, error } = await useFetch(firebaseDbUrl, {
    method: 'POST',
    body: editedPost
  })
  // data, pending, status and error are Vue refs and they should be accessed with .value when used within the <script setup>
  console.log(responseData.value.name) // if error (401 unauthorized), will be null
  console.log(error.value)
  console.log(status.value) // can be success, error, idle or pending
  if (status.value === 'success') {
    store.updatePost(responseData.value.name, editedPost)
    await navigateTo('/admin')
  } else {
    console.error("An error occurred when saving the post. Please contact the developer.")
  }
}
const onCancel = async () => {
  await navigateTo('/admin')
}
</script>

<template>
  <div class="p-4">
    <h1 class="h1 text-center">Create a new post</h1>
    <form @submit.prevent="onSubmit" class="max-w-xl mx-auto mt-10">
      <UiInput v-model="editedPost.author">Author Name</UiInput>
      <UiInput v-model="editedPost.title">Title</UiInput>
      <UiInput v-model="editedPost.thumbnail">Thumbnail URL</UiInput>
      <UiInput v-model="editedPost.previewText">Preview text</UiInput>
      <UiInput v-model="editedPost.content" control-type="textarea">Content</UiInput>

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
  </div>
</template>
