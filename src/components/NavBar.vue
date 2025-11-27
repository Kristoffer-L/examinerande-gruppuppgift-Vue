<script setup lang="ts">
import { RouterLink } from "vue-router";
import BasketIcon from "../icons/BasketIcon.vue";
</script>

<template>
  <nav class="px-6 py-3 flex items-center">
    <img src="../assets/Logo.png" alt="Logo" class="mr-auto" />
    <RouterLink to="/" class="hover:text-gray-300 font-semibold text-2xl mr-2"
      >Home</RouterLink>
          <RouterLink to="/basket" class="ml-2 mr-2"><BasketIcon /> </RouterLink>
  </nav>
</template>
