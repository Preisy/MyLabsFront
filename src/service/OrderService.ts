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
            console.log(order);
            const response = await $api.post('/orders', order);
            console.log(response.data);

            return response;
        } catch (e: unknown) {
            return { error: e };
        }
    },
    async getOrders() {
        try {
            const { data } = await $api.get<OrderModel[]>('/users/orders');
            console.log(data);

            return data;
        } catch (e: unknown) {
            return { error: e };
        }
    },
    async sendOrderFile(file: File, orderId: number) {
        try {
            const response = await $api.post<FileData>(
                `/users/${orderId}/files`,
                file,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })

            console.log(response);

            return response;
        } catch (e: unknown) {
            return { error: e };
        }
    },
}