<template>
  <div>
    <Navbar />

    <section class="bg-[#fefaf4] py-16 px-6">
      <div class="max-w-5xl mx-auto text-center">
        <h1 class="text-4xl font-bold text-[#6b4c35] mb-6">Our Story</h1>
        <p class="text-gray-700 text-lg leading-relaxed mb-10">
          Wahyu Coffee was born out of a simple idea: to create a space where
          people can enjoy high-quality coffee in a warm, welcoming environment.
          From humble beginnings as a local street-side stall, we’ve grown into
          a beloved neighborhood café known for our passion for the perfect
          brew.
        </p>
        <p class="text-gray-700 text-lg leading-relaxed mb-6">
          Every cup we serve tells a story—from sustainably sourced beans,
          handpicked by farmers, to the carefully crafted pour by our expert
          baristas. At Wahyu Coffee, we don’t just serve coffee—we share
          moments, memories, and connection.
        </p>
        <p class="text-[#6b4c35] text-lg font-semibold mt-10">
          Because great coffee is just the beginning.
        </p>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>
