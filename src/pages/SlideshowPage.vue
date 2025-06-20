<script setup lang="ts">
import { ref, onMounted } from "vue";
import ImageCard from "@/components/ImageCard.vue";
import ViewToggle from "@/components/ViewToggle.vue";

// Импорт всех изображений из папки
const rawImages = import.meta.glob("@/assets/img/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const imagePaths = Object.values(rawImages) as string[];

// Набор пожеланий
const wishes = [
  "Ты — солнечный человек ☀️",
  "Пусть мечты становятся планами 💫",
  "Ты делаешь этот мир лучше 🌍",
  "Спасибо, что ты есть 💖",
  "Ты вдохновляешь нас каждый день ✨",
  "Никогда не теряй свою искренность 💎",
];

// Функция перемешивания массива
function shuffle<T>(array: T[]): T[] {
  return array.slice().sort(() => Math.random() - 0.5);
}

// Генерация слайдов
const slides = shuffle(
  imagePaths.map((src) => ({
    src,
    text: wishes[Math.floor(Math.random() * wishes.length)],
  }))
);

const current = ref(0);

const nextSlide = () => {
  current.value = (current.value + 1) % slides.length;
};

const autoSlide = () => {
  setInterval(nextSlide, 5000); // каждые 5 сек
};

onMounted(() => {
  autoSlide();
});
</script>

<template>
  <section
    class="min-h-screen flex flex-col justify-center items-center text-center px-4 py-8 bg-gradient-to-br from-gray-100 via-pink-100 to-gray-200 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700 transition-colors"
  >
    <transition name="fade" mode="out-in">
      <div :key="slides[current].src" class="w-full max-w-xl">
        <ImageCard
          :src="slides[current].src"
          :alt="`Slide ${current + 1}`"
          :rounded="true"
        />
        <p
          class="mt-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium"
        >
          {{ slides[current].text }}
        </p>
      </div>
    </transition>

    <button
      class="mt-8 text-sm text-pink-600 hover:underline dark:text-pink-400"
      @click="nextSlide"
    >
      Следующее →
    </button>
    <ViewToggle />
    <router-link
      to="/"
      class="fixed top-4 left-4 z-50 bg-white/80 backdrop-blur-md text-sm sm:text-base text-gray-800 dark:bg-zinc-800/80 dark:text-gray-100 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
      >Главная</router-link
    >
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>
