export interface CardModel {
  title: string;
  imgSrc: string;
  date: string;
  price: string;
  link: string;
}

export const exampleCards: {
  inProgress: CardModel[];
  done: CardModel[];
} = {
  inProgress: [
    {
      title: 'Backup system',
      price: '3000',
      date: '19.03.23',
      link: '#',
      imgSrc: '../src/assets/ourSkills/c++icon.png',
    },
    {
      title: 'Backup system',
      price: '3100',
      date: '19.03.23',
      link: '#',
      imgSrc: '../src/assets/ourSkills/c++icon.png',
    },
    {
      title: 'Backup system',
      price: '3200',
      date: '19.03.23',
      link: '#',
      imgSrc: '../src/assets/ourSkills/c++icon.png',
    },
  ],
  done: [
    {
      title: 'Backup system',
      price: '3000',
      date: '19.03.23',
      link: '#',
      imgSrc: '../src/assets/ourSkills/c++icon.png',
    },
    {
      title: 'Backup system',
      price: '3100',
      date: '19.03.23',
      link: '#',
      imgSrc: '../src/assets/ourSkills/c++icon.png',
    },
    {
      title: 'Backup system',
      price: '3200',
      date: '19.03.23',
      link: '#',
      imgSrc: '../src/assets/ourSkills/c++icon.png',
    },
    {
      title: 'Backup system',
      price: '3000',
      date: '19.03.23',
      link: '#',
      imgSrc: '../src/assets/ourSkills/c++icon.png',
    },
    {
      title: 'Backup system',
      price: '3100',
      date: '19.03.23',
      link: '#',
      imgSrc: '../src/assets/ourSkills/c++icon.png',
    },
    {
      title: 'Backup system',
      price: '3200',
      date: '19.03.23',
      link: '#',
      imgSrc: '../src/assets/ourSkills/c++icon.png',
    },
  ],
};
