<template>
  <div class="bg-white rounded-xl shadow p-4 text-center">
    <img :src="img" class="rounded-lg h-40 w-full object-cover mb-4" />
    <h3 class="text-xl font-bold text-[#3b2f27]">{{ title }}</h3>
    <p class="text-gray-600 text-sm mt-2">{{ desc }}</p>
    <button
      v-if="buttonText"
      class="mt-3 bg-[#4e3629] text-white px-4 py-1 rounded-full text-sm hover:bg-[#3e2c20] transition"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  img: String,
  desc: String,
  buttonText: String,
});
</script>
