<script setup lang="ts">
import ExperienceComponent from '../components/ExperienceComponent.vue';
import Slider from '../components/Slider.vue';
document.title = 'Galactic Getaways - Home';

import data from '../data/experiences.json';
const experiences = data.experiences;
</script>

<template>
  <div class="min-h-screen p-8">
    <!-- <ExperienceComponent :image="exp.image" :title="exp.title" :description="exp.description"
        @click="() => alert(`You clicked on ${exp.title}`)" /> -->
    <Slider :items="experiences" />
  </div>
</template>
