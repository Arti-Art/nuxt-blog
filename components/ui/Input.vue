<script setup>
const model = defineModel()
const props = defineProps({
  controlType: {
    type: String,
    default: 'input'
  },
  value: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="input-control mb-4">
    <label class="block font-bold">
      <slot></slot>
    </label>
    <input class="inputfield" v-if="controlType === 'input'" v-model="model">
    <textarea class="inputfield" v-if="controlType === 'textarea'" v-model="model" rows="10"></textarea>
  </div>
</template>

<style scoped>
.inputfield {
  @apply block w-full border-2 border-gray-300 rounded-md p-2;
}

.input-control input:focus,
.input-control textarea:focus {
  @apply bg-slate-100 outline-none;
}
</style>