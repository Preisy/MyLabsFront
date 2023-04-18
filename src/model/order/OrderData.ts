import { LabType } from 'src/global/LabTypes';

export default interface OrderData {
    deadline: string,
    taskText: string,
    type: LabType,
    promoName: string | null,
    files: File[]
}