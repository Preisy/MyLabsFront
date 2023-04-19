import { $api } from 'src/boot/axios';
import { FileModel } from 'src/pages/user/work/ui/Card';

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
    async downloadFile(orderId: number, filename: FileModel) {
        try {
            const response = await $api.get(`/orders/${orderId}/files/${filename.filename}`, { responseType: 'blob' });
            console.log(response.data);

            const link = URL.createObjectURL(response.data)

            return { blob: response.data, link };
        } catch (e: unknown) {
            return { error: e };
        }
    },
}