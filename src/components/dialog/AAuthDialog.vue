<script setup lang="ts">
import ADialog from './ADialog.vue';
import AInput from '../AInput.vue';
import ABtn from '../ABtn.vue';
import { Nullable } from 'src/global/types';
import { ref } from 'vue';

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
  <ADialog ref="dialog" title="Добро пожаловать назад!">
    <template #body>
      <AInput class="full-width" label="Email" name="mail" />
      <AInput class="full-width" label="Пароль" name="password" />
    </template>
    <template #controls>
      <div class="column">
        <ABtn class="q-px-xl q-mb-md" label="Войти" @click="loginEvent" />
        <ABtn
          class="q-px-xl"
          color="grey"
          text-color="dark"
          label="Забыл пароль"
          @click="restoreFunc"
        />
      </div>
    </template>
  </ADialog>
</template>
