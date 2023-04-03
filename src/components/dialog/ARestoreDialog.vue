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
  <ADialog ref="dialog" :title="t('components.dialogs.restore.title')">
    <template #body>
      <AInput
        class="full-width"
        :label="t('components.dialogs.restore.inputs.email')"
        name="mail"
      />
    </template>
    <template #controls>
      <ABtn
        class="q-px-xl"
        :label="t('components.dialogs.restore.buttons.next')"
        @click="nextFunc"
      />
    </template>
  </ADialog>
</template>
