<script setup lang="ts">
import { Screen } from 'quasar';
import { ref } from 'vue';
import { Router } from 'vue-router';
import { useAuthStore } from './stores/AuthStore';

Screen.setSizes({ sm: 600, md: 900, lg: 1200 });

const router = ref<Router>();
router.value?.beforeEach((to) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.auth && !useAuthStore().isAuth) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: '/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    };
  }
});
</script>

<template>
  <router-view ref="router" />
</template>
