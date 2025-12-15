<script setup lang="ts">
import { resolveImage } from '../utils/resolveImage';

interface Props {
  image: string;
  title: string;
  description: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'click'): void;
}>();
</script>

<template>
  <div class="experience-card">
    <img :src="resolveImage(image)" class="w-full h-auto" />
    <div>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    <button @click="$emit('click')">Read More</button>
    <button @click="$emit('click')">Book</button>
  </div>
</template>

<style scoped>
.experience-card {
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.experience-card img {
  border-radius: 8px;
}
.experience-card h2 {
  margin-top: 12px;
  font-size: 1.5em;
}
.experience-card p {
  margin: 12px 0;

  color: #666;
}
.experience-card button {
  margin: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
.experience-card button:hover {
  background-color: #0056b3;
}
</style>
