<script setup>
const props = defineProps({
  dynamicStyles: {
    type: String,
    default: 'bg-emerald-500 text-white fill-white'
  },
})
const mobileMenuIsOpen = ref(false)
const openMobileMenu = () => {
  mobileMenuIsOpen.value = true
}
const closeMobileMenu = () => {
  mobileMenuIsOpen.value = false
}
</script>

<template>
  <header>
    <div :class="dynamicStyles" class="px-4 py-2 h-14 tracking-wide flex">
      <SvgMenu @click="openMobileMenu" :class="'md:hidden'" />
      <p class="ml-auto mr-auto md:ml-0 h-full flex items-center text-2xl tracking-widest pr-8">&lt;Art/Code&gt;</p>
      <nav class="hidden md:flex h-full items-center justify-center gap-4">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/posts">Blog</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/admin">Admin</nuxt-link>
      </nav>
    </div>
    <!-- Mobile Menu -->
    <nav :class="{ open: mobileMenuIsOpen }"
      class="mobilemenu fixed top-0 left-0 w-full text-2xl tracking-widest sm:w-3/4 md:hidden z-50 h-screen bg-emerald-500 border-r-8 border-r-emerald-700 flex flex-col justify-center items-center gap-8">
      <svg @click="closeMobileMenu" class="closemobilemenuarrow absolute top-4 right-4 cursor-pointer fill-white"
        xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35">
        <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
      </svg>
      <nuxt-link @click="closeMobileMenu" to="/"
        class="text-white hover:text-green-900 transition ease-in">Home</nuxt-link>
      <nuxt-link @click="closeMobileMenu" to="/posts"
        class="text-white hover:text-green-900 transition ease-in">Blog</nuxt-link>
      <nuxt-link @click="closeMobileMenu" to="/about"
        class="text-white hover:text-green-900 transition ease-in">About</nuxt-link>
      <nuxt-link @click="closeMobileMenu" to="/admin"
        class="text-white hover:text-green-900 transition ease-in">Admin</nuxt-link>
    </nav>
  </header>
</template>

<style scoped>
.mobilemenu {
  transform: translateX(-100%);
  transition: transform 0.2s ease;
}

.mobilemenu.open {
  transform: translateX(0%);
}

.closemobilemenuarrow {
  opacity: 0;
  transition: opacity 0.5s ease-in 0.2s;
}

.mobilemenu.open .closemobilemenuarrow {
  opacity: 1;
}

.router-link-active {
  @apply border-b-2;
}
</style>