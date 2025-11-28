<script setup lang="ts">
import { RouterLink } from "vue-router";
import BasketIcon from "../icons/BasketIcon.vue";
</script>

<template>
  <nav class="px-6 py-3 flex items-center">
    <img src="../assets/Logo.png" alt="Logo" class="" />
    <RouterLink to="/" class="hover:text-gray-300 font-medium text-xl mr-2 ml-auto">Home</RouterLink>
    <RouterLink to="/" class="hover:text-gray-300 font-medium text-xl mr-2  ">About</RouterLink>
    <RouterLink to="/" class="hover:text-gray-300 font-medium text-xl mr-2  ">FAQ</RouterLink>
    <RouterLink to="/" class="hover:text-gray-300 font-medium text-xl mr-2  mr-auto">Contact</RouterLink>
    <RouterLink to="/basket" class="ml-2 mr-2">
      <BasketIcon />
    </RouterLink>
  </nav>
</template>
