export interface FriendCardModel {
  photo: string;
  uname: string;
  balance: number;
  id: number
}

export const defaultCards: FriendCardModel[] = [
  { photo: 'https://picsum.photos/200', uname: 'Рита Афанасьева', balance: 500, id: 0 },
  { photo: 'https://picsum.photos/200', uname: 'Макс Григорьев', balance: 500, id: 0 },
  { photo: 'https://picsum.photos/200', uname: 'Алексей Н.', balance: 500, id: 0 },
  { photo: 'https://picsum.photos/200', uname: 'Артем', balance: 500, id: 0 },
  { photo: 'https://picsum.photos/200', uname: 'Артем', balance: 500, id: 0 },
  { photo: 'https://picsum.photos/200', uname: 'Алексей Н.', balance: 500, id: 0 },
  { photo: 'https://picsum.photos/200', uname: 'Макс Григорьев', balance: 500, id: 0 },
  { photo: 'https://picsum.photos/200', uname: 'Рита Афанасьева', balance: 500, id: 0 },
];
