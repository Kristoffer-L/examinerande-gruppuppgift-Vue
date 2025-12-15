<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { VueDatePicker } from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import type { SearchParams } from '../types/types';
import { AGE_PRESETS, type AgePreset } from '../types/consts';

const searchTerms = ref<SearchParams>({
  category: '',
  dateRange: null,
  ageCategory: null,
});

const props = defineProps<{
  modelValue: SearchParams;
  categories: string[];
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: SearchParams): void;
}>();

const clearSearch = () => {
  searchTerms.value.category = '';
  searchTerms.value.dateRange = null;
  searchTerms.value.ageCategory = null;
};

watch(searchTerms, emit.bind(null, 'update:modelValue'), { deep: true });

const ageKeys = Object.keys(AGE_PRESETS) as AgePreset[];
</script>

<template>
  <div class="filter-container">
    <div class="field">
      <label for="category-input">Category</label>
      <select id="category-input" v-model="searchTerms.category" class="input">
        <option value="">Select Category</option>
        <option v-for="cat in categories" :value="cat">{{ cat }}</option>
      </select>
    </div>

    <div class="field">
      <label for="date-range-picker">Date</label>
      <VueDatePicker
        id="date-range-picker"
        v-model="searchTerms.dateRange"
        range
        :enable-time-picker="false"
        class="datepicker"
      />
    </div>

    <div class="field">
      <label for="Age-select">Age Category</label>
      <select id="Age-select" v-model="searchTerms.ageCategory" class="input">
        <option v-for="age in ageKeys" :key="age" :value="age">{{ age }}</option>
      </select>
    </div>

    <div class="field">
      <button @click="clearSearch" class="clear-button">Clear Filters</button>
    </div>
  </div>
</template>

<style scoped>
.filter-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  margin: auto;
  padding: 1rem 2rem;
  width: 90%;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: linear-gradient(180deg, rgba(25, 25, 40, 0.25), rgba(30, 30, 55, 0.25));
  padding: 0.6rem 0.9rem;
  border-radius: 18px;
  min-width: 180px;
}

label {
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
}

.input {
  background-color: #222430;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 10px 12px;
  color: #fff;
  outline: none;
  box-shadow: 0 6px 18px rgba(15, 18, 40, 0.35);
}

.input:focus {
  box-shadow: 0 8px 22px rgba(25, 40, 120, 0.28);
  border-color: rgba(85, 147, 240, 0.45);
}

.datepicker {
  width: 100%;
  height: auto;
  font-size: 0.9rem;
  --dp-background-color: #2a2f54;
  --dp-text-color: #ffffff;
  border-radius: 12px;
}

.clear-button {
  padding: 10px 18px;
  align-self: center;
  background: #333;
  border-radius: 20px;
  border: none;
  color: white;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(15, 18, 40, 0.35);
}

.clear-button:hover {
  background: #eee;
  color: #111;
}
</style>
