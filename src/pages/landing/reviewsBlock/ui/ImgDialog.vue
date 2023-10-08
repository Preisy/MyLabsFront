<script setup lang="ts">
import { QDialog } from 'quasar';
import { ref } from 'vue';

defineProps<{
  imgSrc: string;
}>();

const dialog = ref<InstanceType<typeof QDialog>>();
const show = () => {
  dialog.value?.show();
};
defineExpose({ show });
</script>
<template>
  <q-dialog ref="dialog" full-width>
    <div @click="dialog?.hide()">
      <q-img :src="imgSrc" class="img" />
    </div>
  </q-dialog>
</template>

<style scoped lang="scss">
.img {
  min-width: 150px;
  min-height: 150px;
  max-width: 60%;
  max-height: 60%;
  width: 100%;
  margin: 0 auto;
  display: block;

  @media screen and (max-width: $screen-md) {
    max-width: 85%;
  }
}
</style>
