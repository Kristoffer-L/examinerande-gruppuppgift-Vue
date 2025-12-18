<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue';
import data from '../data/experiences.json';
import { resolveImage } from '../utils/helpers';
import { VueDatePicker } from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import FormInput from '../components/FormInput.vue';
import { Route } from 'lucide-vue-next';
import { useCartStore } from '../stores/cart';
import { useRoute } from 'vue-router';

const route = useRoute();

const cart = useCartStore();

const props = defineProps<{
  id: string | number;
}>();

const experiences = data.experiences;

const experienceId = Number(props.id);

const experience = computed(() => experiences.find((exp) => exp.id === experienceId));

const selectedAddons = ref<Set<string>>(new Set());

document.title = (experience.value?.title || 'Experience') + ' - Galactic Getaways';

const selectedDateRange = ref<Date[] | null>(null);
const participants = ref<Record<number, number>>({});

onMounted(() => {
  const { start, end, participants: participantsAmount } = route.query;

  if (start && end) {
    selectedDateRange.value = [new Date(start as string), new Date(end as string)];
  }
  if (participantsAmount) {
    const totalParticipants = parseInt(participantsAmount as string, 10);
    participants.value[1] = totalParticipants;
  }
});

const handleDateChange = (newDates: Date[] | null): void => {
  selectedDateRange.value = newDates;
};

function onAddonChange(event: Event, addonId: string) {
  const input = event.target as HTMLInputElement;

  if (input.checked) {
    selectedAddons.value.add(addonId);
  } else {
    selectedAddons.value.delete(addonId);
  }
}

function onSubmit() {
  const pricing = experience.value?.pricing ?? [];
  const addons = experience.value?.addons ?? [];

  const participantsTotal = pricing.reduce((sum, tier, index) => {
    const count = participants.value[index] ?? 0;
    return sum + count * tier.price;
  }, 0);

  const addonsTotal = addons.reduce((sum, addon) => {
    return selectedAddons.value.has(addon.id) ? sum + addon.price : sum;
  }, 0);

  const total = participantsTotal + addonsTotal;

  cart.addItem({
    id: experience.value?.id ?? 0,
    title: experience.value?.title ?? '',
    image: experience.value?.image ?? '',
    participants: Object.values(participants.value).reduce((a, b) => a + b, 0),
    price: total,
  });
}

watchEffect(() => {
  const pricing = experience.value?.pricing;
  if (!pricing) return;

  pricing.forEach((_, index) => {
    participants.value[index] ??= 0;
  });
});
</script>

<template>
  <div
    class="min-h-screen p-8 grid grid-cols-2 gap-10 justify-items-center items-start grid-cols-[2fr,1fr]"
  >
    <div
      class="w-full rounded-3xl bg-[#313772]/40 backdrop-blur-md shadow-xl ring-1 ring-white/10 p-6"
    >
      <h1 class="text-2xl font-bold mb-4">{{ experience?.title }}</h1>
      <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
        <VueDatePicker
          id="date-range-picker"
          v-model="selectedDateRange"
          range
          :enable-time-picker="false"
          class="datepicker w-[50%]"
          @update:model-value="handleDateChange"
          placeholder="Select date here"
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
          class="grid grid-cols-4 items-center grid-cols-[1fr,3fr,1fr,1fr] gap-4 border-b pb-4"
        >
          <p class="font-semibold">{{ addon.name }}</p>
          <p class="italic text-sm">{{ addon.description }}</p>
          <p>{{ addon.price }} ESC</p>
          <input
            type="checkbox"
            :id="`addon-${addon.id}`"
            :checked="selectedAddons.has(addon.id)"
            @change="onAddonChange($event, addon.id)"
            class="w-4 h-4"
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white rounded p-2 mt-4 hover:bg-blue-600 transition w-[50%]"
        >
          Confirm Booking
        </button>
        <RouterLink
          to="/"
          class="mt-3 inline-flex w-fit items-center gap-2 rounded-2xl bg-black/80 hover:bg-black text-white border border-black px-4 py-3 font-semibold transition active:scale-[0.98]"
        >
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

<style scoped>
.datepicker {
  width: 100%;
  height: 80%;

  font-size: 0.875rem;
  --dp-background-color: #313772;
  --dp-text-color: #ffffff;
  border-radius: 8px;
}
</style>
