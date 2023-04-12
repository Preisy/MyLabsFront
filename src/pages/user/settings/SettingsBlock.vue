<script setup lang="ts">
import ABtn from 'src/components/ABtn.vue';
import { UserCredsSchema } from 'src/model/UserCreds';
import omit from 'lodash/omit';
import { User } from 'src/model/User/User';
import ADynamicForm from 'src/components/ADynamicForm';
import { onMounted, ref } from 'vue';
import { getSchema } from 'src/global/utils';
import { useUserStore } from './store/UserStore';
import { assign } from 'lodash';

const validateSchema = omit(UserCredsSchema, 'password');
// const dialogStore = useDialogStore();

const userStore = useUserStore();

const onsubmit = (values: Record<string, unknown>): void => {
  console.log(values);
  userStore.changeCreds(values as unknown as User);
};

const userform = ref<InstanceType<typeof ADynamicForm>>();
onMounted(async () => {
  const creds = await userStore.getCreds();
  if ('error' in creds) return;
  assign(userform.value, creds);
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
