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
import { Photo } from 'src/service/UserService';

const userStore = useUserStore();
const validateSchema = omit(UserCredsSchema, 'password');
const userform = ref<InstanceType<typeof ADynamicForm>>();
const photo = ref<Photo>();

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
  photo.value = creds.photo;
  assign(userform.value?.values, userData);
});
</script>

<template>
  <div class="settings">
    <div class="content-wrapper structure column items-center">
      <div class="img-holder">
        <img
          class="profile-pic q-mb-md"
          :src="photo?.filename ?? defaultPhoto"
          alt=""
        />
      </div>
      <!-- <form class="form full-width column items-center" @submit="onsubmit">
        <div class="form-wrapper full-width">
          <template v-for="(col, i) in schema" :key="i">
            <div class="form-line">
              <a-input
                :label="col.label"
                :name="col.name"
                :placeholder="col.placeholder"
                :init-value="col.placeholder"
                class="col full-width q-mb-md"
              />
            </div>
          </template>
        </div>
        <ABtn
          class="apply-btn q-mb-xl"
          :label="$t('pages.user.settings.applyBtn')"
          :loading-state="dialogStore.changeCredsState"
          type="submit"
        />
      </form> -->

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
      />
    </div>
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
