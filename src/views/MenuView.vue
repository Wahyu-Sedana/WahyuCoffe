<template>
  <div>
    <Navbar />

    <section class="py-16 px-6 bg-[#fefcf9]">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl font-bold text-center text-[#6b4c35] mb-10">
          Our Menu
        </h1>

        <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          <MenuCard
            title="Espresso"
            img="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            desc="Strong and bold espresso shot."
            price="15K"
          />
          <MenuCard
            title="Latte"
            img="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
            desc="Smooth espresso with steamed milk."
            price="22K"
          />
          <MenuCard
            title="Cappuccino"
            img="https://images.unsplash.com/photo-1552566626-52f8b828add9"
            desc="Frothy milk and strong espresso blend."
            price="24K"
          />
          <MenuCard
            title="Cold Brew"
            img="https://images.unsplash.com/photo-1507133750040-4a8f57021571"
            desc="Chilled coffee steeped overnight."
            price="25K"
          />
          <MenuCard
            title="Mocha"
            img="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac"
            desc="Chocolate + coffee perfection."
            price="26K"
          />
          <MenuCard
            title="Macchiato"
            img="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
            desc="Espresso with milk foam crown."
            price="20K"
          />
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import MenuCard from "../components/MenuCard.vue";
</script>
