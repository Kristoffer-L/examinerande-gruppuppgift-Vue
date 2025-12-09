<script setup lang="ts">
import { ref, computed } from "vue";
import { VueDatePicker } from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const destination = ref<string>("");
const category = ref<string>("");
const participants = ref<number | null>(null);
const ageCategory = ref<string>("");

// Date range
const selectedDateRange = ref<Date[] | null>(null);

const handleDateChange = (newDates: Date[] | null): void => {
  selectedDateRange.value = newDates;
  console.log("Date range selected:", newDates);
};

// Optional formatted outputs
const startDate = computed(
  () => selectedDateRange.value?.[0]?.toLocaleDateString() ?? "N/A"
);

const dueDate = computed(
  () => selectedDateRange.value?.[1]?.toLocaleDateString() ?? "N/A"
);

// Action when user clicks “Search”
const search = () => {
  const payload = {
    destination: destination.value,
    category: category.value,
    participants: participants.value,
    ageCategory: ageCategory.value,
    dateRange: selectedDateRange.value,
  };

  console.log("Search payload:", payload);
};
</script>

<template>
  <div
    class="flex gap-2 justify-between m-auto px-8 py-2 w-[80%] border-2 border-black"
  >
    <div class="flex flex-col">
      <label for="search-input">Destination</label>
      <input
        id="search-input"
        v-model="destination"
        class="bg-[#313772] p-2 rounded-lg placeholder:text-white"
        type="text"
        placeholder="Destination..."
      />
    </div>
    <div class="flex flex-col">
      <label for="category-input">Category</label>
      <select
        id="category-input"
        v-model="category"
        class="bg-[#313772] border rounded p-2"
      >
        <option value="">Select category range</option>
        <option value="sport">sport</option>
        <option value="history">history</option>
        <option value="winter">winter</option>
      </select>
    </div>
    <div>
      <label for="date-range-picker">Date</label>
      <VueDatePicker
        id="date-range-picker"
        v-model="selectedDateRange"
        range
        :enable-time-picker="false"
        class="w-full h-[80%] text-sm [--dp-background-color:#313772] [--dp-text-color:#ffffff] rounded-lg"
        @update:model-value="handleDateChange"
      />
    </div>
    <div class="flex flex-col">
      <label for="participants-input">Participants</label>
      <input
        id="participants-input"
        v-model.number="participants"
        class="bg-[#313772] p-2 rounded-lg placeholder:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        type="number"
        placeholder="participants..."
      />
    </div>
    <div class="flex flex-col">
      <label for="Age-select">Age Category</label>
      <select
        id="Age-select"
        v-model="ageCategory"
        class="bg-[#313772] border rounded p-2"
      >
        <option value="">Select age range</option>
        <option value="10-30">10 - 30</option>
        <option value="30-45">30 - 45</option>
        <option value="45-90">45 - 90</option>
      </select>
    </div>
    <button class="px-8 py-3 my-auto rounded-lg bg-[#5593f0]" @click="search">
      Sök
    </button>
  </div>

  <div v-if="startDate && dueDate" class="selected-dates-display">
    <p>
      Start Date: <strong>{{ startDate }}</strong>
    </p>
    <p>
      Due Date: <strong>{{ dueDate }}</strong>
    </p>
  </div>
</template>

<style scoped></style>
