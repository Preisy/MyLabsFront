<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const generateStyle = (i: number) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve('visibility: visible; opacity:1'), i * 1000)
  );
};
</script>

<template>
  <q-banner inline-actions class="error-banner text-white bg-red">
    Error
    <template v-slot:action>
      <q-btn flat color="white" label="OK" />
    </template>
  </q-banner>
</template>

<style scoped lang="scss"></style>
