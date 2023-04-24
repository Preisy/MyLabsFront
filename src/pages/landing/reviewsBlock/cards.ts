export default interface Review {
  name: string;
  details: string;
  imgSrc: string;
  link: string;
}

class ReviewClass implements Review {
  name: string;
  details: string;
  imgSrc: string;
  link: string;

  constructor(name: string, details: string, imgSrc: string, link: string) {
    this.name = name;
    this.details = details;
    this.imgSrc = imgSrc;
    this.link = link;
  }
}

export const slides = [
  new ReviewClass(
    'Максим Максимов',
    '🔥🔥🔥🔥  . Очень крутой человек, сделал все иделаьно, даже доп задание сделал, кртуо',
    '',
    ''
  ),
  new ReviewClass(
    'Рита Афанасьева',
    'Человек который помог мне закрыть ссесию! Обьяснил кадую строчку кода. Выполнил все быстро! Спасибо🥺❤️',
    '',
    ''
  ),

  new ReviewClass(
    'Рита Афанасьева',
    'Человек который помог мне закрыть ссесию! Обьяснил кадую строчку кода. Выполнил все быстро! Спасибо🥺❤️',
    '',
    ''
  ),
  new ReviewClass(
    'Максим Максимов',
    '🔥🔥🔥🔥  . Очень крутой человек, сделал все иделаьно, даже доп задание сделал, кртуо',
    '',
    ''
  ),

  new ReviewClass(
    'Максим Максимов',
    '🔥🔥🔥🔥  . Очень крутой человек, сделал все иделаьно, даже доп задание сделал, кртуо',
    '',
    ''
  ),
  new ReviewClass(
    'Рита Афанасьева',
    'Человек который помог мне закрыть ссесию! Обьяснил кадую строчку кода. Выполнил все быстро! Спасибо🥺❤️',
    '',
    ''
  ),

  new ReviewClass(
    'Рита Афанасьева',
    'Человек который помог мне закрыть ссесию! Обьяснил кадую строчку кода. Выполнил все быстро! Спасибо🥺❤️',
    '',
    ''
  ),
  new ReviewClass(
    'Максим Максимов',
    '🔥🔥🔥🔥  . Очень крутой человек, сделал все иделаьно, даже доп задание сделал, кртуо',
    '',
    ''
  ),
];
