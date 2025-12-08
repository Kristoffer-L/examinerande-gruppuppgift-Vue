<script setup lang="ts">
interface Props {
  image: string;
  title: string;
  desc: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'click'): void;
}>();
</script>

<template>
  {{ props.image }}
  {{ props.title }}
  {{ props.desc }}
  <button @click="$emit('click')">Read More</button>
  <button @click="$emit('click')">Book</button>
</template>
