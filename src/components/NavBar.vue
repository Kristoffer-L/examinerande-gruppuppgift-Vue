<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="bg-gray-900 text-white px-6 py-3 flex items-center gap-6">
    <RouterLink to="/" class="hover:text-gray-300">Home</RouterLink>
    <RouterLink to="/booking" class="hover:text-gray-300">Booking</RouterLink>
  </nav>
</template>
