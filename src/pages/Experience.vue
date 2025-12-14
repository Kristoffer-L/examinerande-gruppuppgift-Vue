<script setup lang="ts">
import { computed } from 'vue';
import data from '../data/experiences.json';
import MarkdownIt from 'markdown-it';
import { resolveImage } from '../utils/resolveImage';

const props = defineProps<{
  id: string | number;
}>();
const md = new MarkdownIt();

const experiences = data.experiences;

const experienceId = Number(props.id);

const experience = computed(() => experiences.find((exp) => exp.id === experienceId));

const renderedDescription = computed(() => {
  const exp = experience.value;
  if (!exp || !exp.description) return '';
  return md.render(exp.description.content);
});
</script>

<template>
  <div class="min-h-screen px-8 py-12 text-white">
    <div v-if="experience" class="max-w-5xl mx-auto">
      <div class="rounded-3xl overflow-hidden shadow-2xl mb-10 relative">
        <img
          :src="resolveImage(experience.image)"
          :alt="experience.title"
          class="w-full h-[450px] object-cover"
        />

        <h1
          class="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white text-center drop-shadow-2xl px-6"
        >
          {{ experience.title }}
        </h1>
      </div>
      <div class="bg-[#1a1f4d]/60 p-8 rounded-3xl shadow-xl border border-white/10">
        <p
          class="p-8 rounded-3xl shadow-xl border border-white/10 prose prose-invert max-w-none"
          v-html="renderedDescription"
        />

        <div class="flex gap-6 mt-10 justify-center">
          <router-link :to="`/booking/${experience.id}`">
            <button
              class="py-3 rounded-xl bg-[#5593f0] hover:bg-[#78aaff] transition font-semibold shadow-lg p-4"
            >
              Book Now
            </button>
          </router-link>

          <router-link :to="'/'">
            <button
              class="py-3 rounded-xl bg-[#313772] hover:bg-[#4b52a1] transition font-semibold shadow-lg p-4"
            >
              Back to Experiences
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-xl">
      <p>Experience not found.</p>
    </div>
  </div>
</template>
