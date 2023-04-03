<script setup lang="ts">
import ADialog from './ADialog.vue';
import AInput from '../AInput.vue';
import ABtn from '../ABtn.vue';
import { ref } from 'vue';
import { Nullable } from 'src/global/types';

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
  <ADialog ref="dialog" :title="t('components.dialogs.signup.title')">
    <template #body>
      <AInput
        class="full-width"
        :label="t('components.dialogs.signup.inputs.name')"
        name="name"
      />
      <AInput
        class="full-width"
        :label="t('components.dialogs.signup.inputs.email')"
        name="mail"
      />
      <AInput
        class="full-width"
        :label="t('components.dialogs.signup.inputs.contacts')"
        name="contacts"
      />
    </template>
    <template #controls>
      <ABtn
        class="q-px-xl"
        :label="t('components.dialogs.signup.buttons.next')"
        @click="nextFunc"
      />
    </template>
  </ADialog>
</template>
