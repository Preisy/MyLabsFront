export type unifiedApiResponse = Record<string, unknown> | { error: unknown }
export type unifiedApiPromise = Promise<unifiedApiResponse>
