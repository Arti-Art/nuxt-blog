<script setup>
const isLogin = ref(false)
const email = ref('')
const password = ref('')
const onSubmit = async () => {
  // const apiKey = ''
  // let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]`
  // const { data: responseData, status, error } = await useFetch(firebaseDbUrl, {
  //   method: 'POST',
  //   body: editedPost
  // })
}
</script>

<template>
  <div class="p-4">
    <h1 class="h1 text-center">{{ isLogin ? 'Login' : 'Sign Up' }}</h1>
    <form @submit.prevent="onSubmit" class="max-w-xl mx-auto">
      <UiInput v-model="email" type="email">E-Mail Address</UiInput>
      <UiInput v-model="password" type="password">Password</UiInput>
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