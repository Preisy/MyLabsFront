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
  <ADialog ref="dialog" :title="t('components.dialogs.password.title')">
    <template #body>
      <p class="p">{{ $t('components.dialogs.password.body') }}</p>
      <ABtn
        class="q-px-xl q-mb-md"
        :label="t('components.dialogs.password.buttons.generate')"
        color="grey"
        text-color="dark"
      />
      <AInput
        class="full-width"
        :label="t('components.dialogs.password.inputs.password')"
        name="password"
      />
      <AInput
        class="full-width"
        :label="t('components.dialogs.password.inputs.passwordRepeat')"
        name="password"
      />
    </template>
    <template #controls>
      <ABtn
        class="q-px-xl"
        :label="t('components.dialogs.password.buttons.next')"
        @click="nextFunc"
      />
    </template>
  </ADialog>
</template>

<style scoped lang="scss">
.p {
  margin-bottom: 1rem;
}
</style>
