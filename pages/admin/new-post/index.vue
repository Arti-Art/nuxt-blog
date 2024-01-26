<script setup lang="ts">
const editedPost = reactive({
  id: '',
  title: '',
  author: '',
  thumbnail: '',
  updatedDate: '',
  previewText: '',
  content: '',
})
const firebaseDbUrl = 'https://nuxt-blog-aa8ce-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
const onSubmit = async () => {
  editedPost.updatedDate = new Date().toISOString()
  console.log(editedPost)
  const { data: responseData, status, error } = await useFetch(firebaseDbUrl, {
    method: 'POST',
    body: editedPost
  })
  // data, pending, status and error are Vue refs and they should be accessed with .value when used within the <script setup>
  console.log(responseData.value) // if error (401 unauthorized), will be null
  console.log(error.value)
  console.log(status.value) // can be success, error, idle or pending
}
const onCancel = () => {
  navigateTo('/admin')
}
</script>

<template>
  <div class="p-4">
    <h1 class="h1 text-center">Create a new post</h1>
    <form @submit.prevent="onSubmit" class="max-w-xl mx-auto mt-10">
      <UiInput v-model="editedPost.author">Author Name</UiInput>
      <UiInput v-model="editedPost.title">Title</UiInput>
      <UiInput v-model="editedPost.thumbnail">Thumbnail URL</UiInput>
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