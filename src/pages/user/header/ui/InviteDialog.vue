<script setup lang="ts">
import ADialog from 'src/components/ADialog';
import ABtn from 'src/components/ABtn.vue';
import { ref } from 'vue';

let dialog = ref<InstanceType<typeof ADialog>>();
let isOpened = ref(false);

const close = () => {
  dialog.value?.close();
  isOpened.value = false;
};
defineExpose({
  open: () => {
    dialog.value?.open();
    setTimeout(() => (isOpened.value = true), 0);
  },
});
</script>

<template>
  <ADialog ref="dialog">
    <div class="content-wrapper">
      <h2 class="title">{{ $t('pages.user.header.dialogs.invite.title') }}</h2>
      <div class="body-wrapper">
        <p class="desc">{{ $t('pages.user.header.dialogs.invite.desc') }}</p>
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
  width: 23rem;
  padding: 2rem;
  padding-bottom: 0.5rem;

  background: $primary;

  border-radius: 1.5rem;

  .title {
    margin-bottom: 0.6rem;
  }
  .body-wrapper {
    margin-bottom: 1rem;
    .desc {
      font-size: 1.3rem;
      margin-bottom: 3rem;
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
