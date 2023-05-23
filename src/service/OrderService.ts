import { $api } from 'src/boot/axios';
import OrderData from 'src/model/order/OrderData';
import { OrderModel } from 'src/pages/user/work/ui/Card';

export interface FileData {
    filename: string,
    createdAt: string,
    id: number
}

export const OrderService = {
    async sendOrder(order: OrderData) {
        try {
            const response = await $api.post('/orders', order);

            return response;
        } catch (e: unknown) {
            return { error: e };
        }
    },
    async getOrders() {
        try {
            const { data } = await $api.get<OrderModel[]>('/me/orders');

            return data;
        } catch (e: unknown) {
            return { error: e };
        }
    },
    async sendOrderFile(file: File, orderId: number) {
        try {
            const formdata = new FormData();
            formdata.append('file', file);
            const response = await $api.post<FileData>(
                `/orders/${orderId}/files`,
                formdata,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })


            return response;
        } catch (e: unknown) {
            return { error: e };
        }
    },
}