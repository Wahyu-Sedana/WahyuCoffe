<template>
  <div class="font-sans text-gray-800 bg-[#fefcf9]">
    <div
      v-if="showSplash"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-[#6b4c35] transition-opacity duration-700"
      :class="{ 'opacity-0': !showSplash }"
    >
      <div class="text-center text-white">
        <div class="mb-4 animate-pulse text-3xl font-bold tracking-widest">
          Wahyu Coffee
        </div>
        <CoffeeLoader />
      </div>
    </div>

    <router-view v-show="!showSplash" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import CoffeeLoader from "./components/CoffeLoader.vue";

const showSplash = ref(true);

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false;
  }, 3000);
});
</script>
