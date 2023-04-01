<script setup lang="ts">
import ADialog from './ADialog.vue';
import AInput from '../AInput.vue';
import ABtn from '../ABtn.vue';
import { ref } from 'vue';
import { Nullable } from 'src/global/types';

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
  <ADialog ref="dialog" title="Получи возможности после регистарции">
    <template #body>
      <AInput class="full-width" label="Имя" name="name" />
      <AInput class="full-width" label="Email" name="mail" />
      <AInput
        class="full-width"
        label="Контакт: email, tg, vk"
        name="contacts"
      />
    </template>
    <template #controls>
      <ABtn class="q-px-xl" label="Дальше" @click="nextFunc" />
    </template>
  </ADialog>
</template>
