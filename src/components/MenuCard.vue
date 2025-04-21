<template>
  <div
    class="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center"
  >
    <img :src="img" alt="" class="rounded-lg h-40 w-full object-cover mb-4" />
    <h3 class="text-xl font-bold text-[#3b2f27]">{{ title }}</h3>
    <p class="text-gray-600 text-sm mt-1">{{ desc }}</p>
    <p class="text-[#6b4c35] font-semibold text-lg mt-3">{{ price }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  img: string;
  desc: string;
  price: string;
}>();
</script>
