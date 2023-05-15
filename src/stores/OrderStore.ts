import { AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import { SimpleState } from 'src/global/types'
import OrderData from 'src/model/order/OrderData'
import { OrderModel } from 'src/pages/user/work/ui/Card'
import { OrderService } from 'src/service/OrderService'
import { ref } from 'vue'

export const useOrderStore = defineStore('orderStore', () => {
    const orderState = ref<SimpleState>('unset');
    const loadFilesState = ref<SimpleState>('unset');
    const orderData = ref<OrderData>();
    const currentOrders = ref<OrderModel[]>([]);

    const sendOrder = async (order: Record<string, unknown> | OrderData) => {
        orderState.value = 'loading';
        const res = await OrderService.sendOrder(order as unknown as OrderData);
        if ('error' in res) {
            orderState.value = 'error';
        } else {
            orderState.value = 'success';
        }

        return res;
    }

    const getOrders = async () => {
        orderState.value = 'loading';

        const res = await OrderService.getOrders();
        if ('error' in res) {
            orderState.value = 'error';
        } else {
            orderState.value = 'success';
            currentOrders.value = res;
        }

        return res;
    }

    const sendOrderFiles = async (files: File[], orderId: number) => {

        const responses: AxiosResponse[] = [];
        loadFilesState.value = 'loading';

        for (const file of files) {
            const res = await OrderService.sendOrderFile(file, orderId);

            if ('error' in res) {
                loadFilesState.value = 'error';
                return;
            } else {
                loadFilesState.value = 'success';
            }

            responses.push(res);
        }

        return responses;
    }

    const saveOrder = (order: Record<string, unknown> | OrderData) => {
        orderData.value = order as unknown as OrderData;
        localStorage.setItem('order', JSON.stringify(order))
    }

    const loadOrder = () => {
        const localOrder = localStorage.getItem('order');
        if (!localOrder) return;
        orderData.value = JSON.parse(localOrder);

        return orderData.value;
    }

    const clearOrderCache = () => {
        localStorage.removeItem('order');
    }

    return {
        orderState,
        saveOrder,
        orderData,
        getOrders,
        sendOrder,
        sendOrderFiles,
        loadOrder,
        clearOrderCache,
        currentOrders
    }
})