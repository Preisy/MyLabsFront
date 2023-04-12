export type TaskType = 'Cpp' | 'C' | 'Cs';
export interface CardModel {
  duration: number;
  price: number;
  priority: number;
  title: string;
  type: TaskType;
  // files: File[];
}

export const exampleCards: {
  inProgress: CardModel[];
  done: CardModel[];
} = {
  inProgress: [
    {
      title: 'Backup system',
      price: 3000,
      duration: 22,
      // files: [],
      type: 'Cpp',
      priority: 0,
    },
    {
      title: 'Backup system',
      price: 3100,
      duration: 22,
      // files: [],
      type: 'Cpp',
      priority: 0,
    },
    {
      title: 'Backup system',
      price: 3200,
      duration: 22,
      // files: [],
      type: 'Cpp',
      priority: 0,
    },
  ],
  done: [
    {
      title: 'Backup system',
      price: 3000,
      duration: 22,
      // files: [],
      type: 'Cpp',
      priority: 0,
    },
    {
      title: 'Backup system',
      price: 3100,
      duration: 22,
      // files: [],
      type: 'Cpp',
      priority: 0,
    },
    {
      title: 'Backup system',
      price: 3200,
      duration: 22,
      // files: [],
      type: 'Cpp',
      priority: 0,
    },
    {
      title: 'Backup system',
      price: 3000,
      duration: 22,
      // files: [],
      type: 'Cpp',
      priority: 0,
    },
    {
      title: 'Backup system',
      price: 3100,
      duration: 22,
      // files: [],
      type: 'Cpp',
      priority: 0,
    },
    {
      title: 'Backup system',
      price: 3200,
      duration: 22,
      // files: [],
      type: 'Cpp',
      priority: 0,
    },
  ],
};
