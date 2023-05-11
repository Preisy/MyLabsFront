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
        class="btn left"
        :class="btn_classes"
        icon="chevron_left"
        @click="carousel?.previous()"
      />
      <div class="counter" :class="text_classes">
        {{ parseInt(model) + 1 }} / {{ slidesCount }}
      </div>
      <QBtn
        class="btn left"
        :class="btn_classes"
        icon="chevron_right"
        @click="carousel?.next()"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.slider {
  height: auto;
  background: transparent;

  overflow: hidden;
}

.controls {
  margin-top: 3rem;
  .counter {
    margin: 0 1rem;
  }
  .btn {
    --size: 0.75rem;
    padding: calc(var(--size) / 2);
    font-size: var(--size);
    border-radius: 0.5rem;

    @media (max-width: $screen-md) {
      --size: 0.65rem;
    }
  }
}

.mobile {
  .controls {
    margin-top: 1rem;
  }
}
</style>
