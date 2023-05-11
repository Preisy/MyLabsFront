<script setup lang="ts">
import { OrderModel } from './Card';
import { getFileIco } from 'components/AFileDialog/TypeToIconMap';

interface DetailedLabCardProps {
  card: OrderModel;
}
defineProps<DetailedLabCardProps>();
</script>

<template>
  <div class="detailed-card">
    <div class="content-wrapper">
      <div class="text" :class="{ noMargin: !card.taskFiles?.length }">
        <p>{{ card.taskText }}</p>
      </div>
      <div class="files row" v-if="card.taskFiles">
        <div
          class="file-wrapper"
          v-for="file in card.taskFiles"
          :key="file.filename"
        >
          <q-icon
            class="file"
            :name="`fa-solid ${getFileIco({ name: file.filename } as unknown as File)}`"
          />

          <p class="filename text-center">
            {{ file.filename.slice(0, 8) + '...' }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.detailed-card {
  padding: 1.5rem;
  border-radius: 1.5rem;
  max-width: 20rem;
  box-shadow: 0 0 2.5rem 0 rgba(191, 205, 243, 0.5);

  .text {
    margin-bottom: 2rem;

    &.noMargin {
      margin: 0;
    }
  }

  .files {
    column-gap: 0.5rem;
    .file-wrapper {
      --size: 3rem;
      position: relative;
      width: var(--size);
      .file {
        width: 100%;
        height: var(--size);
        border-radius: 1rem;
        background-color: #d9d9d9;
        font-size: 2.3rem;
      }
      .filename {
        font-size: 0.7rem;
        font-weight: 700;
      }
    }
  }
}
</style>
