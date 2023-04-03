<script setup lang="ts">
import { ref } from 'vue';
import DialogWrapper from './DialogWrapper.vue';
import ADialog from 'src/components/ADialog';
import { getSchema } from 'src/global/utils';
import { LoginDataSchema } from 'src/model/loginData';
import ADynamicForm from 'src/components/ADynamicForm';
import RestorePasswordDialog from './RestorePasswordDialog.vue';
import ABtn from 'src/components/ABtn.vue';

let restore = ref<InstanceType<typeof RestorePasswordDialog>>();
let dialog = ref<InstanceType<typeof DialogWrapper>>();
defineExpose({
  open: () => dialog.value?.open(),
});

let schema = getSchema(LoginDataSchema);

const onSubmit = () => {
  console.log('login');
};
</script>

<template>
  <div>
    <ADialog ref="dialog">
      <div class="content-wrapper">
        <h4 class="title">
          {{ $t('pages.landing.header.auth.login.1') }}
        </h4>
        <div class="body-wrapper">
          <ADynamicForm
            :schema="schema"
            :on-submit="onSubmit"
            class="form"
            button-width="9rem"
          />
          <ABtn
            :label="$t('pages.landing.header.auth.login.btn')"
            color="grey"
            text-color="dark"
            class="restore"
            width="9rem"
            @click="
              () => {
                dialog?.close();
                restore?.open();
              }
            "
          ></ABtn>
        </div>
      </div>
      <!-- <SuccessDialog v-else :i="dialogs.length + 1" @close="close()" /> -->
    </ADialog>
    <RestorePasswordDialog ref="restore" />
  </div>
</template>

<style scoped lang="scss">
.content-wrapper {
  width: 23rem;
  padding: 2rem;
  padding-bottom: 0.5rem;

  background: $primary;

  border-radius: 1.5rem;

  .form {
    text-align: center;
    margin-bottom: 1rem;
  }

  .title {
    line-height: 2rem;
    margin-bottom: 1.3rem;
  }
  .body-wrapper {
    margin-bottom: 1rem;
  }
  .restore {
    margin: 0 auto 1rem;
    display: block;
  }
}
</style>
