<script setup lang="ts">
import { onMounted, ref } from 'vue';
import SearchBar from '../components/SearchBar.vue';
import Slider from '../components/Slider.vue';
document.title = 'Simple Page | My App';

const items = ref([]);

onMounted(async () => {
  const res = await fetch('/events.json');
  items.value = await res.json();
});
</script>

<template>
  <div class="min-h-screen p-8">
    <h1 class="text-2xl font-bold mb-4">Simple Page</h1>
    <p>This is a light scaffold for quick pages.</p>
    <SearchBar />
    <Slider :items="items" />
  </div>
</template>
