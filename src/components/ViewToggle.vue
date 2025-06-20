<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

// Текущий маршрут
const isSlideshow = computed(() => route.path === "/slideshow");

// Функция переключения
const toggleView = () => {
  router.push(isSlideshow.value ? "/gallery" : "/slideshow");
};
</script>

<template>
  <div class="fixed top-4 right-4 z-50">
    <button
      @click="toggleView"
      class="bg-white/80 backdrop-blur-md text-sm sm:text-base text-gray-800 dark:bg-zinc-800/80 dark:text-gray-100 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
    >
      {{ isSlideshow ? "Переключить на галерею" : "Переключить на слайдшоу" }}
    </button>
  </div>
</template>
