<script setup lang="ts">
import HeaderComponent from 'pages/landing/header/HeaderComponent.vue';
import LandingPage from 'pages/landing/LandingPage.vue';
import APreloader from 'src/components/APreloader/APreloader.vue';
</script>

<template>
  <q-layout view="lHh lpr lff">
    <HeaderComponent />

    <q-page-container class="no-padding">
      <LandingPage />
    </q-page-container>
    <APreloader />
  </q-layout>
</template>

<style scoped lang="scss"></style>
