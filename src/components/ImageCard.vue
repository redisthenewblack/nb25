<script setup lang="ts">
defineProps<{
  src: string;
  alt?: string;
  rounded?: boolean;
  onClick?: () => void;
}>();
</script>

<template>
  <img
    :src="src"
    :alt="alt || 'photo'"
    class="w-full h-auto object-cover transition-transform duration-300 cursor-pointer"
    :class="rounded ? 'rounded-xl shadow-md hover:scale-105' : ''"
    @click="onClick"
  />
</template>
