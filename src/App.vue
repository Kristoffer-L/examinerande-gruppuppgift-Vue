<script setup lang="ts">
import Slider from "./components/Slider.vue";

const Event = [
  { title: "Skidor", desc: "Resa till Åre", image: "skidor.jpg" },
  { title: "Semester", desc: "Resa till Grekland", image: "skidor.jpg" },
  { title: "Konsert", desc: "Coldplay i Stockholm", image: "skidor.jpg" },
  { title: "Skidor", desc: "Resa till Åre", image: "skidor.jpg" },
  { title: "Semester", desc: "Resa till Grekland", image: "skidor.jpg" },
];
</script>

<template>
  <div >
    <Slider :items="Event" />
  </div>
<div class="bg-red-500 text-white p-4">
  Tailwind works!
</div>
</template>

<style scoped></style>
