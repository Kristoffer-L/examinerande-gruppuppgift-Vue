<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import SearchBar from '../components/SearchBar.vue';
import Slider from '../components/Slider.vue';
import data from '../data/experiences.json';

import ArticleComponent from '../components/ArticleComponent.vue';

import type { SearchParams } from '../types/types';
import { experienceSupportsAge } from '../utils/helpers';
import { AGE_PRESETS, type AgePreset } from '../types/consts';
import { useRouter, useRoute } from 'vue-router';

const experiences = data.experiences;
document.title = 'Galactic Getaways - Home';

const categories = [...new Set(experiences.map((exp) => exp.category))];

const allExperiences = ref(experiences);

const router = useRouter();
const route = useRoute();

const searchParams = ref<SearchParams>({
  category: null,
  ageCategory: null,
  dateRange: null,
  participants: null,
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
watch(
  searchParams,
  (params) => {
    if (!isHydrated.value) return;

    const query: Record<string, string | undefined> = {};

    if (params.participants != null) {
      query.participants = params.participants.toString();
    }

    if (params.dateRange && params.dateRange.length === 2) {
      const [startDate, endDate] = params.dateRange;

      query.start = startDate!.toISOString().split('T')[0];
      query.end = endDate!.toISOString().split('T')[0];
    }

    if (params.category) {
      query.category = params.category;
    }

    if (params.ageCategory) {
      query.age = params.ageCategory;
    }

    router.replace({ query });
  },
  { deep: true },
);

const isHydrated = ref(false);

onMounted(() => {
  searchParams.value = {
    category: (route.query.category as string) ?? null,
    ageCategory: (route.query.age as AgePreset) ?? null,
    dateRange:
      route.query.start && route.query.end
        ? [new Date(route.query.start as string), new Date(route.query.end as string)]
        : null,
    participants: route.query.participants
      ? parseInt(route.query.participants as string, 10)
      : null,
  };

  isHydrated.value = true;
});

function onBook(id: number) {
  router.push({
    name: 'booking',
    params: { id },
    query: route.query,
  });
}

function onReadMore(id: number) {
  router.push({
    name: 'experience',
    params: { id },
    query: route.query,
  });
}
</script>

<template>
  <div class="min-h-screen p-8">
    <ArticleComponent />
    <SearchBar :categories="categories" v-model="searchParams" />
    <Slider :items="filteredExperiences" @book="onBook" @read-more="onReadMore" />
  </div>
</template>
