<template>
  <header
    class="sticky top-0 z-50 backdrop-blur bg-white/80 shadow-sm bg-[#4a2e1f]"
  >
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-white tracking-wide">Wahyu Coffee</h1>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex space-x-6 text-sm font-medium">
        <router-link to="/" class="text-white transition">Home</router-link>
        <router-link to="/menu" class="text-white transition">Menu</router-link>
        <router-link to="/ourstory" class="text-white transition"
          >Our Story</router-link
        >
        <router-link to="/contact" class="text-white transition"
          >Contact</router-link
        >
      </nav>

      <!-- Hamburger -->
      <button class="md:hidden focus:outline-none" @click="toggleMenu">
        <svg
          class="w-6 h-6 text-[#6b4c35]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <nav
        v-if="isOpen"
        class="md:hidden px-6 py-4 space-y-4 bg-white border-t border-gray-200 text-sm font-medium shadow"
      >
        <router-link
          @click="closeMenu"
          to="/"
          class="block hover:text-[#6b4c35]"
          >Home</router-link
        >
        <router-link
          @click="closeMenu"
          to="/menu"
          class="block hover:text-[#6b4c35]"
          >Menu</router-link
        >
        <router-link
          @click="closeMenu"
          to="/ourstory"
          class="block hover:text-[#6b4c35]"
          >Our Story</router-link
        >
        <router-link
          @click="closeMenu"
          to="/contact"
          class="block hover:text-[#6b4c35]"
          >Contact</router-link
        >
      </nav>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
