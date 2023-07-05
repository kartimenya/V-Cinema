import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import SeriePage from '@/pages/SeriePage.vue';
import CartoonPage from '@/pages/CartoonPage.vue';
import FilmPage from '@/pages/FilmPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/series',
      name: 'series',
      component: SeriePage,
    },
    {
      path: '/cartoons',
      name: 'cartoons',
      component: CartoonPage,
    },
    {
      path: '/film:id',
      name: 'film',
      component: FilmPage,
    },
  ],
});

export default router;
