<script setup lang="ts">
import { ref, computed } from "vue";
import { VueDatePicker } from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

// It's either null initially, or an array containing two Date objects.
const selectedDateRange = ref<Date[] | null>(null);

// Define the type for the function argument when the date changes
const handleDateChange = (newDates: Date[] | null): void => {
  console.log("Date range selected:", newDates);
};

// Helper computed properties to display formatted dates if needed
const startDate = computed((): string => {
  if (selectedDateRange.value && selectedDateRange.value[0]) {
    return selectedDateRange.value[0].toLocaleDateString();
  }
  return "N/A";
});

const dueDate = computed((): string => {
  if (selectedDateRange.value && selectedDateRange.value[1]) {
    return selectedDateRange.value[1].toLocaleDateString();
  }
  return "N/A";
});
</script>

<template>
  <div class="flex m-auto px-4 py-2 w-[80%] border-2 border-black">
    <div class="flex flex-col">
      <label for="search-input">äventyr</label>
      <input id="search-input" type="text" placeholder="Äventyr..." />
    </div>
    <div class="flex flex-col">
      <label for="category-input">kategori</label>
      <input id="category-input" type="text" placeholder="Kategori..." />
    </div>
    <div class="">
      <label for="date-range-picker">Datum</label>
      <VueDatePicker
        id="date-range-picker"
        class="w-full"
        v-model="selectedDateRange"
        range
        :enable-time-picker="false"
        @update:model-value="handleDateChange"
      />
    </div>
    <button class="px-4 py-2 bg-b">Sök</button>
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
