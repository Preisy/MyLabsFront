<script setup lang="ts">
import ADialog from 'src/components/ADialog';
import { QUploader } from 'quasar';
import { ref } from 'vue';
import { remove } from 'lodash';
import { useFileStore } from 'src/stores/FileStore';
import { getFileIco } from './TypeToIconMap';
import floorImg from 'assets/header/floor.svg';

const fileStore = useFileStore();
const uploader = ref<InstanceType<typeof QUploader>>();
const dialog = ref<InstanceType<typeof ADialog>>();

defineExpose({
  open: () => {
    dialog.value?.open();
    setTimeout(() => {
      uploader.value?.addFiles(fileStore.filesList as readonly File[]);
    }, 0);
  },
});

const onadded = (values: readonly File[]) => {
  fileStore.pushFiles(values);
};

const onremove = (values: readonly File[]) => {
  remove(fileStore.filesList, (v) => values.indexOf(v) !== -1);
};
</script>

<template>
  <ADialog ref="dialog" class="file-dialog">
    <div class="wrapper">
      <QUploader
        ref="uploader"
        multiple
        color="grey"
        text-color="dark"
        class="drag-n-drop"
        @added="onadded"
        @removed="onremove"
      >
        <template #header> </template>
        <template v-slot:list="scope">
          <div
            v-if="scope.files.length === 0"
            class="placeholder flex flex-center fill full-height text-center"
            @click="uploader?.pickFiles"
          >
            <q-uploader-add-trigger />
            Перетащите <br />
            файлы
          </div>

          <div v-else class="files-grid">
            <div
              class="file-wrapper"
              v-for="file in <File[]>scope.files"
              :key="file.name"
            >
              <q-icon class="file" :name="`fa-solid ${getFileIco(file)}`" />

              <q-btn
                class="delete-btn"
                icon="close"
                color="red"
                round
                size="8px"
                @click="scope.removeFile(file)"
              />
              <p class="filename text-center">
                {{ file.name.slice(0, 8) + '...' }}
              </p>
            </div>

            <q-btn
              v-if="scope.files.length !== 0"
              class="add-file"
              @click="scope.pickFiles"
            >
              <q-uploader-add-trigger />
              <q-icon class="icon" name="add" />
            </q-btn>
          </div>
        </template>
      </QUploader>

      <img
        :src="floorImg"
        class="floor"
        alt=""
        ref="floor"
        @click="dialog?.close"
      />
    </div>
  </ADialog>
</template>

<style scoped lang="scss">
.file-dialog {
  .wrapper {
    width: fit-content;
    height: fit-content;

    position: relative;
  }

  .content-wrapper {
    border-radius: 1.5rem;
  }
  .drag-n-drop {
    box-shadow: 0px 0px 50px rgba(191, 205, 243, 0.5);
    // padding: 1.5rem;
    width: auto;
    min-height: 20rem;
    max-height: 70vh;
    min-width: 13rem;
    border-radius: 1.5rem;
  }

  .header {
    padding: 0.7rem;
    .title {
      margin-bottom: 0;
    }
  }

  .placeholder {
    padding: 1rem;
    border-radius: 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .files-grid {
    --size: 5rem;

    display: grid;
    grid-template-columns: var(--size) var(--size);

    column-gap: 2rem;
    row-gap: 2rem;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    overflow: hidden;
    padding: 1rem;
    width: 100%;

    .file-wrapper {
      position: relative;
      .delete-btn {
        position: absolute;
        top: 0;
        right: 0;

        transform: translate(25%, -25%);
      }

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

    .add-file {
      padding: 0;
      margin: 1rem;
      width: min-content;
      height: min-content;
      border-radius: 1rem;

      background-color: #eaeaea;

      .icon {
        width: 3rem;
        height: 3rem;

        font-size: 2rem;
      }
    }
  }

  .drag-n-drop :deep(.q-uploader__dnd) {
    border-radius: 1.5rem !important;
  }

  .floor {
    user-select: none;
    position: absolute;
    top: -100%;
    right: -315%;
    z-index: -1;
    opacity: 0.5;
  }
}
</style>
