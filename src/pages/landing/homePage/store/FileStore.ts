import { defineStore } from 'pinia';
import { SimpleState } from 'src/global/types';
import { ref } from 'vue';
import { FileService } from '../service/FileService';
import { remove } from 'lodash';
import { FileModel } from 'src/pages/user/work/ui/Card';

export const useFileStore = defineStore('fileStore', () => {
    const fileUploadState = ref<SimpleState>('unset');
    const fileDownloadState = ref<SimpleState>('unset');
    const filesList: File[] = [];

    const uploadFiles = async (files: File[] | undefined = undefined) => {
        const _files = files ?? filesList;
        if (!_files) return;

        fileUploadState.value = 'loading';
        const res = await FileService.uploadFiles(_files);
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

    const downloadFile = async (orderId: number, filename: FileModel) => {
        fileDownloadState.value = 'loading';
        const res = await FileService.downloadFile(orderId, filename);
        if ('error' in res) {
            fileDownloadState.value = 'error';
        } else {
            fileDownloadState.value = 'success';
        }

        return res;
    }

    return {
        filesList,
        fileUploadState,
        uploadFiles,
        clearFiles,
        downloadFile
    }
})