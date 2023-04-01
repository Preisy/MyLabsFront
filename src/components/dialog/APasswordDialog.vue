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
  <ADialog ref="dialog" title="Придумай пароль или сгенерируй!">
    <template #body>
      <p>Сгенерированный пароль будет отправлен тебе почтой</p>
      <ABtn
        class="q-px-xl q-mb-md"
        label="Сгенирировать"
        color="grey"
        text-color="dark"
      />
      <AInput class="full-width" label="Пароль" name="password" />
      <AInput class="full-width" label="Пароль еще раз" name="password" />
    </template>
    <template #controls>
      <ABtn class="q-px-xl" label="Дальше" @click="nextFunc" />
    </template>
  </ADialog>
</template>
