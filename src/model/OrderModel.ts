import type {OrderFile} from "@/model/OrderFile";

export type OrderModel = {
    username: string;
    contacts: string;
    deadline: string;
    taskText: string,
    executor: string,
    id: number,
    taskFiles: OrderFile[]
};