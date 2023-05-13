<script setup lang="ts">
import AReferral from 'src/components/AReferral/AReferral.vue';
import ReferralHeader from 'pages/referral/header/ReferralHeader.vue';
</script>

<template>
  <q-layout view="lHh lpr lff">
    <ReferralHeader />

    <q-page-container class="no-padding">
      <AReferral />
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss"></style>
