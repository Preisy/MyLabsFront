<script setup lang="ts">
import UserHeaderComponent from 'src/pages/user/header';
import MainBlock from 'src/pages/user/main/MainBlock.vue';
</script>

<template>
  <q-layout class="user-page" view="lHh lpr lff">
    <!-- <UserHeaderComponent /> -->
    <UserHeaderComponent />

    <q-page-container class="no-padding">
      <MainBlock class="main" />

      <div class="subblock">
        <router-view></router-view>
      </div>
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">
.user-page {
  --main-height: 60vh;
  --overlap: 4rem;
  --subblock-height: calc(100vh - var(--main-height) + var(--overlap));

  overflow: hidden;

  .main {
    height: var(--main-height);
  }
  .subblock {
    height: var(--subblock-height);
    margin-top: calc(-1 * var(--overlap));

    overflow-x: hidden;
    overflow-y: scroll;
  }
}
</style>
