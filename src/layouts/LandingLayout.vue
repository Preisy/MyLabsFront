<script setup lang='ts'>
import HeaderComponent from 'src/components/HeaderComponent.vue';
import LandingPage from 'pages/landing/LandingPage.vue';</script>

<template>
  <q-layout view='lHh lpr lff'>
    <HeaderComponent class='header'></HeaderComponent>

    <q-page-container class='no-padding'>
      <LandingPage />
    </q-page-container>
  </q-layout>
</template>

<style scoped lang='scss'></style>
