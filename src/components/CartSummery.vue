<script setup lang="ts">
import { Users } from 'lucide-vue-next';
import { Minus } from 'lucide-vue-next';
import { useCartStore } from '../stores/cart';

const cart = useCartStore();
</script>

<template>
  <div v-for="(item, index) in cart.items" :key="index">
    <div class="flex">
      <img :src="item.image" :alt="item.title" class="h-auto w-[50%] rounded-lg" />
      <div
        @click="cart.removeItem(item.id)"
        class="bg-black rounded-[28px] h-7 w-15 flex justify-center items-center m-auto gap-5"
      >
        <Minus class="cursor-pointer text-red-500">-</Minus>
      </div>
    </div>
    <h2 class="font-bold text-lg my-auto">{{ item.title }}</h2>
    <div class="flex justify-between mb-6">
      <div class="flex">
        <Users />
        <span>{{ item.participants }}</span>
      </div>
      <span>price: {{ item.price }} kr</span>
    </div>
  </div>
  <button @click="cart.clearCart()" class="mx-4">reset</button>
  <div class="flex justify-between mx-4">
    <p>total</p>
    <p>{{ cart.totalPrice }} kr</p>
  </div>
</template>
