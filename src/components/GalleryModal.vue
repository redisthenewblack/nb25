<script setup lang="ts">
defineProps<{ src: string | null }>();
const emit = defineEmits(["close"]);
</script>

<template>
  <div
    class="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
    @click.self="emit('close')"
  >
    <img
      :src="src"
      alt="Просмотр"
      class="max-w-full max-h-[90vh] rounded-xl shadow-lg"
    />
    <button
      @click="emit('close')"
      class="absolute top-4 right-4 text-white text-xl hover:text-pink-300"
    >
      ✕
    </button>
  </div>
</template>
