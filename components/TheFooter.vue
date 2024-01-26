<script setup>
const props = defineProps({
  dynamicStyles: {
    type: String,
    default: 'h-[60px] bg-emerald-500 text-white'
  },
})
</script>

<template>
  <footer :class="dynamicStyles" class="flex items-center justify-center">
    <p>&copy; 2020 Artcode</p>
  </footer>
</template>