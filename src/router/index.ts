import { createRouter, createWebHistory } from "vue-router";

// Layouts
import DefaultLayout from "../layouts/DefaultLayout.vue";

// Pages
import Home from "../pages/Home.vue";
import Booking from "../pages/Booking.vue";
import Basket from "../pages/Basket.vue";
import Experience from "../pages/Experience.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        { path: "", component: Home },
        { path: "booking", component: Booking },
        { path: "basket", component: Basket },
        { path: "experience", component: Experience },
      ],
    }
  ],
});

export default router;
