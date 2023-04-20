import cppImg from 'assets/cardTypes/c++icon.png'
import cImg from 'assets/cardTypes/cicon.png'
import csImg from 'assets/cardTypes/csicon.png'
import pythonImg from 'assets/cardTypes/pyhtonicon.png'
import javaImg from 'assets/cardTypes/javaicon.png'
import linuxImg from 'assets/cardTypes/linuxicon.png'
import officeImg from 'assets/cardTypes/officeicon.png'
import webImg from 'assets/cardTypes/react.svg'

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
      return cppImg;
    case 'C':
      return cImg;
    case 'C#':
      return csImg;
    case 'Java':
      return javaImg;
    case 'Linux':
      return linuxImg;
    case 'Microsoft':
      return officeImg;
    case 'Python':
      return pythonImg;
    case 'Web':
      return webImg;
  }
};