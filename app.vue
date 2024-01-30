<script setup lang="ts">
const someDate = new Date()
const formattedDate = useFormatDate(someDate)
console.log('I am using a composable to format the raw Date() into this: ', formattedDate)

// This is where I can perform global stuff that needs to be done only once (ex: fetching data)
import { usePostsStore } from '@/stores/blogposts'
const store = usePostsStore()
store.fetchPosts()

// This is how I can interact with the head element
// NB: title can either be set in useHead, in useSeoMeta below, or on each page using definePageMeta({title: 'My Page Title'})
useHead({
  meta: [
    { name: 'description', content: 'A blog using Nuxt 3.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [{ innerHTML: 'console.log("Hi from the <head> - set in app.vue useHead!")' }]
})

// This is how I can customize the SEO easily
useSeoMeta({
  title: 'My Nuxt Blog',
  ogTitle: 'My Nuxt Blog',
  description: 'This is a blog I created with Nuxt 3, Pinia, TailwindCSS and Firebase',
  ogDescription: 'This is a blog I created with Nuxt 3, Pinia, TailwindCSS and Firebase',
  ogImage: 'https://picsum.photos/id/265/400/300'
})

// Firebase
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.15s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>