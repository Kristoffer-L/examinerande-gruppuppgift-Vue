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
  <nav>
    <ul class="navUl">
      <li><a href="/tryit/html">Home</a></li>
      <li><a href="/tryit/css">Adventures</a></li>
      <li><a href="/tryit/js">About</a></li>
      <li><a href="/tryit/vue">Contact</a></li>
    </ul>
  </nav>
  <div>
    <Slider :items="Event" />
  </div>
<div class="bg-red-500 text-white p-4">
  Tailwind works!
</div>
</template>

<style scoped>
.navUl {
  display: flex;
  gap: 20px;
  list-style-type: none;
  color: black;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.navUl li {
  border: 1px solid black;
  padding-inline: 10px;
  padding-block: 5px;
}

.navUl a {
  text-decoration: none;
  color: black;
}
.mainContainer {
  height: 100%;
  width: 100%;
  background-color: lightgray;
  padding: 20px;
}
</style>
