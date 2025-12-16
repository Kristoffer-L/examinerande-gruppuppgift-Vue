<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useCartStore } from '../stores/cart';
import { resolveImage } from '../utils/helpers';

interface PricingTier {
  label: string;
  ageRange: string;
  minAge: number;
  maxAge?: number;
  price: number;
}

interface ExperienceItem {
  id: number;
  title: string;
  description: { type: string; content: string };
  image: string;
  category: string;
  pricing: PricingTier[];
}

const props = defineProps<{
  items: ExperienceItem[];
}>();

const emit = defineEmits<{
  (e: 'book', id: Number): void;
  (e: 'read-more', id: Number): void;
}>();

const currentIndex = ref<number>(0);

const visibleItems = computed(() => {
  return props.items.slice(currentIndex.value, currentIndex.value + 3);
});

// Reset index if items change
watch(
  () => props.items,
  () => {
    currentIndex.value = 0;
  },
);

function next() {
  if (currentIndex.value < props.items.length - 3) {
    currentIndex.value++;
  }
}

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
}

function onBook(item: ExperienceItem) {
  emit('book', item.id);
}
function onReadMore(item: ExperienceItem) {
  emit('read-more', item.id);
}
</script>

<template>
  <div class="slider">
    <button class="button" @click="prev">‹</button>

    <div v-for="item in visibleItems" :key="item.title" class="slider-item">
      <img :src="resolveImage(item.image)" :alt="item.title" class="img" />

      <div class="overlay">
        <h2 class="title">{{ item.title }}</h2>

        <div class="buttons">
          <router-link :to="`/booking/${item.id}`">
            <button class="action-btn" @click="onBook(item)">Book</button>
          </router-link>
          <router-link :to="`/experience/${item.id}`"
            ><button class="action-btn secondary">Read More</button></router-link
          >
        </div>
      </div>
    </div>

    <button class="button" @click="next">›</button>
  </div>
</template>

<style scoped>
.slider {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
}

.slider-item {
  height: 300px;
  width: 25%;
  border-radius: 30px;
  position: relative;
  display: flex;
  overflow: hidden;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
}

.overlay {
  position: relative;
  z-index: 2;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.title {
  color: white;
  text-shadow: 2px 2px 4px #000;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  user-select: none;
}

.buttons {
  display: flex;
  gap: 0.5rem;
}

.action-btn {
  background: #333;
  border: none;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  font-size: large;
}

.action-btn:hover {
  background: #eee;
}

.action-btn.secondary {
  background: 333;
}

.button {
  background: none;
  border: none;
  font-size: 5rem;
  cursor: pointer;
  color: #333;
}

.button:hover {
  color: #fff;
}
</style>
