import { LabType } from 'src/global/LabTypes';

export default interface Card {
  duration: number;
  price: number;
  title: string;
  type: LabType;
}

class CardClass implements Card {
  title: string;
  duration: number;
  price: number;
  type: LabType;
  constructor(title: string, duration: number, price: number, type: LabType) {
    this.title = title;
    this.duration = duration;
    this.price = price;
    this.type = type;
  }
}

export const slides: Card[] = [
  new CardClass('Backup system', 6, 3000, 'Cpp'),
  new CardClass('Mp3 editor', 3, 1400, 'Cpp'),
  new CardClass('Xml->Yml Converter', 8, 4000, 'Cpp'),
  new CardClass('Xml->Yml Converter', 8, 4000, 'Cpp'),
  new CardClass('Mp3 editor', 3, 1400, 'Cpp'),
  new CardClass('Backup system', 6, 3000, 'Cpp'),

  new CardClass('Xml->Yml Converter', 8, 4000, 'Cpp'),
  new CardClass('Mp3 editor', 3, 1400, 'Cpp'),
  new CardClass('Backup system', 6, 3000, 'Cpp'),
  new CardClass('Backup system', 6, 3000, 'Cpp'),
  new CardClass('Mp3 editor', 3, 1400, 'Cpp'),
  new CardClass('Xml->Yml Converter', 8, 4000, 'Cpp'),
];
