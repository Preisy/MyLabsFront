<script setup lang="ts">
import HeaderComponent from 'components/header/HeaderComponent.vue';
import LandingPage from 'pages/landing/LandingPage.vue';
</script>

<template>
  <q-layout view="lHh lpr lff">
    <HeaderComponent></HeaderComponent>

    <q-page-container class="no-padding">
      <LandingPage />
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss"></style>
