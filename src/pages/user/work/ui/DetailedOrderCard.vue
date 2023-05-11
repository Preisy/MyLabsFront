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
  max-width: 20rem;

  .text {
    margin-bottom: 2rem;

    &.noMargin {
      margin: 0;
    }
  }

  .files {
    .file-wrapper {
      position: relative;
      .file {
        overflow: hidden;
        width: 100%;
        height: var(--size);
        border-radius: 1rem;
        background-color: #d9d9d9;
        font-size: 3rem;
      }
      .filename {
        font-size: 0.7rem;
        font-weight: 700;
      }
    }
  }
}
</style>
