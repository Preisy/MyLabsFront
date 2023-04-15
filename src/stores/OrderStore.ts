import { defineStore } from 'pinia'
import { SimpleState } from 'src/global/types'
import OrderData from 'src/model/order/OrderData'
import { OrderService } from 'src/service/OrderService'
import { ref } from 'vue'



export const useOrderStore = defineStore('orderStore', () => {
    const orderState = ref<SimpleState>('unset');

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
        }

        return res;
    }

    return {
        orderState,
        getOrders,
        sendOrder
    }
})