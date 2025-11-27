<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#0a061a] text-[#dad9da]">
    <NavBar />

    <main class="flex-1 p-6">
      <router-view />
    </main>
  </div>
</template>
