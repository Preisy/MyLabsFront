<script setup lang="ts">
import { ref } from 'vue';
interface Props {
  title: string;
}

const isOpen = ref<boolean>(false);
const page = ref<{ index: number; all: number }>();

defineProps<Props>();

defineExpose({
  open: () => {
    isOpen.value = true;
  },
  close: () => {
    isOpen.value = false;
  },
  setPage: (i: number, a: number) => {
    page.value = { index: 0, all: 0 };
    page.value.index = i;
    page.value.all = a;
  },
});
</script>

<template>
  <q-dialog v-model="isOpen" class="dialog">
    <div class="content-wrapper column items-center">
      <h4 class="title">{{ title }}</h4>
      <div class="body-wrapper full-width column items-center">
        <slot name="body"></slot>
      </div>
      <div class="controls-wrapper">
        <slot name="controls"></slot>
      </div>
      <div class="page-counter" v-if="page">
        {{ page.index }} / {{ page.all }}
      </div>
    </div>
  </q-dialog>
</template>

<style scoped lang="scss">
.dialog {
  background: #ffffff55;
  .content-wrapper {
    width: 23rem;
    padding: 2rem;
    padding-bottom: 0.5rem;

    background: $primary;

    border-radius: 1.5rem;

    .title {
      line-height: 2rem;
      margin-bottom: 1.3rem;
    }
    .body-wrapper {
      margin-bottom: 1rem;
    }

    .controls-wrapper {
      margin-bottom: 0.75rem;
    }
  }
}
</style>
