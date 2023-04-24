import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { remove } from 'lodash';
import { defineStore } from 'pinia'
import { computed, ref } from 'vue';

const compare = (lhs: InternalAxiosRequestConfig, rhs: InternalAxiosRequestConfig) =>
    lhs.data == rhs.data && lhs.url == rhs.url && lhs.method == rhs.method && lhs.params == rhs.params

export function appendRequest(v: InternalAxiosRequestConfig) {
    useLoadingStore().pendingRequests?.push(v);
}
export function resolveRequest(v: InternalAxiosRequestConfig) {
    if (!useLoadingStore().pendingRequests) return;

    remove(useLoadingStore().pendingRequests as InternalAxiosRequestConfig[], (r) => compare(r, v))
}

export function registerBadResponse(v: AxiosError) {
    const config = v.config;
    if (!config) return;

    if (useLoadingStore().pendingRequests.find((rhs) => compare(config, rhs))) {
        useLoadingStore().badLoads.push(v);
    }
}

export const useLoadingStore = defineStore('loadingStore', () => {
    const pendingRequests = ref<InternalAxiosRequestConfig[]>([]);
    const isLoading = computed(() => pendingRequests.value?.length !== 0)
    const badLoads = ref<AxiosError[]>([]);

    return {
        pendingRequests,
        isLoading,
        badLoads
    }
})