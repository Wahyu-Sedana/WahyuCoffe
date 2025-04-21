<template>
  <div>
    <Navbar />

    <section class="bg-[#fefcf9] py-16 px-6">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-center text-[#6b4c35] mb-12">
          Contact Us
        </h2>

        <div class="grid md:grid-cols-2 gap-10">
          <!-- Contact Form -->
          <form
            @submit.prevent="handleSubmit"
            class="bg-white p-8 rounded-xl shadow space-y-6"
          >
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Email</label
              >
              <input
                v-model="email"
                type="email"
                required
                placeholder="you@example.com"
                class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6b4c35]"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Message</label
              >
              <textarea
                v-model="message"
                required
                rows="5"
                placeholder="Your message..."
                class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6b4c35]"
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-[#6b4c35] text-white px-6 py-2 rounded-md hover:bg-[#553b27] transition"
            >
              Submit
            </button>
          </form>

          <!-- Map -->
          <div class="rounded-xl overflow-hidden shadow-md h-[400px]">
            <iframe
              class="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63397.01394064742!2d115.17802415826262!3d-8.67216805501193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24704e9a5fdfb%3A0x4030bfbca7d1090!2sDenpasar%2C%20Bali!5e0!3m2!1sen!2sid!4v1713742762831!5m2!1sen!2sid"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

const email = ref("");
const message = ref("");

function handleSubmit() {
  // Di sini kamu bisa sambungkan ke backend atau service (misal: EmailJS, Supabase, dsb)
  console.log("Email:", email.value);
  console.log("Message:", message.value);

  alert("Thanks for contacting us!");

  // Clear form
  email.value = "";
  message.value = "";
}
</script>
