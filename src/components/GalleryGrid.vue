<script setup lang="ts">
defineProps<{ images: string[] }>();
const emit = defineEmits<{
  (e: "open", src: string): void;
}>();
</script>

<template>
  <div class="columns-2 sm:columns-3 gap-4 space-y-4">
    <img
      v-for="src in images"
      :key="src"
      :src="src"
      loading="lazy"
      class="w-full rounded-lg cursor-pointer hover:opacity-80 transition"
      @click="emit('open', src)"
    />
  </div>
</template>
