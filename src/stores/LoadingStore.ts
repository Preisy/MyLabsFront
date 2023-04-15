import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { remove } from 'lodash';
import { defineStore } from 'pinia'
import { computed, ref } from 'vue';

export function appendRequest(v: InternalAxiosRequestConfig) {
    useLoadingStore().pendingRequests?.push(v);
}
export function resolveRequest(v: InternalAxiosRequestConfig) {
    if (!useLoadingStore().pendingRequests) return;

    const compare = (lhs: InternalAxiosRequestConfig, rhs: InternalAxiosRequestConfig) =>
        lhs.data == rhs.data && lhs.url == rhs.url && lhs.method == rhs.method && lhs.params == rhs.params

    remove(useLoadingStore().pendingRequests as InternalAxiosRequestConfig[], (r) => compare(r, v))
}

export function registerBadResponse(v: AxiosError) {
    useLoadingStore().badLoads.push(v);
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