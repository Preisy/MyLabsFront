<script setup lang="ts">
import ADialog from './ADialog.vue';
import AInput from '../AInput.vue';
import ABtn from '../ABtn.vue';
import { Nullable } from 'src/global/types';
import { ref } from 'vue';

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

interface Props {
  nextFunc: () => void;
}
defineProps<Props>();

const dialog = ref<Nullable<InstanceType<typeof ADialog>>>();
defineExpose({
  getDialog: () => dialog,
});
</script>

<template>
  <ADialog ref="dialog" :title="t('components.dialogs.mail.title')">
    <template #body>
      <AInput
        class="full-width"
        :label="t('components.dialogs.mail.inputs.secret')"
        name="code"
      />
    </template>
    <template #controls>
      <ABtn
        class="q-px-xl"
        :label="t('components.dialogs.mail.buttons.next')"
        @click="nextFunc"
      />
    </template>
  </ADialog>
</template>
