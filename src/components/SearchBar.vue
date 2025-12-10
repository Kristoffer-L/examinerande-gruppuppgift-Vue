<script setup lang="ts">
import { ref, computed } from 'vue';
import { VueDatePicker } from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const destination = ref<string>('');
const category = ref<string>('');
const participants = ref<number | null>(null);
const ageCategory = ref<string>('');

// Date range
const selectedDateRange = ref<Date[] | null>(null);

const props = defineProps<{
  categories: String[];
}>();

const handleDateChange = (newDates: Date[] | null): void => {
  selectedDateRange.value = newDates;
  console.log('Date range selected:', newDates);
};

const search = () => {
  const payload = {
    category: category.value,
    participants: participants.value,
    ageCategory: ageCategory.value,
    dateRange: selectedDateRange.value,
  };

  console.log('Search payload:', payload);
};
</script>

<template>
  <div class="filter-container">
    <div class="field">
      <label for="category-input">Category</label>
      <select id="category-input" v-model="category" class="input">
        <option value="">Select Category</option>
        <option v-for="cat in categories" :value="cat">{{ cat }}</option>
      </select>
    </div>

    <div class="field">
      <label for="date-range-picker">Date</label>
      <VueDatePicker
        id="date-range-picker"
        v-model="selectedDateRange"
        range
        :enable-time-picker="false"
        class="datepicker"
        @update:model-value="handleDateChange"
      />
    </div>

    <div class="field">
      <label for="Age-select">Age Category</label>
      <select id="Age-select" v-model="ageCategory" class="input">
        <option value="">All Ages</option>
        <option value="12">12+</option>
        <option value="16">16+</option>
      </select>
    </div>

    <button class="search-button" @click="search">Search</button>
  </div>
</template>

<style scoped>
.filter-container {
  display: flex;
  justify-content: space-around;
  margin: auto;
  padding: 0.5rem 2rem;
  width: 80%;
}

.field {
  display: flex;
  flex-direction: column;
}

.input {
  background-color: #313772;
  border: 1px solid #444;
  border-radius: 6px;
  padding: 8px;
  color: white;
}

.datepicker {
  width: 100%;
  height: 80%;
  font-size: 0.875rem;
  --dp-background-color: #313772;
  --dp-text-color: #ffffff;
  border-radius: 8px;
}

.search-button {
  padding: 12px 32px;
  margin: auto 0;
  background-color: #5593f0;
  border-radius: 10px;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
}

.search-button:hover {
  background-color: #6aa1f3;
}
</style>
