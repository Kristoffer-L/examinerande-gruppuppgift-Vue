<script setup lang="ts">
import data from '../data/articles.json';
const articles = data.articles;

function resolveImage(path: string) {
  return new URL(`../assets/${path}`, import.meta.url).href;
}
</script>

<template>
  <div class="md:grid md:grid-cols-2 md:gap-8">
    <div v-for="(item, index) in articles" :key="index" class="w-[80%] mx-auto my-10 md:w-[100%]">
      <div class="relative group pb-10 md:pb-0">
        <img
          :src="resolveImage(item.image)"
          :alt="item.title"
          class="w-full h-[400px] rounded-2xl object-cover"
        />
        <div
          class="absolute left-1/2 -translate-x-1/2 -translate-y-[50%] w-[95%] bg-[#313772] text-white rounded-2xl p-6 shadow-lg z-10 overflow-hidden max-h-48 group-hover:max-h-[1000px] transition-all duration-1000 ease-in-out"
        >
          <h2 class="text-xl font-semibold mb-2">{{ item.title }}</h2>
          <p class="text-sm">{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
