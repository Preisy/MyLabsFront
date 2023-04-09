<script setup lang="ts">
import { useAuthStore } from 'src/stores/AuthStore';
import { useDialogStore } from 'src/stores/DialogStore';
import { useForm } from 'vee-validate';
import ABtn from 'src/components/ABtn.vue';
import AInput from 'src/components/AInput.vue';
import { useI18n } from 'vue-i18n';
import { UserCredsSchema } from 'src/model/UserCreds';
import omit from 'lodash/omit';
import { User } from 'src/model/User/User';

const { t } = useI18n();

const schema = [
  {
    label: t('pages.landing.homePage.form.name'),
    name: 'name',
    placeholder: 'Иван Красавцев',
  },
  {
    label: t('pages.landing.homePage.form.contacts'),
    name: 'contact',
    placeholder: 'Telegram: bykrasavcev',
  },
  {
    label: t('pages.landing.homePage.form.email'),
    name: 'email',
    placeholder: 'Krsavcevivan@gmail.com',
  },
];

const validateSchema = omit(UserCredsSchema, 'password');
const { handleSubmit } = useForm<typeof validateSchema>({
  validationSchema: validateSchema,
});

const dialogStore = useDialogStore();

const onsubmit = handleSubmit.withControlled((values) => {
  console.log(JSON.stringify(values, null, 2));
  useAuthStore().changeCreds(values as unknown as User);

  // dialogStore.setUser(values);
  // signupDialog.value?.open();
});
</script>

<template>
  <div class="settings">
    <div class="content-wrapper structure column items-center">
      <div class="img-holder">
        <img
          class="profile-pic q-mb-md"
          src="https://picsum.photos/200"
          alt=""
        />
      </div>
      <form class="form full-width column items-center" @submit="onsubmit">
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
      </form>
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

    .profile-pic {
      --size: 3rem;
      width: var(--size);
      height: var(--size);
      border-radius: 100%;
    }

    .apply-btn {
      flex: 0;
    }
  }
}
</style>
