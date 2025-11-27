import { createRouter, createWebHistory } from "vue-router";

// Layouts
import DefaultLayout from "../layouts/DefaultLayout.vue";

// Pages
import Home from "../pages/Home.vue";
import Booking from "../pages/Booking.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        { path: "", component: Home },
        { path: "booking", component: Booking },
      ],
    }
  ],
});

export default router;
