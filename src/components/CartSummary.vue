<script setup lang="ts">
import { Users } from 'lucide-vue-next';
import { Minus, Plus, Trash2 } from 'lucide-vue-next';
import { useCartStore } from '../stores/cart';

const cart = useCartStore();

function resolveImage(path: string) {
  return new URL(`../assets/${path}`, import.meta.url).href;
}
</script>

<template>
  <section
    class="rounded-3xl border-2 border-black bg-[#313772]/70 backdrop-blur-md p-4 text-white shadow-lg"
  >
    <h2 class="text-xl font-bold mb-4">Summary</h2>
    <div v-for="(item, index) in cart.items" :key="`${item.id}-${index}`" class="py-4">
      <div class="flex">
        <img :src="resolveImage(item.image)" :alt="item.title" class="h-auto w-[33%] rounded-lg" />

        <div class="mt-3 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <button
              type="button"
              @click="cart.removeOnePerson(index)"
              class="h-9 w-9 rounded-xl bg-black/80 hover:bg-black flex items-center justify-center border border-black"
              aria-label="Remove one person from booking"
              title="Remove one person from booking"
            >
              <Minus class="h-5 w-5 text-red-400" />
            </button>

            <button
              type="button"
              @click="cart.addOnePerson(index)"
              class="h-9 w-9 rounded-xl bg-black/80 hover:bg-black flex items-center justify-center border border-black"
              aria-label="Add a person"
              title="Add a person"
            >
              <Plus class="h-5 w-5 text-green-300" />
            </button>
          </div>

          <button
            type="button"
            @click="cart.removeItem(index)"
            class="h-9 px-3 rounded-xl bg-red-600/90 hover:bg-red-600 flex items-center gap-2 border border-black"
            aria-label="Remove booking from cart"
            title="Remove booking from cart"
          >
            <Trash2 class="h-4 w-4" />
            <span class="text-sm font-semibold">Remove</span>
          </button>
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
    <button
      type="button"
      @click="cart.clearCart()"
      class="mt-4 w-full rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 px-4 py-3 font-semibold tracking-wide shadow-sm active:scale-[0.98] transition"
    >
      Reset Cart
    </button>
    <div
      class="mt-3 flex justify-between items-center rounded-2xl bg-black/30 border border-black px-4 py-3"
    >
      <p class="opacity-90 font-semibold">Total</p>
      <p>{{ cart.totalPrice }} kr</p>
    </div>
  </section>
</template>
