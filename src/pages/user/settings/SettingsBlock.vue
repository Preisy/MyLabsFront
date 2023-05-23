<script setup lang="ts">
import ABtn from 'src/components/ABtn.vue';
import { UserCredsSchema } from 'src/model/UserCreds';
import { User } from 'src/model/User/User';
import ADynamicForm from 'src/components/ADynamicForm';
import { onMounted, ref } from 'vue';
import { useUserStore } from 'src/stores/UserStore';
import { assign } from 'lodash';
import PasswordChangeDialog from './ui/PasswordChangeDialog.vue';
import FieldProps from 'src/components/ADynamicForm/types';
import AErrPopup from 'src/components/AErrPopup.vue';
import ACompletePopup from 'src/components/ACompletePopup';
import { AxiosError } from 'axios';

const userStore = useUserStore();
const validateSchema: FieldProps[] = [
  {
    label: 'Email',
    name: 'email',
    rules: UserCredsSchema.email,
    isActive: false,
  },
  {
    label: 'Name',
    name: 'name',
    rules: UserCredsSchema.name,
  },
  {
    label: 'Contact',
    name: 'contact',
    rules: UserCredsSchema.contact,
  },
];
const userform = ref<InstanceType<typeof ADynamicForm>>();
const passwordChangeDialog = ref<InstanceType<typeof PasswordChangeDialog>>();

const errPopup = ref<InstanceType<typeof AErrPopup>>();
const donePopup = ref<InstanceType<typeof ACompletePopup>>();
const respError = ref<AxiosError>();

const onsubmit = async (values: Record<string, unknown>) => {
  const response = await userStore.changeCreds(values as unknown as User);
  if ('error' in response) {
    respError.value = response.error as AxiosError;
    errPopup.value?.show();
  }

  donePopup.value?.show();
};

onMounted(async () => {
  const creds = await userStore.getCreds();
  if ('error' in creds) return;

  const userData: User = {
    email: creds.email,
    name: creds.uname,
    contact: creds.contact,
  };
  if (!userStore.userPhotoUrl) userStore.getPhoto();
  assign(userform.value?.values, userData);
});
</script>

<template>
  <div class="settings">
    <div class="content-wrapper structure column items-center">
      <ADynamicForm
        class="full-width text-center form"
        ref="userform"
        :schema="validateSchema"
        :on-submit="onsubmit"
        :btn-label="$t('pages.user.settings.applyBtn')"
        :state="userStore.changeCredsState"
      />

      <ABtn
        class="change-password-btn"
        theme="light"
        :label="$t('pages.user.settings.changePassword')"
        @click="passwordChangeDialog?.open()"
      />
    </div>
    <PasswordChangeDialog ref="passwordChangeDialog" />

    <AErrPopup
      class="settings-err-popup"
      ref="errPopup"
      :axios-err="respError"
    />
    <ACompletePopup class="settings-complete-popup" ref="donePopup" />
  </div>
</template>

<style scoped lang="scss">
.settings {
  .structure {
    padding-top: 4rem;
    width: 20rem;
  }
  .profile-pic {
    --size: 3rem;
    width: var(--size);
    height: var(--size);
    border-radius: 100%;
  }

  .form {
    margin-bottom: 2rem;
  }

  .change-password-btn {
    width: 10rem;
  }

  .settings-err-popup {
    padding: 0;
    border-radius: 1.5rem 1.5rem 0 0;
    transform: unset;
  }

  .settings-complete-popup {
    z-index: 1;
  }
}
</style>
