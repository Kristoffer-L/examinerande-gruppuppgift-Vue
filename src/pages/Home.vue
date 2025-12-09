<script setup lang="ts">
import SearchBar from "../components/SearchBar.vue";
import Slider from "../components/Slider.vue";
document.title = "Simple Page | My App";
</script>

<template>
  <div class="min-h-screen p-8">
    <h1 class="text-2xl font-bold mb-4">Simple Page</h1>
    <p>This is a light scaffold for quick pages.</p>
    <SearchBar />
    <Slider
      :items="[
        {
          title: 'Event 1',
          desc: 'Description 1',
          image: 'skidor.jpg',
          category: 'Sport',
          participants: 2,
          startDate: '2025-12-10',
          endDate: '2025-12-20',
          age: '10-30',
        },
        {
          title: 'Event 2',
          desc: 'Description 2',
          image: 'skidor.jpg',
          category: 'Sport',
          participants: 2,
          startDate: '2025-12-10',
          endDate: '2025-12-20',
          age: '10-30',
        },
        {
          title: 'Event 3',
          desc: 'Description 3',
          image: 'skidor.jpg',
          category: 'Sport',
          participants: 2,
          startDate: '2025-12-10',
          endDate: '2025-12-20',
          age: '30-45',
        },
        {
          title: 'Event 4',
          desc: 'Description 4',
          image: '.jpg',
          category: 'Sport',
          participants: 2,
          startDate: '2025-12-10',
          endDate: '2025-12-20',
          age: '30-45',
        },
        {
          title: 'Event 5',
          desc: 'Description 5',
          image: 'skidor.jpg',
          category: 'Sport',
          participants: 2,
          startDate: '2025-12-10',
          endDate: '2025-12-20',
          age: '45-90',
        },
      ]"
    />
  </div>
</template>
