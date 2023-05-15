<script setup lang="ts">
import { taskTypeToImg } from 'src/global/LabTypes';
import { LabModel } from './Card';
import { ref } from 'vue';
import CardPopup from './CardPopup.vue';

interface Props {
  card: LabModel;
}
const props = defineProps<Props>();

const popup = ref<InstanceType<typeof CardPopup>>();
const isOpen = ref<boolean>(false);
const onclick = () => {
  popup.value?.show();
  isOpen.value = true;
};
const onclose = () => {
  isOpen.value = false;
};
</script>
<template>
  <div class="card-wrapper" :class="{ open: isOpen }">
    <div
      class="card-body cursor-pointer"
      @click="onclick"
      :class="{ open: isOpen }"
    >
      <div class="row justify-between items-start fit-content no-wrap">
        <div class="title-wrapper row items-center no-wrap q-mr-sm">
          <img
            class="title-icon"
            :src="taskTypeToImg(props.card.type)"
            alt=""
          />
          <h2 class="title">{{ props.card.title }}</h2>
        </div>
      </div>
      <div class="details row justify-between">
        <div class="price">
          <q-icon class="icon" color="accent" name="currency_ruble" />
          <span>
            {{ props.card.price }}
          </span>
        </div>
        <div class="date">
          <span>
            {{ props.card.date }}
          </span>
        </div>
      </div>
    </div>
    <CardPopup
      class="lab-popup"
      ref="popup"
      :data="card"
      :is-open="isOpen"
      @close="onclose"
    />
  </div>
</template>
<style scoped lang="scss">
.card-wrapper {
  position: relative;

  &.open {
    z-index: 1;
  }

  &.right {
    .lab-popup {
      &:deep(.popup) {
        right: unset;
        left: calc(-100% - 3rem);
      }
      &:deep(.light-holder) {
        right: unset;
        left: 3rem;
        transform: translateX(-100%) scaleY(0.5);
      }
      &:deep(.light) {
        rotate: 90deg;
      }
    }
  }

  .lab-popup {
    &:deep(.popup) {
      top: 1rem;
    }
  }
}
.card-body {
  position: relative;
  background-color: $primary;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 1.5rem;
  box-shadow: 0 0 1rem 0 #00000020;
  width: 15rem;
  height: 100%;

  &.open {
    z-index: 9999;
  }

  @media (max-width: $screen-lg) {
    width: 13rem;
  }
  @media (max-width: $screen-md) {
    width: 12rem;
    padding: 0.8rem;
    box-shadow: 0 0 0.8rem 0 #00000020;
  }
  @media (max-width: $screen-sm) {
    width: 10rem;
    padding: 0.5rem;
    box-shadow: 0 0 0.4rem 0 #00000020;
    border-radius: 0.7rem;
  }

  .title-wrapper {
    align-items: flex-start;
    margin-bottom: 1.5rem;
    width: 80%;

    .title-icon {
      --size: 1.2rem;
      width: var(--size);
      height: var(--size);

      user-select: none;

      margin-right: 0.4rem;
      margin-top: 0.3rem;
    }

    .title {
      font-size: 1.3rem;
      line-height: 1.35rem;
      margin-bottom: 0.5rem;

      @media (max-width: $screen-sm) {
        font-size: 1rem;
        line-height: 1.05rem;
      }
    }
  }

  .attachment-btn {
    padding: 0.5rem;
    min-width: fit-content;

    @media (max-width: $screen-sm) {
      padding: 0.3rem;
      font-size: 0.8rem;
    }
  }

  .details {
    font-size: 1.2rem;

    @media (max-width: $screen-lg) {
      font-size: 0.9rem;
    }
    .icon {
      font-size: 1.2rem;
      margin-right: 0.5rem;
    }

    .date {
      font-weight: 700;
    }
  }

  .link {
    --size: 2rem;
    width: var(--size);
    height: var(--size);
  }
}
</style>
