import { createRouter, createWebHistory } from "vue-router";

import IndexPage from "@/pages/IndexPage.vue";
import SlideshowPage from "@/pages/SlideshowPage.vue";
import GalleryPage from "@/pages/GalleryPage.vue";

const routes = [
  {
    path: "/",
    component: IndexPage,
    meta: {
      title: "С Днём Рождения, Настя!",
    },
  },
  {
    path: "/slideshow",
    component: SlideshowPage,
    meta: {
      title: "Пожелания от друзей",
    },
  },
  {
    path: "/gallery",
    component: GalleryPage,
    meta: {
      title: "Фото-воспоминания",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Если используешь unhead — можешь автоматически менять <title>:
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = String(to.meta.title);
  }
});

export default router;
