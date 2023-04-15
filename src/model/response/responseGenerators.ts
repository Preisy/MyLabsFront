import { AxiosError } from 'axios'
import { unifiedApiPromise } from './unifiedApiResponse'

export function createSuccessResponse(msg: string): unifiedApiPromise {
    return new Promise((resolve) => resolve({ status: msg }))
}

export function createErrorResponse(msg: string): unifiedApiPromise {
    return new Promise((resolve) => resolve({ error: new AxiosError(msg) }))
}