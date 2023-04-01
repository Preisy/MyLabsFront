<script setup lang="ts">
import ADialog from './ADialog.vue';
import AInput from '../AInput.vue';
import ABtn from '../ABtn.vue';
import { Nullable } from 'src/global/types';
import { ref } from 'vue';

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
  <ADialog ref="dialog" title="Не переживай! Восстанови пароль.">
    <template #body>
      <AInput class="full-width" label="Email" name="mail" />
    </template>
    <template #controls>
      <ABtn class="q-px-xl" label="Войти" @click="nextFunc" />
    </template>
  </ADialog>
</template>
