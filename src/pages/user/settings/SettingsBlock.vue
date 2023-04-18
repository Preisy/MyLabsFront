<script setup lang="ts">
import ABtn from 'src/components/ABtn.vue';
import { UserCredsSchema } from 'src/model/UserCreds';
import omit from 'lodash/omit';
import { User } from 'src/model/User/User';
import ADynamicForm from 'src/components/ADynamicForm';
import { onMounted, ref } from 'vue';
import { getSchema } from 'src/global/utils';
import { useUserStore } from 'src/stores/UserStore';
import { assign } from 'lodash';
import defaultPhoto from 'src/assets/Labs_square_icon.png';
import PasswordChangeDialog from './ui/PasswordChangeDialog.vue';

const userStore = useUserStore();
const validateSchema = omit(UserCredsSchema, 'password');
const userform = ref<InstanceType<typeof ADynamicForm>>();
const passwordChangeDialog = ref<InstanceType<typeof PasswordChangeDialog>>();

const onsubmit = (values: Record<string, unknown>): void => {
  console.log(values);
  userStore.changeCreds(values as unknown as User);
};

onMounted(async () => {
  const creds = await userStore.getCreds();
  console.log(creds);
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
      <div class="img-holder">
        <img
          class="profile-pic q-mb-md"
          :src="userStore.userPhotoUrl ?? defaultPhoto"
          alt=""
        />
      </div>

      <ADynamicForm
        class="full-width text-center form"
        ref="userform"
        :schema="getSchema(validateSchema)"
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
}
</style>
