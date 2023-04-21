export type UnifiedApiResponse = Record<string, unknown> | { error: unknown };
export type UnifiedApiPromise = Promise<UnifiedApiResponse>;
