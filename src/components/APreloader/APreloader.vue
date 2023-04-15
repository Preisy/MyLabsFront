<script setup lang="ts">
import { computed, ref } from 'vue';
import { useLoadingStore } from 'src/stores/LoadingStore';
import AMyLabsLogo from './AMyLabsLogo.vue';
const loadStore = useLoadingStore();

const isLoading = computed(() => loadStore.isLoading);
const badResponses = loadStore.badLoads;
const isErrors = computed(() => badResponses.length !== 0);
const isClicked = ref(false);
const showBanner = computed(() => isErrors.value && !isClicked.value);
</script>

<template>
  <div
    class="preloader fit flex flex-center"
    :class="{ shown: (isLoading || isErrors) && !isClicked }"
  >
    <!-- <img src="src/assets/my_labs_logo.png" class="logo" /> -->
    <AMyLabsLogo class="preloader-logo" :stop="isErrors" />

    <q-banner
      inline-actions
      class="error-banner text-white bg-red"
      :class="{ shown: showBanner }"
      v-if="isErrors"
    >
      Error: Timeout or bad connection
      <template v-slot:action>
        <q-btn flat color="white" label="OK" @click="isClicked = true" />
      </template>
    </q-banner>
  </div>
</template>

<style scoped lang="scss">
.preloader {
  position: fixed;
  left: 0%;
  top: 0%;
  z-index: 10000;
  background: #ffffff96;
  transition: 0.5s all ease-in-out;

  visibility: hidden;
  opacity: 0;

  &.shown {
    visibility: visible;
    opacity: 1;
  }

  .preloader-logo {
    width: 10rem;
  }

  .error-banner {
    position: absolute;
    z-index: 1111;

    top: 0;
    left: 0;
    right: 0;

    visibility: hidden;
    opacity: 0;

    &.shown {
      visibility: visible;
      opacity: 0.8;
      top: 0;
    }
  }
}
</style>
