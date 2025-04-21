<template>
  <section class="bg-[#f5f0ea] py-16 px-6">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">Our Signature Drinks</h2>
      <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        <ProductCard
          title="Espresso"
          img="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          desc="Creamy shot of rich espresso served over grounded delight."
        />
        <ProductCard
          title="Latte"
          img="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          desc="Cream-blended milk over espresso base with smooth finish."
        />
        <ProductCard
          title="Cold Brew"
          img="https://images.unsplash.com/photo-1507133750040-4a8f57021571"
          desc="Chill-brewed beans for smooth caffeine all day long."
          buttonText="Visit Today"
        />
        <ProductCard
          title="Mocha"
          img="https://images.unsplash.com/photo-1552566626-52f8b828add9"
          desc="Classic chocolate twist to rich espresso flavor."
          buttonText="Take Tour"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";
</script>
