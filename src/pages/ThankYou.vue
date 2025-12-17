<script setup lang="ts"></script>

<template>
  <section class="min-h-screen flex items-start justify-center pt-20 px-6 text-white">
    <div
      class="w-full max-w-md rounded-3xl bg-[#313772]/70 backdrop-blur-md p-6 shadow-2xl ring-1 ring-white/10 text-center"
    >
      <h1 class="text-2xl font-bold mb-2">Thanks for the purchase!</h1>
      <p class="opacity-90 mb-6">Your payment is complete and your booking is confirmed.</p>

      <RouterLink
        to="/"
        class="inline-flex w-full justify-center rounded-2xl bg-black/80 hover:bg-black border border-black px-4 py-3 font-semibold transition active:scale-[0.98]"
      >
        Back to Home
      </RouterLink>
    </div>
  </section>
</template>
