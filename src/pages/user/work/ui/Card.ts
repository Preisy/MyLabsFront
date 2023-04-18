import { LabType } from 'src/global/LabTypes';

export interface FileModel {
  filename: string;
  createdAt: string;
  id: number
}

export interface LabModel {
  date: string;
  price: number,
  title: string;
  type: LabType;
  files?: File[];
}

export interface OrderModel {
  type: LabType,
  taskText: string,
  deadline: string,
  taskFiles: FileModel[]
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