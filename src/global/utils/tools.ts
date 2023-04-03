import * as yup from 'yup';
import { map } from 'lodash';


export function isVisible(el: HTMLElement | undefined) {
  if (!el) return false;

  const boundingRect = el.getBoundingClientRect();
  const { top, bottom } = boundingRect;

  return !(bottom < 0 || window.innerHeight - top < 0);
}

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export const getSchema = (data: Record<string, yup.Schema>) => {
  return map(data, (value, key) => ({
    label: key,
    name: key,
    rules: value,
  }));
};
