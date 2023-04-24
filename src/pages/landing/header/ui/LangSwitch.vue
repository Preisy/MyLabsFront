<script setup lang="ts">
import ABtn from 'src/components/ABtn.vue';
import LangBtn from './LangBtn.vue';
import { ref } from 'vue';
import langSwitchLight from 'assets/header/langSwitchLight.svg';

const isShown = ref<boolean>(false);
const toggleExtend = () => {
  isShown.value = !isShown.value;
};
</script>

<template>
  <div>
    <div
      v-if="isShown"
      class="bg-prevent fixed full-width full-height"
      @click="isShown = false"
    />
    <div class="lang-switch">
      <ABtn
        class="auth-login q-px-xl"
        theme="light"
        :label="$t('pages.landing.header.lang')"
        @click="toggleExtend"
      />

      <div
        class="popup row justify-around bg-primary"
        :class="{ hide: !isShown }"
      >
        <LangBtn class="popup-brn" label="Eng" locale="en-US" />
        <LangBtn class="popup-brn" label="Рус" locale="ru-RU" />
      </div>
      <img :src="langSwitchLight" class="light" :class="{ hide: !isShown }" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.lang-switch {
  position: relative;
  width: fit-content;
  z-index: 1;
  .popup {
    position: absolute;
    left: -1rem;
    right: -1rem;
    top: 5rem;

    padding: 0.4rem;
    box-shadow: 0px 0px 50px rgba(191, 205, 243, 0.5);
    border-radius: 1.5rem;

    transition: 0.3s all ease-in-out;
    opacity: 1;
    z-index: 2;

    &.hide {
      opacity: 0;
      visibility: hidden;
    }

    .popup-btn {
      position: relative;
      z-index: 100;
    }
  }
  .light {
    position: absolute;
    left: 0;
    z-index: -1;
    transition: 0.5s all ease-in-out;
    opacity: 0.5;
    width: 100%;

    &.hide {
      opacity: 0;
      visibility: hidden;
    }

    @media (max-width: $screen-md) {
      left: 0;
    }
  }
}
.bg-prevent {
  left: 0;
  top: 0;
}
</style>
