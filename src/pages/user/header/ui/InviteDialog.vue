<script setup lang="ts">
import ADialog from 'src/components/ADialog';
import ABtn from 'src/components/ABtn.vue';
import { ref } from 'vue';
import { useUserStore } from 'src/stores/UserStore';

let dialog = ref<InstanceType<typeof ADialog>>();
let isOpened = ref(false);
const userStore = useUserStore();

const close = () => {
  dialog.value?.close();
  isOpened.value = false;
};
defineExpose({
  open: async () => {
    dialog.value?.open();

    const creds = await userStore.getCreds();
    console.log(creds);
    if ('error' in creds) {
      console.warn('Cant fetch userdata');
      return;
    }
    myId.value = creds.id;

    setTimeout(() => (isOpened.value = true), 0);
  },
});
const myId = ref(0);
</script>

<template>
  <ADialog ref="dialog">
    <div class="content-wrapper">
      <img
        src="/src/assets/header/floor.svg"
        class="floor"
        alt=""
        ref="floor"
        @click="close"
      />

      <h2 class="title">{{ $t('pages.user.header.dialogs.invite.title') }}</h2>
      <div class="body-wrapper">
        <p class="desc">{{ $t('pages.user.header.dialogs.invite.desc') }}</p>
        <p class="text-center ref-link">https://my-labs.ru?ref={{ myId }}</p>
        <img
          class="heart-img"
          src="/src/assets/pop_up/heart.png"
          alt=""
          loading="eager"
        />
      </div>
      <div class="controls-wrapper">
        <ABtn
          class="q-px-xl"
          :label="$t('pages.user.header.dialogs.invite.btn')"
          @click="close"
        />
      </div>
    </div>
  </ADialog>
</template>

<style scoped lang="scss">
.content-wrapper {
  position: relative;

  width: 23rem;
  padding: 2rem;
  padding-bottom: 0.5rem;
  background: $primary;
  border-radius: 1.5rem;
  box-shadow: 0px 0px 50px rgba(191, 205, 243, 0.5);

  .floor {
    user-select: none;
    position: absolute;
    top: -70%;
    right: -160%;
    z-index: -1;
    opacity: 0.5;
    rotate: -100deg;
    // transition: opacity 0.1s ease-in-out;
  }

  .title {
    margin-bottom: 0.6rem;
  }
  .body-wrapper {
    margin-bottom: 1rem;
    .desc {
      font-size: 1.3rem;
    }
    .ref-link {
      margin-bottom: 3rem;
      margin-top: 1rem;
      text-decoration: underline;
    }
  }

  .controls-wrapper {
    margin-bottom: 0.75rem;
    text-align: center;
  }
  .heart-img {
    height: 6.2rem;
    margin: 0 auto;
    display: block;
  }
  .page-counter {
    width: min-content;
    white-space: nowrap;
    margin: 0 auto;
  }
}
</style>
