<script setup lang="ts">
import LangBtn from './LangBtn.vue';
</script>

<template>
  <div class="lang-switch">
    <LangBtn class="popup-btn" label="Eng" locale="en-US" />
    <LangBtn class="popup-btn" label="Рус" locale="ru-RU" />
  </div>
</template>

<style scoped lang="scss">
.lang-switch {
  position: relative;
  z-index: 1;

  .popup-btn:first-of-type {
    margin-right: 1.5rem;
  }
}
</style>
