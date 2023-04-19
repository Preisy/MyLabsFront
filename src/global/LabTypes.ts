export const LabTypes = [
  'C',
  'Cpp',
  'C#',
  'Java',
  'Python',
  'Microsoft',
  'Linux',
  'Web',
];

export enum LabEnum {
  'C' = 0,
  'Cpp' = 1,
  'C#' = 2,
  'Java' = 3,
  'Python' = 4,
  'Microsoft' = 5,
  'Linux' = 6,
  'Web' = 7,
}

export type LabType =
  | 'C'
  | 'Cpp'
  | 'C#'
  | 'Java'
  | 'Python'
  | 'Microsoft'
  | 'Linux'
  | 'Web';


export const taskTypeToImg = (v: string) => {
  let type: LabType = LabEnum[parseInt(v)] as unknown as LabType
  if (!type) type = v as LabType;

  switch (type) {
    case 'Cpp':
      return '/src/assets/cardTypes/c++icon.png';
    case 'C':
      return '/src/assets/cardTypes/cicon.png';
    case 'C#':
      return '/src/assets/cardTypes/csicon.png';
    case 'Java':
      return '/src/assets/cardTypes/javaicon.png';
    case 'Linux':
      return '/src/assets/cardTypes/linuxicon.png';
    case 'Microsoft':
      return '/src/assets/cardTypes/officeicon.png';
    case 'Python':
      return '/src/assets/cardTypes/pyhtonicon.png';
    case 'Web':
      return '/src/assets/cardTypes/react.svg';
  }
};