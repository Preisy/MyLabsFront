import { defineStore } from 'pinia';
import { SimpleState } from 'src/global/types';
import { ref } from 'vue';
import { FileService } from 'src/service/FileService';
import { cloneDeep } from 'lodash';
import { FileModel } from 'src/pages/user/work/ui/Card';
import { IdbService } from 'src/service/IdbService';

export const useFileStore = defineStore('fileStore', () => {
    const fileUploadState = ref<SimpleState>('unset');
    const fileDownloadState = ref<SimpleState>('unset');
    const filesList = ref<File[]>([]);

    const uploadFiles = async (files: File[] | undefined = undefined) => {
        const _files = files ?? filesList.value;
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
        filesList.value = [];
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

    const pushFiles = async (files: readonly File[]) => {
        for (const file of files) {
            if (filesList.value.indexOf(file) === -1) filesList.value.push(file);
        }

        // saveFiles(cloneDeep(filesList.value));
    }

    const saveFiles = async (filelist: File[]) => {
        await IdbService.saveFiles(cloneDeep(filelist));
    }

    const loadFiles = async () => {
        const files = await IdbService.getFiles();
        filesList.value = files;
        return files;
    }

    return {
        pushFiles,
        filesList,
        fileUploadState,
        uploadFiles,
        clearFiles,
        downloadFile,
        saveFiles,
        loadFiles
    }
})