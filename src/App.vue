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
  <div>
    <Slider :items="Event" />
  </div>
</template>

<style scoped></style>
