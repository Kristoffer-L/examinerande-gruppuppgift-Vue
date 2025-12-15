<script setup lang="ts">
import { ref, computed } from 'vue';
import SearchBar from '../components/SearchBar.vue';
import Slider from '../components/Slider.vue';
import data from '../data/experiences.json';
import type { SearchParams } from '../types/types';
import { experienceSupportsAge } from '../utils/helpers';
import { AGE_PRESETS } from '../types/consts';
const experiences = data.experiences;
document.title = 'Galactic Getaways - Home';

const categories = [...new Set(experiences.map((exp) => exp.category))];

const allExperiences = ref(experiences);

const searchParams = ref<SearchParams>({
  category: null,
  ageCategory: null,
  dateRange: null,
});

const selectedAge = computed<number | null>(() => {
  return searchParams.value.ageCategory ? AGE_PRESETS[searchParams.value.ageCategory] : null;
});

const filteredExperiences = computed(() => {
  return experiences.filter((exp) => {
    if (searchParams.value.category && exp.category !== searchParams.value.category) {
      return false;
    }

    if (selectedAge.value !== null && !experienceSupportsAge(exp, selectedAge.value)) {
      return false;
    }

    return true;
  });
});
</script>

<template>
  <div class="min-h-screen p-8">
    <SearchBar :categories="categories" v-model="searchParams" />
    <Slider :items="filteredExperiences" />
  </div>
</template>
