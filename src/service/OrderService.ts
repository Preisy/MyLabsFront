import { $api } from 'src/boot/axios';
import OrderData from 'src/model/order/OrderData';
import { OrderModel } from 'src/pages/user/work/ui/Card';

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
            const { data } = await $api.get<OrderModel[]>('/orders');
            console.log(data);

            return data;
        } catch (e: unknown) {
            return { error: e };
        }
    },
}