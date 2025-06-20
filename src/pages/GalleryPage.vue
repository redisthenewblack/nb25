<script setup lang="ts">
import { ref } from "vue";
import ViewToggle from "@/components/ViewToggle.vue";
import GalleryGrid from "@/components/GalleryGrid.vue";
import GalleryModal from "@/components/GalleryModal.vue";

// Динамически импортируем все изображения из папки
const rawImages = import.meta.glob("@/assets/img/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});
const imagePaths = Object.values(rawImages) as string[];

// Состояние модалки
const isModalOpen = ref(false);
const activeImage = ref<string | null>(null);

function openModal(src: string) {
  activeImage.value = src;
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
  activeImage.value = null;
}
</script>

<template>
  <section
    class="min-h-screen py-8 px-4 bg-gradient-to-br from-gray-100 via-pink-100 to-gray-200 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700 transition-colors"
  >
    <!-- Переключатель вида -->
    <ViewToggle />

    <!-- Заголовок -->
    <h1
      class="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white"
    >
      Галерея воспоминаний
    </h1>

    <!-- Сетка картинок -->
    <GalleryGrid :images="imagePaths" @open="openModal" />

    <!-- Модалка для увеличенного просмотра -->
    <GalleryModal v-if="isModalOpen" :src="activeImage" @close="closeModal" />
    <router-link
      to="/"
      class="fixed top-4 left-4 z-50 bg-white/80 backdrop-blur-md text-sm sm:text-base text-gray-800 dark:bg-zinc-800/80 dark:text-gray-100 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
      >Главная</router-link
    >
  </section>
</template>

<style scoped>
/* Можно добавить кастомные стили, если нужно */
</style>
