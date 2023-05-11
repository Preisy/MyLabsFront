import { LabType } from 'src/global/LabTypes';

export interface FileModel {
  filename: string;
  createdAt: string;
  id: number
}

export interface LabModel {
  id: number
  date: string;
  price: number,
  title: string;
  type: LabType;
  files?: File[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isLabModel(v: any) {
  return ('id' in v) && ('date' in v) && ('price' in v) && ('title' in v) && ('type' in v)
}

export interface OrderModel {
  type: LabType,
  taskText: string,
  deadline: string,
  taskFiles: FileModel[],
  id: number
}


/*

"deadline": "18/04/2023",
"taskText": "VeryFirstTask",
"type": "C",
"createdAt": "2023-04-17T21:58:12.779442",
"id": 2,
"user": 4,
"taskFiles": []

*/