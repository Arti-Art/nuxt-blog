<script setup>
const isLogin = ref(false)
</script>

<template>
  <div class="p-4">
    <h1 class="h1 text-center">{{ isLogin ? 'Login' : 'Sign Up' }}</h1>
    <form @submit.prevent="" class="max-w-xl mx-auto">
      <UiInput type="email">E-Mail Address</UiInput>
      <UiInput type="password">Password</UiInput>
      <button type="submit" class="border-2 border-slate-500 rounded-md px-3 py-1 hover:bg-slate-200 transition">
        {{ isLogin ? 'Login' : 'Sign Up' }}
      </button>
      <button @click="isLogin = !isLogin" type="button"
        class="ml-2 border-2 border-slate-500 rounded-md px-3 py-1 hover:bg-slate-200 transition">
        Switch to {{ isLogin ? 'Signup' : 'Login' }}
      </button>
    </form>
  </div>
</template>