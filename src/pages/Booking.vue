<script setup lang="ts">
document.title = 'Booking Page';

import { computed, h, ref, watchEffect } from 'vue';
import data from '../data/experiences.json';
import { resolveImage } from '../utils/resolveImage';
import { VueDatePicker } from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import FormInput from '../components/FormInput.vue';
import { Route } from 'lucide-vue-next';

const props = defineProps<{
  id: string | number;
}>();

const experiences = data.experiences;

const experienceId = Number(props.id);

const experience = computed(() => experiences.find((exp) => exp.id === experienceId));

const selectedDateRange = ref<Date[] | null>(null);
const participants = ref<Record<number, number>>({});

const handleDateChange = (newDates: Date[] | null): void => {
  selectedDateRange.value = newDates;
  console.log('Date range selected:', newDates);
};

watchEffect(() => {
  const pricing = experience.value?.pricing;
  if (!pricing) return;

  pricing.forEach((_, index) => {
    participants.value[index] ??= 0;
  });
});
</script>

<template>
  <div class="min-h-screen p-8 grid grid-cols-2 gap-10 justify-items-center grid-cols-[2fr,1fr]">
    <div class="w-full">
      <h1 class="text-2xl font-bold mb-4">{{ experience?.title }}</h1>
      <form class="flex flex-col gap-4">
        <VueDatePicker
          id="date-range-picker"
          v-model="selectedDateRange"
          range
          :enable-time-picker="false"
          class="datepicker w-[50%]"
          @update:model-value="handleDateChange"
        />
        <div
          v-for="(tier, index) in experience?.pricing"
          :key="tier.label"
          class="grid grid-cols-4 items-center grid-cols-[1fr,1fr,1fr,1fr] gap-4 border-b pb-4"
        >
          <p class="font-semibold">{{ tier.label }}</p>
          <p>({{ tier.ageRange }})</p>
          <p>{{ tier.price }} ESC</p>
          <FormInput
            :id="`participants-${tier.label}`"
            :model-value="participants[index] ?? 0"
            @update:model-value="participants[index] = $event"
            :min="0"
          />
        </div>
        <h2 class="col-span-4 font-bold mt-4 mb-2">Add-ons</h2>

        <div
          v-for="(addon, id) in experience?.addons"
          :key="id"
          class="grid grid-cols-4 items-center grid-cols-[1fr,1fr,1fr,1fr] gap-4 border-b pb-4"
        >
          <p class="font-semibold">{{ addon.name }}</p>
          <p class="italic text-sm">{{ addon.description }}</p>
          <p>{{ addon.price }} ESC</p>
          <input type="checkbox" :id="`addon-${id}`" class="w-4 h-4" />
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white rounded p-2 mt-4 hover:bg-blue-600 transition w-[50%]"
        >
          Confirm Booking
        </button>
        <RouterLink to="/" class="flex items-center gap-2 text-gray-600 hover:text-gray-800 mt-2">
          <Route class="w-4 h-4" />
          <span>Back to Home</span>
        </RouterLink>
      </form>
    </div>
    <img
      v-if="experience"
      :src="resolveImage(experience.image)"
      :alt="experience.title"
      class="mb-6 rounded-lg shadow-lg"
    />
  </div>
</template>
