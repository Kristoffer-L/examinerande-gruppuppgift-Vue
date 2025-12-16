<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

function closeModal() {
  emit('update:modelValue', false);
}
</script>

<template>
  <div
    v-if="modelValue"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-[#313772] rounded-2xl shadow-xl p-8 w-96 text-center">
      <div class="flex justify-center mb-4"></div>
      <h2 class="text-2xl font-semibold mb-2">Payment Complete!</h2>
      <p class="mb-6">Thank you for your purchase. Your transaction was successful.</p>
      <button
        @click="closeModal"
        class="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
      >
        OK
      </button>
    </div>
  </div>
</template>
