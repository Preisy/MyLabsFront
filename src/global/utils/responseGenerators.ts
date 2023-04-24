import { AxiosError } from 'axios'
import { UnifiedApiPromise } from 'src/global/types/unifiedApiResponse'

export function createSuccessResponse(msg: string): UnifiedApiPromise {
  return new Promise((resolve) => resolve({ status: msg }));
}

export function createErrorResponse(msg: string): UnifiedApiPromise {
  return new Promise((resolve) => resolve({ error: new AxiosError(msg) }));
}
