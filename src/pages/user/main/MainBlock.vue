<script setup lang="ts">
import ABtn from 'src/components/ABtn.vue';
import { onMounted, ref, watch } from 'vue';
import OrderDialog from './ui/OrderDialog.vue';
import { useUserStore } from 'src/stores/UserStore';
import { QFile } from 'quasar';
import defaultPhoto from 'assets/user/default_photo.png';

const userStore = useUserStore();
const filepicker = ref<InstanceType<typeof QFile>>();
const orderDialog = ref<InstanceType<typeof OrderDialog>>();
const balance = ref<number>();

const file = ref<File>();
const onChangePhotoClick = async (e: Event) => {
  filepicker.value?.pickFiles(e);
};

const getBalance = async () => {
  const user = await userStore.getCreds();

  if ('error' in user) {
    console.warn('For some reason cant fetch balance');
    return;
  }

  balance.value = user.balance;
};

const getPhoto = async () => {
  if (!userStore.userPhotoUrl) userStore.getPhoto();
};

watch(file, async (newPhoto) => {
  if (!newPhoto) return;
  await userStore.setProfilePhoto(newPhoto);

  file.value = undefined;
});

onMounted(async () => {
  getBalance();
  getPhoto();
});
</script>

<template>
  <div class="main-block">
    <div class="content-wrapper structure">
      <div class="column items-center text-primary">
        <p class="balance">{{ $t('pages.user.main.balance') }}</p>
        <div class="balance-preloader" v-if="!balance && balance != 0" />
        <h1 class="balance-count">{{ balance }}</h1>
        <q-btn class="change-photo-btn" @click="onChangePhotoClick">
          <img
            class="profile-icon bg-primary"
            :src="userStore.userPhotoUrl ?? defaultPhoto"
            alt=""
          />
        </q-btn>
        <ABtn
          class="br-15px q-px-xl glow"
          color="grey"
          text-color="dark"
          :label="$t('pages.user.main.order')"
          @click="orderDialog?.open()"
        />
      </div>
      <OrderDialog ref="orderDialog" />
    </div>
    <QFile v-model="file" ref="filepicker" class="filepicker" />
  </div>
</template>

<style scoped lang="scss">
.main-block {
  background: radial-gradient(
    50% 412.81% at 50% 45.27%,
    #0f0b33 0%,
    #bfcdf3 100%
  );
  overflow: hidden;

  .structure {
    padding-top: 4.5rem;
    padding-bottom: 5rem;
  }
  .content-wrapper {
    .balance {
      font-size: 1rem;
    }
    .balance-preloader {
      width: 8rem;
      height: 3rem;
      margin: 0.5rem;
      border-radius: 1rem;
      background: #eaeaea;
    }
    .balance-count {
      font-size: 2rem;
      margin-bottom: 0rem;
    }

    .change-photo-btn {
      width: min-content;
      height: min-content;
      padding: 0;
      margin-bottom: 1rem;
      border-radius: 100%;
    }
    .profile-icon {
      --size: 6rem;
      width: var(--size);
      height: var(--size);
      border-radius: 100%;
    }

    .glow {
      box-shadow: 0 0 10px 0 rgba(234, 234, 238, 0.5);
    }
  }
  .filepicker {
    display: none;
  }
}
</style>
