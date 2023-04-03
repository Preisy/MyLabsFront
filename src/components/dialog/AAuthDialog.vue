<script setup lang="ts">
import ADialog from './ADialog.vue';
import AInput from '../AInput.vue';
import ABtn from '../ABtn.vue';
import { Nullable } from 'src/global/types';
import { ref } from 'vue';

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

interface Props {
  restoreFunc: () => void;
}
defineProps<Props>();

const loginEvent = () => {
  console.log('Trying to login');
};

const dialog = ref<Nullable<InstanceType<typeof ADialog>>>();
defineExpose({
  getDialog: () => dialog,
});
</script>

<template>
  <ADialog ref="dialog" :title="t('components.dialogs.login.title')">
    <template #body>
      <AInput
        class="full-width"
        :label="t('components.dialogs.login.inputs.email')"
        name="mail"
      />
      <AInput
        class="full-width"
        :label="t('components.dialogs.login.inputs.password')"
        name="password"
      />
    </template>
    <template #controls>
      <div class="column">
        <ABtn
          class="q-px-xl q-mb-md"
          :label="t('components.dialogs.login.buttons.login')"
          @click="loginEvent"
        />
        <ABtn
          class="q-px-xl"
          color="grey"
          text-color="dark"
          :label="t('components.dialogs.login.buttons.restore')"
          @click="restoreFunc"
        />
      </div>
    </template>
  </ADialog>
</template>
