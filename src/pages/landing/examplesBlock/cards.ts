class Card {
  title: string;
  time: string;
  price: string;
  imgSrc: string;

  constructor(title: string, time: number, price: number, imgSrc: string) {
    this.title = title;
    this.time = time.toString();
    this.price = price.toString();
    this.imgSrc = imgSrc;
  }
}

export const slides = [
  new Card('Backup system', 6, 3000, 'src/assets/examples/cs_lang.png'),
  new Card('Mp3 editor', 3, 1400, 'src/assets/examples/c_lang.png'),
  new Card('Xml->Yml Converter', 8, 4000, 'src/assets/examples/python_lang.png'),
  new Card('Xml->Yml Converter', 8, 4000, 'src/assets/examples/python_lang.png'),
  new Card('Mp3 editor', 3, 1400, 'src/assets/examples/c_lang.png'),
  new Card('Backup system', 6, 3000, 'src/assets/examples/cs_lang.png'),

  new Card('Xml->Yml Converter', 8, 4000, 'src/assets/examples/python_lang.png'),
  new Card('Mp3 editor', 3, 1400, 'src/assets/examples/c_lang.png'),
  new Card('Backup system', 6, 3000, 'src/assets/examples/cs_lang.png'),
  new Card('Backup system', 6, 3000, 'src/assets/examples/cs_lang.png'),
  new Card('Mp3 editor', 3, 1400, 'src/assets/examples/c_lang.png'),
  new Card('Xml->Yml Converter', 8, 4000, 'src/assets/examples/python_lang.png'),
];
