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
        const res = await OrderService.sendOrder(order as unknown as OrderData);
        console.log(res);
        if ('error' in res) {
            orderState.value = 'error';
        } else {
            orderState.value = 'success';
        }

        return res;
    }

    const getOrders = async () => {
        const res = await OrderService.getOrders();
        console.log(res);
        if ('error' in res) {
            orderState.value = 'error';
        } else {
            orderState.value = 'success';
            currentOrders.value = res as unknown as OrderModel[];
        }

        return res;
    }

    const sendOrderFiles = async (files: File[], orderId: number) => {

        const responses: AxiosResponse[] = [];
        loadFilesState.value = 'unset';
        files.forEach(async (file) => {
            const res = await OrderService.sendOrderFile(file, orderId);

            console.log(res);
            if ('error' in res) {
                loadFilesState.value = 'error';
                return;
            } else {
                loadFilesState.value = 'success';
            }

            responses.push(res);
        })

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