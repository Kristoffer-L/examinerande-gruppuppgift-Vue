import { createRouter, createWebHistory } from 'vue-router';

// Layouts
import DefaultLayout from '../layouts/DefaultLayout.vue';

// Pages
import Home from '../pages/Home.vue';
import Booking from '../pages/Booking.vue';
import Basket from '../pages/Basket.vue';
import Experience from '../pages/Experience.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        { path: '', component: Home },
        {
          path: 'booking',
          redirect: '/',
        },
        {
          path: 'booking/:id',
          component: Booking,
          name: 'booking',
          props: true,
          beforeEnter: (to) => {
            const id = Number(to.params.id);
            if (Number.isNaN(id)) return '/';
            return true;
          },
        },
        { path: 'basket', component: Basket },
        {
          path: 'experience',
          redirect: '/',
        },
        {
          path: 'experience/:id',
          component: Experience,
          name: 'experience',
          props: true,
          beforeEnter: (to) => {
            const id = Number(to.params.id);
            if (Number.isNaN(id)) return '/';
            return true;
          },
        },
      ],
    },
  ],
});

export default router;
