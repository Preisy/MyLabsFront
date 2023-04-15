export type TaskType = 'Cpp' | 'C' | 'Cs';
export interface LabModel {
  date: string;
  title: string;
  type: TaskType;
  files?: File[];
}

export interface OrderModel {
  price: number,
  type: TaskType,
  title: string,
  date: string
}
