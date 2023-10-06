import { LabType } from 'src/global/LabTypes';

export interface FileModel {
  filename: string;
  createdAt: string;
  id: number;
}

export interface LabModel {
  id: number;
  date: string;
  price: number;
  title: string;
  type: LabType;
  files?: File[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isLabModel(v: any) {
  return 'title' in v;
}

export interface OrderModel {
  type: LabType;
  taskText: string;
  deadline: string;
  taskFiles: FileModel[];
  id: number;
}
