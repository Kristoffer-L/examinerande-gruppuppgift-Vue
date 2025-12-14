<script setup lang="ts">
import { toRef } from 'vue';
const props = withDefaults(
  defineProps<{
    modelValue: number;
    min?: number;
    max?: number;
  }>(),
  {
    min: 0,
  },
);
const modelValue = toRef(props, 'modelValue');
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void;
}>();

const decrease = () => {
  if (props.modelValue > props.min) {
    emit('update:modelValue', props.modelValue - 1);
  }
};

const increase = () => {
  if (props.max === undefined || props.modelValue < props.max) {
    emit('update:modelValue', props.modelValue + 1);
  }
};
</script>

<template>
  <div class="flex items-center gap-2">
    <button
      type="button"
      @click="decrease"
      class="w-4 h-4 flex items-center justify-center rounded border text-lg font-bold hover:bg-gray-100"
    >
      −
    </button>

    <p class="text-xl">
      {{ modelValue }}
    </p>

    <button
      type="button"
      @click="increase"
      class="w-4 h-4 flex items-center justify-center rounded border text-lg font-bold hover:bg-gray-100"
    >
      +
    </button>
  </div>
</template>
