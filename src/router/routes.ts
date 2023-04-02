import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LandingLayout.vue'),
    // children: [{ path: '', component: () => import('pages/LandingPage.vue') }],
  },

  {
    path: '/mpc',
    component: () => import('layouts/UserLayout.vue'),
    meta: {
      auth: true
    }
  },


  
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/NotFoundPage.vue'),
  },
];

export default routes;
