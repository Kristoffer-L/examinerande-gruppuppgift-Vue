<script setup lang="ts">
import { useCartStore } from '../stores/cart';

defineProps<{ modelValue: boolean }>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const cart = useCartStore();

function resolveImage(path: string) {
  return new URL(`../assets/${path}`, import.meta.url).href;
}

function closeModal() {
  emit('update:modelValue', false);
}
</script>

<template>
  <div v-if="modelValue" class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-[#0b102e]/70 backdrop-blur-sm" @click="closeModal"></div>

    <div class="relative flex min-h-full items-center justify-center p-4">
      <div
        class="w-full max-w-md rounded-3xl border-2 border-black bg-[#313772] p-6 text-white shadow-2xl"
      >
        <h2 class="text-2xl font-bold mb-1">Payment Complete!</h2>
        <p class="opacity-90 mb-4">Thank you for your purchase. Here is your order summary:</p>

        <div class="rounded-2xl border border-black/40 bg-black/20 p-3 max-h-64 overflow-auto">
          <div v-if="cart.items.length === 0" class="opacity-80">Your cart is empty.</div>

          <div v-else class="divide-y divide-white/15">
            <div
              v-for="(item, index) in cart.items"
              :key="`${item.id}-${index}`"
              class="py-3 flex gap-3 items-center"
            >
              <img
                :src="resolveImage(item.image)"
                :alt="item.title"
                class="h-12 w-16 rounded-xl object-cover border border-black/30"
              />

              <div class="min-w-0 flex-1">
                <p class="font-semibold truncate">{{ item.title }}</p>
                <p class="text-sm opacity-90">
                  Persons: <span class="font-semibold">{{ item.participants }}</span>
                </p>
              </div>

              <div class="text-right text-sm">
                <p class="font-semibold">{{ item.price }} kr</p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="mt-4 flex items-center justify-between rounded-2xl border border-black/40 bg-black/20 px-4 py-3"
        >
          <span class="opacity-90 font-semibold">Total</span>
          <span class="text-lg font-bold">{{ cart.totalPrice }} kr</span>
        </div>

        <div class="mt-5 flex gap-3">
          <button
            type="button"
            @click="closeModal"
            class="flex-1 rounded-2xl bg-black/70 hover:bg-black border border-white/10 px-4 py-3 font-semibold transition active:scale-[0.98]"
          >
            OK
          </button>
          <button
            type="button"
            @click="
              cart.clearCart();
              closeModal();
            "
            class="flex-1 rounded-2xl bg-green-600 hover:bg-green-500 border border-black px-4 py-3 font-semibold transition active:scale-[0.98]"
          >
            Pay and clear cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <div class="bg-[#313772] rounded-2xl shadow-xl p-8 w-96 text-center">
      <div class="flex justify-center mb-4"></div>
      <h2 class="text-2xl font-semibold mb-2">Payment Complete!</h2>
      <p class="mb-6">Thank you for your purchase. Your transaction was successful.</p>
      <button
        @click="closeModal"
        class="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
      >
        OK
      </button>
    </div> -->
