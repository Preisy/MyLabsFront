<script setup lang="ts">
import ADialog from './ADialog.vue';
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
  <ADialog ref="dialog" :title="t('components.dialogs.ending.title')">
    <template #body>
      <p>{{ $t('components.dialogs.ending.body') }}</p>
      <img class="heart-img" src="src/assets/pop_up/heart.png" alt="" />
    </template>
    <template #controls>
      <ABtn
        class="q-px-xl"
        :label="t('components.dialogs.ending.buttons.end')"
        @click="nextFunc"
      />
    </template>
  </ADialog>
</template>

<style scoped lang="scss">
.heart-img {
  margin-top: 1rem;
  width: 12rem;
}
</style>
