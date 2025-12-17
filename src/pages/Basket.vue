<script setup lang="ts">
import { ref } from 'vue';
import ConfirmModal from '../components/ConfirmModal.vue';
import CartSummary from '../components/CartSummary.vue';
document.title = 'Simple Page | My App';

// Refs for each input
const email = ref('');
const firstName = ref('');
const lastName = ref('');
const city = ref('');
const postalCode = ref('');

const showModal = ref(false);

function openModal() {
  showModal.value = true;
}

// Example submit handler
const submitForm = () => {
  console.log('Email:', email.value);
  console.log('First name:', firstName.value);
  console.log('Last name:', lastName.value);
  console.log('City:', city.value);
  console.log('Postal code:', postalCode.value);
  openModal();
};
</script>

<template>
  <div class="min-h-screen flex gap-4 items-start pt-2 relative">
    <div
      class="w-[100%] h-[500px] mt-2 rounded-3xl bg-[#313772]/40 backdrop-blur-md shadow-xl ring-1 ring-black/10"
    >
      <div class="mx-4 pb-6 pt-4 border-b border-white/10">
        <h2 class="text-xl font-bold mb-2">Contact</h2>
        <input
          v-model="email"
          class="bg-[#313772] p-2 rounded-lg placeholder:text-white text-lg px-4 py-3"
          type="text"
          placeholder="Your email address"
        />
      </div>
      <div class="mx-4 pb-6 pt-4">
        <h2 class="text-xl font-bold mb-3">Delivery adress</h2>

        <div class="flex justify-between">
          <div class="flex flex-col w-[45%]">
            <label for="">First name</label>
            <input
              v-model="firstName"
              class="bg-[#313772] p-2 rounded-lg placeholder:text-white text-lg px-4 py-3"
              type="text"
              placeholder="first name"
            />
          </div>
          <div class="flex flex-col w-[45%]">
            <label for="">Last name</label>
            <input
              v-model="lastName"
              class="bg-[#313772] p-2 rounded-lg placeholder:text-white text-lg px-4 py-3"
              type="text"
              placeholder="last name"
            />
          </div>
        </div>
        <div class="flex justify-between mt-4 mb-6">
          <div class="flex flex-col w-[45%]">
            <label for="">city</label>
            <input
              v-model="city"
              class="bg-[#313772] p-2 rounded-lg placeholder:text-white text-lg px-4 py-3"
              type="text"
              placeholder="city"
            />
          </div>
          <div class="flex flex-col w-[45%]">
            <label for="">Postal code</label>
            <input
              v-model="postalCode"
              class="bg-[#313772] p-2 rounded-lg placeholder:text-white text-lg px-4 py-3"
              type="text"
              placeholder="postal code"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="w-[500px] px-4 py-2">
      <CartSummary />
      <div class="flex justify-center">
        <button
          @click="submitForm"
          class="font-bold text-lg bg-[#313772] px-8 py-3 rounded-xl mt-4"
        >
          Submit
        </button>
        <ConfirmModal
          v-model="showModal"
          :email="email"
          :first-name="firstName"
          :last-name="lastName"
          :city="city"
          :postal-code="postalCode"
        />
      </div>
    </div>
  </div>
  <div>
    <router-link
      to="/"
      class="inline-flex items-center justify-center mt-4 rounded-2xl bg-black/80 hover:bg-black text-white border border-black px-4 py-3 font-semibold transition active:scale-[0.98]"
      >Go back to Home</router-link
    >
  </div>
</template>
