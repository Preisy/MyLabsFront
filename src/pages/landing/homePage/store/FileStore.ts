import { defineStore } from 'pinia';
import { SimpleState } from 'src/global/types';
import { ref } from 'vue';
import { FileService } from '../service/FileService';
import { remove } from 'lodash';

export const useFileStore = defineStore('fileStore', () => {
    const fileUploadState = ref<SimpleState>('unset');
    const filesList: File[] = [];

    const uploadFiles = async (files: File[] | undefined = undefined) => {
        const _files = files ?? filesList;
        if (!_files) return;

        fileUploadState.value = 'loading';
        const res = await FileService.uploadFiles(_files);
        console.log(res);
        if ('error' in res) {
            fileUploadState.value = 'error';
            return res;
        } else {
            fileUploadState.value = 'success';
            return res;
        }
    }

    const clearFiles = () => {
        remove(filesList, () => true)
    }

    return {
        filesList,
        fileUploadState,
        uploadFiles,
        clearFiles
    }
})