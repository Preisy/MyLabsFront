import { $api } from 'src/boot/axios';

export const FileService = {
    async uploadFiles(files: File[]) {
        try {
            const response = await $api.post('/login', files);
            console.log(response.data);

            return response;
        } catch (e: unknown) {
            return { error: e };
        }
    },
}