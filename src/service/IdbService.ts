import { openDB } from 'idb';

const DB_NAME = 'mylabs_db';
const FILES_STORE_NAME = 'signup_files';
const FILES_KEY = 'files';
const db = openDB(DB_NAME, 1, {
    upgrade(db) {
        db.createObjectStore(FILES_STORE_NAME);
    },
});

export const IdbService = {
    saveFiles: async (files: File[]) => {
        (await db).put(FILES_STORE_NAME, files, FILES_KEY);
    },
    getFiles: async () => {
        const value = await (await db).get(FILES_STORE_NAME, FILES_KEY);
        console.log(value)
        return value;
    },
}