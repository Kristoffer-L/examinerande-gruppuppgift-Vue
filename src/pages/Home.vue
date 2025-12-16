<script setup lang="ts">
import { ref, onMounted } from 'vue';
import SearchBar from '../components/SearchBar.vue';
import Slider from '../components/Slider.vue';
import data from '../data/experiences.json';
import ArticleComponent from '../components/ArticleComponent.vue';
const experiences = data.experiences;
document.title = 'Galactic Getaways - Home';

const categories = [...new Set(experiences.map((exp) => exp.category))];

const allExperiences = ref(experiences);
const filteredExperiences = ref(experiences);
</script>

<template>
  <div class="min-h-screen p-8">
    <SearchBar
      :categories="categories"
      :events="allExperiences"
      @filtered="filteredExperiences = $event"
    />

    <Slider :items="filteredExperiences" />
    <ArticleComponent />
  </div>
</template>
