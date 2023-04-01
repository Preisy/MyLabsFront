<script setup lang="ts">
import ADialog from './ADialog.vue';
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
  <ADialog ref="dialog" title="Ты супермен! Поздравляю">
    <template #body>
      <p>Регистрация завершена, скоро тебе напишет администратор!</p>
      <img class="heart-img" src="src/assets/pop_up/heart.png" alt="" />
    </template>
    <template #controls>
      <ABtn class="q-px-xl" label="Завершить" @click="nextFunc" />
    </template>
  </ADialog>
</template>

<style scoped lang="scss">
.heart-img {
  width: 12rem;
}
</style>
