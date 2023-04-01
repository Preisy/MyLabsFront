<script setup lang="ts">
import { Nullable } from 'src/global/types';
import { Ref, ref } from 'vue';
import ADialog from './ADialog.vue';
import AAuthDialog from './AAuthDialog.vue';
import ARegisterDialog from './ARegisterDialog.vue';
import AMailDialog from './AMailDialog.vue';
import ARestoreDialog from './ARestoreDialog.vue';
import APasswordDialog from './APasswordDialog.vue';
import AEndingDialog from './AEndingDialog.vue';

type Dialog = Nullable<InstanceType<typeof ADialog>>;
const authDialog = ref<Dialog>(null);
const registerRouteStart = ref<Dialog>(null);
const restoreRouteStart = ref<Dialog>(null);
const mailCodeDialog = ref<Dialog>(null);
const passwordDialog = ref<Dialog>(null);
const endingDialog = ref<Dialog>(null);

const currentIndex = ref<number>(0);
const currentRoute = ref<Ref<Dialog>[]>([]);

const registerRoute = [
  registerRouteStart,
  passwordDialog,
  mailCodeDialog,
  endingDialog,
];
const restoreRoute = [
  restoreRouteStart,
  mailCodeDialog,
  passwordDialog,
  endingDialog,
];

defineExpose({
  register: () => {
    currentIndex.value = -1;
    currentRoute.value = registerRoute;
    next();
  },
  auth: () => {
    authDialog.value?.open();
  },
});

const restore = () => {
  authDialog.value?.close();
  currentIndex.value = -1;
  currentRoute.value = restoreRoute;
  next();
};

function next() {
  currentRoute.value[currentIndex.value]?.value?.close();
  currentIndex.value += 1;
  currentRoute.value[currentIndex.value]?.value?.open();
  currentRoute.value[currentIndex.value]?.value?.setPage(
    currentIndex.value + 1,
    currentRoute.value.length
  );
}
</script>

<template>
  <Teleport to="body">
    <AAuthDialog
      :ref="(el: InstanceType<typeof AAuthDialog>)=>{ authDialog = el.getDialog()?.value }"
      :restore-func="restore"
    />
    <ARegisterDialog
      :ref="(el: InstanceType<typeof ARegisterDialog>)=>{ registerRouteStart = el.getDialog()?.value }"
      :next-func="next"
    />

    <AMailDialog
      :ref="(el: InstanceType<typeof AMailDialog>)=>{ mailCodeDialog = el.getDialog()?.value }"
      :next-func="next"
    />

    <ARestoreDialog
      :ref="(el: InstanceType<typeof ARestoreDialog>)=>{ restoreRouteStart = el.getDialog()?.value }"
      :next-func="next"
    />

    <APasswordDialog
      :ref="(el: InstanceType<typeof APasswordDialog>)=>{ passwordDialog = el.getDialog()?.value }"
      :next-func="next"
    />

    <AEndingDialog
      :ref="(el: InstanceType<typeof AEndingDialog>)=>{ endingDialog = el.getDialog()?.value }"
      :next-func="next"
    />
  </Teleport>
</template>
