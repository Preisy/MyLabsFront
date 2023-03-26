<script setup lang="ts">
import { QCarousel, QBtn } from 'quasar';
import { ref, watch } from 'vue';

interface Props {
  modelValue: string;
  slides_count: number;

  control_theme?: 'dark' | 'light';
}

const props = withDefaults(defineProps<Props>(), {
  control_theme: 'light',
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
  props.control_theme === 'light'
    ? 'bg-primary text-dark'
    : 'bg-dark text-primary';
const text_classes =
  props.control_theme === 'light' ? 'text-primary' : 'text-dark';
</script>

<template>
  <q-carousel
    ref="carousel"
    transition-prev="slide-right"
    transition-next="slide-left"
    animated
    swipeable
    v-model="model"
  >
    <slot></slot>

    <template #control>
      <div class="controls row justify-center items-center">
        <QBtn
          class="btn left br-15px"
          :class="btn_classes"
          icon="chevron_left"
          @click="carousel?.previous()"
        ></QBtn>
        <div class="counter" :class="text_classes">
          {{ parseInt(model) + 1 }} / {{ slides_count }}
        </div>
        <QBtn
          class="btn left br-15px"
          :class="btn_classes"
          icon="chevron_right"
          @click="carousel?.next()"
        ></QBtn>
      </div>
    </template>
  </q-carousel>
</template>

<style scoped lang="scss">
.controls {
  .counter {
    margin: 0 1rem;
  }
  .btn {
    --size: 2rem;
    width: var(--size);
    height: var(--size);
  }
}
</style>
