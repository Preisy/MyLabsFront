<script setup lang="ts">
import UserHeaderComponent from 'src/pages/user/header';
import MainBlock from 'src/pages/user/main/MainBlock.vue';
import WorkBlock from 'src/pages/user/work/WorkBlock.vue';
import { ref } from 'vue';

const routes = [{ path: '/foo', component: WorkBlock }];

const components = {
  work: WorkBlock,
};

const activeComponent = ref(components.work);
</script>

<template>
  <q-layout view="lHh lpr lff">
    <!-- <UserHeaderComponent /> -->
    <UserHeaderComponent />

    <q-page-container class="no-padding">
      <MainBlock />

      <KeepAlive>
        <component :is="activeComponent" />
      </KeepAlive>
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss"></style>
