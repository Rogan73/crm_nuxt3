<script setup lang="ts">
  const props = defineProps({
    size: { type: String, default: "size-6" },
    fill: { type: String, default: 'none' },
    stroke: { type: String, default: 'currentColor' }
  })
</script>
<template>

<svg xmlns="http://www.w3.org/2000/svg" :fill="fill" viewBox="0 0 24 24" stroke-width="1.5" :stroke="stroke" :class="size">
  <path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z" clip-rule="evenodd" />
</svg>





</template>