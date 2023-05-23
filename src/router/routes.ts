import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LandingLayout.vue'),
    // children: [{ path: '', component: () => import('pages/LandingPage.vue') }],
  },

  {
    path: '/mpc/',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      // {
      //   path: '/:catchAll(.*)*',
      //   component: () => import('/src/pages/user/work/WorkBlock.vue'),
      // },
      {
        path: 'tasks',
        component: () => import('/src/pages/user/work/WorkBlock.vue'),
      },
      {
        path: 'referrals',
        component: () => import('/src/pages/user/referrals/ReferralsBlock.vue'),
      },
      {
        path: 'settings',
        component: () => import('/src/pages/user/settings/SettingsBlock.vue'),
      },
    ],
    meta: {
      auth: true,
    },
  },
  {
    path: '/confirm',
    component: () => import('layouts/ConfirmLayout.vue'),
  },
  {
    path: '/reset',
    component: () => import('layouts/ResetLayout.vue'),
  },
  {
    path: '/referral',
    component: () => import('layouts/ReferralLayout.vue'),
  },


  // // Always leave this as last one,
  // // but you can also remove it
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/NotFoundPage.vue'),
  // },

  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/SoonLayout.vue'),
  },
];

export default routes;
