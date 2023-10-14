<script setup lang="ts">
import { LabType, taskTypeToImg } from 'src/global/LabTypes';
import CardPopup from './CardPopup.vue';
import { ref } from 'vue';

interface Card {
  duration: number;
  price: number;
  title: string;
  description: string;
  type: LabType;
}

const popup = ref<InstanceType<typeof CardPopup>>();
const props = defineProps<Card>();
const isOpen = ref<boolean>(false);
const open = () => {
  if (!props.description) return;
  popup.value?.open();
};
</script>

<template>
  <div class="relative">
    <div class="card column justify-between" @click="open">
      <div class="title-wrapper row items-start no-wrap">
        <img
          class="title-icon q-mt-sm"
          :src="taskTypeToImg(props.type)"
          alt=""
        />
        <h2 class="title">{{ props.title }}</h2>
      </div>
      <div class="details">
        <div class="time">
          <q-icon class="icon" color="accent" name="update" />
          <span>
            {{ props.duration }}
            {{ $t('pages.landing.examplesBlock.card.hours') }}
          </span>
        </div>
        <div class="price">
          <q-icon class="icon" color="accent" name="currency_ruble" />
          <span>
            {{ props.price }}
            {{ $t('pages.landing.examplesBlock.card.roubles') }}
          </span>
        </div>
      </div>
    </div>
    <CardPopup ref="popup" :data="props" :is-open="isOpen" />
  </div>
</template>

<style scoped lang="scss">
.relative {
  position: relative;
}
.card {
  background-color: $primary;
  box-sizing: border-box;
  padding: 1.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 0 2rem 0 #00000020;
  // width: 20rem;

  @media (max-width: $screen-lg) {
    padding: 0.9rem;
  }
  @media (max-width: $screen-md) {
    padding: 0.9rem;
    box-shadow: 0 0 0.7rem 0 #00000020;
  }

  .title-wrapper {
    margin-bottom: 1.5rem;
    .title {
      margin-bottom: 0;
    }
    .title-icon {
      --size: 1.2rem;
      width: var(--size);
      height: var(--size);

      user-select: none;
      pointer-events: none;

      margin-right: 0.4rem;
    }
  }

  .details {
    font-size: 1.2rem;

    .icon {
      font-size: 1.2rem;
      margin-right: 0.5rem;
    }

    @media (max-width: $screen-md) {
      font-size: 1rem;
    }
  }
}
</style>
