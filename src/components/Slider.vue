<script setup lang="ts">
import { ref, computed } from "vue";

interface EventItem {
  title: string;
  desc: string;
  image: string;
}

const props = defineProps<{
  items: EventItem[];
}>();

const currentIndex = ref<number>(0);

// Always show 3 items
const visibleItems = computed<EventItem[]>(() => {
  return props.items.slice(currentIndex.value, currentIndex.value + 3);
});

// button actions
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
</script>

<template>
  <div class="slider">
    <button class="button" @click="prev"><</button>
    <div v-for="(item, index) in visibleItems" :key="index" class="slider-item">
      <img :src="item.image" :alt="item.title" class="img" />
      <h2 class="title">{{ item.title }}</h2>
    </div>
    <button class="button" @click="next">></button>
  </div>
</template>

<style scoped>
.slider {
  display: flex;
  justify-content: space-around;
}
.slider-item {
  height: 300px;
  width: 25%;
  border-radius: 30px;
  position: relative;
  display: flex;
  overflow: hidden;
}

.button {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  align-self: center;
}
.button:hover {
  background-color: #eee;
  cursor: pointer;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
}

.title {
  position: relative;
  margin: auto;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
</style>
