<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    required: true
  },
  previewText: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
})
const postLink = computed(() => {
  if (props.isAdmin) {
    return '/admin/' + props.id
  } else {
    return '/posts/' + props.id
  }
})
</script>

<template>
  <nuxt-link :to="postLink">
    <article class="group flex gap-4">
      <div class="w-32 h-32 rounded-2xl overflow-clip group">
        <img class="w-full h-full object-cover transition group-hover:scale-125" :src="thumbnail" alt="Post image" />
      </div>
      <div class="h-[100px] flex-1">
        <h3 class="h3">{{ title }}</h3>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>