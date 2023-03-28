<script setup lang="ts">
import { QCarousel, QBtn, Screen } from 'quasar';
import { ref, watch } from 'vue';

interface Props {
  modelValue: string;
  slidesCount: number;

  controlTheme?: 'dark' | 'light';
}

const props = withDefaults(defineProps<Props>(), {
  controlTheme: 'light',
});
const emits = defineEmits<{
  (e: 'update:v-model', value: string): void;
}>();

const model = ref(props.modelValue);
watch(model, (value) => {
  emits('update:v-model', value);
});

const carousel = ref<QCarousel>();

const btn_classes =
  props.controlTheme === 'light'
    ? 'bg-primary text-dark'
    : 'bg-dark text-primary';
const text_classes =
  props.controlTheme === 'light' ? 'text-primary' : 'text-dark';

const isMobile = Screen.lt.sm;
</script>

<template>
  <div :class="{ mobile: isMobile }">
    <q-carousel
      ref="carousel"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      swipeable
      class="slider"
      v-model="model"
    >
      <slot></slot>
    </q-carousel>

    <div class="controls row justify-center items-center">
      <QBtn
        class="btn left br-15px"
        :class="btn_classes"
        icon="chevron_left"
        @click="carousel?.previous()"
      ></QBtn>
      <div class="counter" :class="text_classes">
        {{ parseInt(model) + 1 }} / {{ slidesCount }}
      </div>
      <QBtn
        class="btn left br-15px"
        :class="btn_classes"
        icon="chevron_right"
        @click="carousel?.next()"
      ></QBtn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slider {
  height: auto;
  background: transparent;
}

.controls {
  margin-top: 3rem;
  .counter {
    margin: 0 1rem;
  }
  .btn {
    --size: 2rem;
    width: var(--size);
    height: var(--size);
  }
}

.mobile {
  .controls {
    margin-top: 1rem;
  }
}
</style>
