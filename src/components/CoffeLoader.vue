<template>
  <div class="relative w-16 h-20 mx-auto">
    <!-- Coffee Cup -->
    <div class="w-full h-16 bg-white rounded-b-lg shadow-md"></div>

    <!-- Steam / Smoke -->
    <div
      class="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1"
    >
      <div
        v-for="n in 6"
        :key="n"
        :class="[
          'w-2 h-4 bg-white rounded-full opacity-80 animate-steam absolute',
          `delay-${n * 100}`,
          `steam-${n % 3}`,
        ]"
        :style="{
          left: `${Math.random() * 20 - 10}px`,
          opacity: `${0.5 + Math.random() * 0.5}`,
        }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes steam {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.8;
  }
  100% {
    transform: translateY(-30px) scale(0.7);
    opacity: 0;
  }
}

.animate-steam {
  animation: steam 1.5s infinite ease-in-out;
}

/* Delay utility */
.delay-100 {
  animation-delay: 0.1s;
}
.delay-200 {
  animation-delay: 0.2s;
}
.delay-300 {
  animation-delay: 0.3s;
}
.delay-400 {
  animation-delay: 0.4s;
}
.delay-500 {
  animation-delay: 0.5s;
}
.delay-600 {
  animation-delay: 0.6s;
}

/* Slight horizontal wiggle classes */
.steam-0 {
  transform: translateX(-5px);
}
.steam-1 {
  transform: translateX(0);
}
.steam-2 {
  transform: translateX(5px);
}
</style>
