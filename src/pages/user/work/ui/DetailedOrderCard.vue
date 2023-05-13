<script setup lang="ts">
import { useFileStore } from 'src/stores/FileStore';
import { FileModel, OrderModel } from './Card';
import { getFileIco } from 'components/AFileDialog/TypeToIconMap';
import { AxiosError } from 'axios';
import { ref } from 'vue';
import AErrPopup from 'src/components/AErrPopup.vue';
import { exportFile } from 'quasar';

interface DetailedLabCardProps {
  card: OrderModel;
}
const props = defineProps<DetailedLabCardProps>();

const fileStore = useFileStore();
const response = ref<AxiosError>();
const errPopup = ref<InstanceType<typeof AErrPopup>>();

const downloadFile = async (file: FileModel) => {
  const orderId = props.card.id;
  const responseFile = await fileStore.downloadFile(orderId, file);
  if ('error' in responseFile) {
    response.value = responseFile.error as AxiosError;
    errPopup.value?.show();
    return;
  }

  exportFile(file.filename, responseFile.blob);
};
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
            class="file cursor-pointer"
            :name="`fa-solid ${getFileIco({ name: file.filename } as unknown as File)}`"
            @click="downloadFile(file)"
          />

          <p class="filename text-center">
            {{ file.filename.slice(0, 8) + '...' }}
          </p>
        </div>
      </div>
    </div>
    <AErrPopup
      class="err-popup"
      :axios-err="response"
      ref="errPopup"
      :timeout="2000"
    />
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
    width: max-content;
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
