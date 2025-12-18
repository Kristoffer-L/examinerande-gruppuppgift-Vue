<script setup lang="ts">
import { useCartStore } from '../stores/cart';
import { useRouter } from 'vue-router';

const props = defineProps<{
  modelValue: boolean;
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  postalCode: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const cart = useCartStore();
const router = useRouter();

function resolveImage(path: string) {
  return new URL(`../assets/${path}`, import.meta.url).href;
}

function closeModal() {
  emit('update:modelValue', false);
}

function confirmPurchase() {
  emit('update:modelValue', false);
  cart.clearCart();
  router.push('/thank-you');
}
</script>

<template>
  <div v-if="props.modelValue" class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-[#0b102e]/70 backdrop-blur-sm" @click="closeModal"></div>

    <div class="relative flex min-h-full items-center justify-center p-4">
      <div
        class="w-full max-w-md rounded-3xl border-2 border-black bg-[#313772] p-6 text-white shadow-2xl"
      >
        <h2 class="text-2xl font-bold mb-1">Confirm Purchase</h2>
        <p class="opacity-90 mb-4">
          Please check so the order is correct before completing payment. Here is your order
          summary:
        </p>

        <div class="rounded-2xl border border-black/40 bg-black/20 p-3 mb-4">
          <p class="text-sm font-semibold text-white/90 mb-2">Customer details</p>

          <div class="text-sm text-white/90 space-y-1">
            <p>
              <span class="text-white/70">Name: </span>
              <span class="font-semibold"> {{ props.firstName }} {{ props.lastName }} </span>
            </p>

            <p>
              <span class="text-white/70">Email: </span>
              <span class="font-semibold"> {{ props.email }} </span>
            </p>

            <p>
              <span class="text-white/70">Address: </span>
              <span class="font-semibold"> {{ props.city }}, {{ props.postalCode }} </span>
            </p>
          </div>
        </div>

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
            Cancel
          </button>

          <button
            type="button"
            :disabled="cart.items.length === 0"
            @click="confirmPurchase"
            class="flex-1 rounded-2xl bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed border border-black px-4 py-3 font-semibold transition active:scale-[0.98]"
          >
            Confirm & Pay
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
