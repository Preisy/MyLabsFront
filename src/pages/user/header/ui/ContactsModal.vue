<script setup lang="ts">
import ABtn from 'src/components/ABtn.vue';
import { ref } from 'vue';
import langSwitchLight from 'assets/header/langSwitchLight.svg';
import TgIcon from './TgIcon.vue';
import VkIcon from './VkIcon.vue';

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
    <div class="contacts">
      <ABtn
        class="toggle-btn"
        theme="light"
        :label="$t('pages.user.header.contacts')"
        @click="toggleExtend"
      />

      <div
        class="popup row justify-around bg-primary"
        :class="{ hide: !isShown }"
      >
        <q-btn class="tg-link link">
          <TgIcon class="icon" path-classes="tg-icon" />
        </q-btn>
        <q-btn class="vk-link link">
          <VkIcon class="icon" path-classes="vk-icon" />
        </q-btn>
      </div>
      <img :src="langSwitchLight" class="light" :class="{ hide: !isShown }" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.contacts {
  position: relative;
  z-index: 1;

  .popup {
    position: absolute;
    left: 0rem;
    right: 0rem;
    top: 6.5rem;

    padding: 0.4rem;
    box-shadow: 0px 0px 50px rgba(191, 205, 243, 0.5);
    border-radius: 1.5rem;

    transition: 0.3s all ease-in-out;
    opacity: 1;
    z-index: 2;
    @media (max-width: $screen-md) {
      top: 7.2rem;
    }

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
    left: 4px;
    right: 0;
    z-index: -1;
    transition: 0.5s all ease-in-out;
    opacity: 0.5;
    width: 100%;

    &.hide {
      opacity: 0;
      visibility: hidden;
    }
  }
  .link {
    --size: 3rem;
    width: fit-content;
    height: fit-content;
    border-radius: 100%;
    padding: 0;

    &:deep(.tg-icon) {
      fill: #2aabee;
    }
    &:deep(.vk-icon) {
      fill: #4c75a3;
    }

    .icon {
      width: var(--size);
      height: var(--size);
    }
  }
}
.bg-prevent {
  left: 0;
  top: 0;
}
</style>
