import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import Home from "../views/HomeView.vue";
import Menu from "../views/MenuView.vue";
import OurStory from "../views/OurStoryView.vue";
import Contact from "../views/ContactView.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: Home },
  { path: "/menu", name: "Menu", component: Menu },
  { path: "/ourstory", name: "Our Story", component: OurStory },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
