<script setup lang="ts">
import ExperienceComponent from '../components/ExperienceComponent.vue';
// import { onMounted, ref } from 'vue';
import SearchBar from '../components/SearchBar.vue';
import Slider from '../components/Slider.vue';
import data from '../data/experiences.json';
const experiences = data.experiences;
document.title = 'Galactic Getaways - Home';

const categories = [...new Set(experiences.map((exp) => exp.category))];
</script>

<template>
  <div class="min-h-screen p-8">
    <SearchBar :categories="categories" />
    <Slider :items="experiences" />
  </div>
</template>
