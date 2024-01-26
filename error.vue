<script setup>
const props = defineProps({
  error: Object
})
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="bg-red-100 min-h-screen flex flex-col items-center justify-center">
    <h2 class="text-5xl text-red-500 font-bold">{{ error.statusCode }}</h2>
    <button @click="handleError"
      class="border-2 border-green-600 bg-green-500 text-white rounded-full px-3 py-1 my-4">Clear
      errors and navigagte to /</button>
    <p class="prettypara my-4">clearError() will clear the currently handled Nuxt error. <br> It also takes an optional
      path to
      redirect to</p>
    <div class="prettypara border-2 border-slate-400 p-2 rounded-md">
      URL: {{ error.url }} <br>
      Message: {{ error.message }}
    </div>
  </div>
</template>

