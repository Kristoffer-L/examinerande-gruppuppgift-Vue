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
  <div class="min-h-screen flex gap-4">
    <div
      class="w-[100%] rounded-3xl bg-[#313772]/40 backdrop-blur-md shadow-xl ring-1 ring-white/10"
    >
      <div class="border-b-2 border-black mx-4 pb-4">
        <h2>Contact</h2>
        <input
          v-model="email"
          class="bg-[#313772] p-2 rounded-lg placeholder:text-white"
          type="text"
          placeholder="Your email address"
        />
      </div>
      <div class="flex flex-col mx-4">
        <h2>Delivery adress</h2>
        <div class="flex justify-between">
          <div class="flex flex-col w-[45%]">
            <label for="">First name</label>
            <input
              v-model="firstName"
              class="bg-[#313772] p-2 rounded-lg placeholder:text-white"
              type="text"
              placeholder="first name"
            />
          </div>
          <div class="flex flex-col w-[45%]">
            <label for="">Last name</label>
            <input
              v-model="lastName"
              class="bg-[#313772] p-2 rounded-lg placeholder:text-white"
              type="text"
              placeholder="last name"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <label for="">city</label>
          <input
            v-model="city"
            class="bg-[#313772] p-2 rounded-lg placeholder:text-white"
            type="text"
          />
        </div>
        <div class="flex flex-col">
          <label for="">Postal code</label>
          <input
            v-model="postalCode"
            class="bg-[#313772] p-2 rounded-lg placeholder:text-white"
            type="text"
          />
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
        <ConfirmModal v-model="showModal" />
      </div>
    </div>
  </div>
  <div>
    <router-link to="/">Go back to Home</router-link>
  </div>
</template>
