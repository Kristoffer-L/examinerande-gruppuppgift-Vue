<script setup lang="ts">
import { RouterLink } from 'vue-router';
import BasketIcon from '../icons/BasketIcon.vue';
import { useCartStore } from '../stores/cart';

const cart = useCartStore();
</script>

<template>
  <nav class="px-6 py-3 flex items-center">
    <img src="../assets/Logo.png" alt="Logo" class="" />
    <RouterLink to="/" class="hover:text-gray-300 font-medium text-xl mr-2 ml-auto"
      >Home</RouterLink
    >
    <RouterLink to="/" class="hover:text-gray-300 font-medium text-xl mr-2">About</RouterLink>
    <RouterLink to="/" class="hover:text-gray-300 font-medium text-xl mr-2">FAQ</RouterLink>
    <RouterLink to="/" class="hover:text-gray-300 font-medium text-xl mr-2 mr-auto"
      >Contact</RouterLink
    >

    <RouterLink to="/basket" class="relative ml-2 mr-2">
      <BasketIcon />
      <span
        v-if="cart.itemCount > 0"
        class="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 min-w-[1.25rem] flex items-center justify-center px-1"
      >
        {{ cart.itemCount }}
      </span>
    </RouterLink>
  </nav>
</template>
