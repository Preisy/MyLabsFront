<script setup lang="ts">
import ADialog from 'src/components/ADialog';
import { exportFile } from 'quasar';
import {
  FileExtensionMap,
  FileTypeMap,
} from 'components/AFileDialog/TypeToIconMap';
import { ref } from 'vue';
import { FileModel } from './Card';
import { useFileStore } from 'stores/FileStore';
import AErrPopup from 'src/components/AErrPopup.vue';
import { AxiosError } from 'axios';

interface FileDisplayDialogProps {
  files: FileModel[];
  orderId: number;
}
const props = defineProps<FileDisplayDialogProps>();

const dialog = ref<InstanceType<typeof ADialog>>();
const fileStore = useFileStore();

defineExpose({
  open: () => {
    dialog.value?.open();
  },
  close: () => {
    dialog.value?.close();
  },
});

const getFileIco = (file: FileModel) => {
  const ext = file.filename.slice(
    file.filename.lastIndexOf('.'),
    file.filename.length
  );
  if (ext in FileExtensionMap) {
    const ico = FileExtensionMap[ext as keyof typeof FileExtensionMap];
    return ico;
  }

  for (let type in FileTypeMap) {
    const ico = FileTypeMap[type as keyof typeof FileTypeMap];
    if (file.filename.includes(type)) return ico;
  }
  return 'fa-file';
};

const response = ref<AxiosError>();
const errPopup = ref<InstanceType<typeof AErrPopup>>();

const downloadFile = async (file: FileModel) => {
  const responseFile = await fileStore.downloadFile(props.orderId, file);
  if ('error' in responseFile) {
    response.value = responseFile.error as AxiosError;
    errPopup.value?.show();
    return;
  }

  exportFile(file.filename, responseFile.blob);
};
</script>

<template>
  <ADialog ref="dialog" class="file-display">
    <div class="files-grid bg-primary">
      <div class="file-wrapper" v-for="file in files" :key="file.filename">
        <q-icon
          class="file"
          :name="`fa-solid ${getFileIco(file)}`"
          @click="downloadFile(file)"
        />

        <p class="filename text-center">
          {{ file.filename.slice(0, 8) + '...' }}
        </p>
      </div>
      <AErrPopup
        class="err-popup"
        :axios-err="response"
        ref="errPopup"
        :timeout="2000"
      />
    </div>
  </ADialog>
</template>

<style scoped lang="scss">
.file-display {
  width: fit-content;
  .files-grid {
    --size: 5rem;
    position: relative;

    display: grid;
    grid-template-columns: var(--size) var(--size);

    border-radius: 1.5rem;
    box-shadow: 0 0 0.5rem 0 #00000066;

    column-gap: 2rem;
    row-gap: 2rem;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    // overflow: hidden;
    padding: 1rem;

    .file-wrapper {
      position: relative;

      .file {
        overflow: hidden;
        width: 100%;
        height: var(--size);
        border-radius: 1rem;
        background-color: #d9d9d9;
        font-size: 3rem;

        &:hover {
          cursor: pointer;
        }
      }
      .filename {
        font-size: 0.7rem;
        font-weight: 700;
      }
    }
  }

  .err-popup {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0rem;
  }
}
</style>
