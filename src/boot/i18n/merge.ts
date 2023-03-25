/* eslint-disable  @typescript-eslint/no-explicit-any */

import merge from 'lodash/merge';

export function mergeI18n(...i18ns: any[]) {
  const merged: Partial<any> = {};
  for (const i18n of i18ns) {
    merge(merged, i18n);
  }
  return merged as any;
}

