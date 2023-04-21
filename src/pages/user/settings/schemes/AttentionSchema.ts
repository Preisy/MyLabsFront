import { storeToRefs } from 'pinia';
import { DialogData } from 'src/pages/landing/header/ui/auth/types';
import { useDialogStore } from 'src/pages/landing/header/store/DialogStore';
import { createSuccessResponse } from 'src/global/utils/responseGenerators';

const dialogStore = useDialogStore();

export const AttentionSchema = (t: (arg: string) => string): DialogData => {
    return {
        title: t('pages.user.settings.dialogs.attention.title'),
        schema: [],
        onSubmit: async () => {
            return createSuccessResponse('Ok');
        },
        btnLabel: t('pages.user.settings.dialogs.attention.btn'),
        state: storeToRefs(dialogStore).codeApproveState,
    };
};
