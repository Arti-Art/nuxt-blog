<script setup>
const author = ref('')
const title = ref('')
const thumbnailLink = ref('')
const content = ref('')
const onSubmit = () => {
  console.log(editedPost)
}
const onCancel = () => {
  navigateTo('/admin')
}
(() => {
  author.value = 'Arti'
  title.value = 'My first post'
  thumbnailLink.value = 'https://picsum.photos/id/967/250/250'
  content.value = 'This is my first post'
})()
</script>

<template>
  <div class="p-4">
    <h1 class="h1 text-center">Edit post</h1>
    <form @submit.prevent="onSubmit" class="max-w-xl mx-auto mt-10">
      <UiInput v-model="author">Author Name</UiInput>
      <UiInput v-model="title">Title</UiInput>
      <UiInput v-model="thumbnailLink">Thumbnail URL</UiInput>
      <UiInput v-model="content" control-type="textarea">Content</UiInput>

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