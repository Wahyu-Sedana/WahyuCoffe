<template>
  <section class="relative h-screen w-full overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
      alt="Coffee Hero"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black/40"></div>
    <div
      class="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6"
    >
      <h1 class="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
        Savor the <span class="text-[#f5cfa0]">Perfect Brew</span>
      </h1>
      <p class="text-lg md:text-xl text-white/80 max-w-xl mb-6">
        Crafted with passion, brewed with precision. Your daily dose of comfort.
      </p>
      <button
        class="bg-[#f5cfa0] text-black px-6 py-3 rounded-lg hover:bg-[#e2b77f] transition"
      >
        Explore Menu
      </button>
    </div>
  </section>
</template>
