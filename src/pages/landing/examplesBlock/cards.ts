import { LabType } from 'src/global/LabTypes';

export default interface Card {
  duration: number;
  price: number;
  title: string;
  taskText: string;
  type: LabType;
}
