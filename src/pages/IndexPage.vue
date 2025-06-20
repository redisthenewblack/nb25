<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goToSlideshow = () => {
  router.push("/slideshow");
};
</script>

<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700 transition-colors"
  >
    <h1
      class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white"
    >
      С Днём Рождения, Настя! 🎉
    </h1>

    <p
      class="text-lg sm:text-xl max-w-xl text-gray-700 dark:text-gray-300 mb-8"
    >
      Это небольшой сюрприз-сайт от твоих друзей 💖 Здесь будут тёплые
      пожелания, воспоминания и фотки. Спасибо, что ты с нами ✨
    </p>

    <button
      @click="goToSlideshow"
      class="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 dark:bg-pink-600 dark:hover:bg-pink-700"
    >
      Начать →
    </button>
  </section>
</template>
