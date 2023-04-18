<script setup lang="ts">
import ABtn from 'src/components/ABtn.vue';
import { ref, watch } from 'vue';
import OrderDialog from './ui/OrderDialog.vue';
import { useUserStore } from 'src/stores/UserStore';
import { QFile } from 'quasar';
import { Photo } from 'src/service/UserService';
import defaultPhoto from 'src/assets/Labs_square_icon.png';

const userStore = useUserStore();
const filepicker = ref<InstanceType<typeof QFile>>();
const orderDialog = ref<InstanceType<typeof OrderDialog>>();
const balance = ref<number>();
const photo = ref<Photo>();
userStore.getCreds().then((val) => {
  if ('error' in val) {
    console.warn('For some reason cant fetch balance');
    return;
  }
  balance.value = val.balance;
  photo.value = val.photo;
});

const file = ref<File>();
const onChangePhotoClick = async (e: Event) => {
  filepicker.value?.pickFiles(e);
};

watch(file, async (newPhoto) => {
  console.log(newPhoto);
  if (!newPhoto) return;
  const res = await userStore.setProfilePhoto(newPhoto);
  console.log(res);

  file.value = undefined;
});
</script>

<template>
  <div class="main-block">
    <div class="content-wrapper structure">
      <div class="column items-center text-primary">
        <p class="balance">{{ $t('pages.user.main.balance') }}</p>
        <h1 class="balance-count">{{ balance }}</h1>
        <q-btn class="change-photo-btn" @click="onChangePhotoClick">
          <img
            class="profile-icon bg-primary"
            :src="photo?.filename ?? defaultPhoto"
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
