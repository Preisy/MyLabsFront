<script setup lang="ts">
import { ref } from 'vue';
import heartImg from 'assets/pop_up/heart.png';
import ABtn from '../ABtn.vue';
import ADialog from '../ADialog';

interface AErrPopupProps {
  timeout?: number;
}

const dialog = ref<InstanceType<typeof ADialog>>();
withDefaults(defineProps<AErrPopupProps>(), {
  timeout: 2000,
});
defineExpose({
  show: () => {
    dialog.value?.open();
  },
  hide: () => {
    dialog.value?.close();
  },
});

const onclick = () => {
  dialog.value?.close();
};
</script>

<template>
  <ADialog ref="dialog" class="popup flex">
    <div class="content-wrapper">
      <h2 class="title">{{ $t('components.done_popup.done') }}</h2>
      <div class="body-wrapper">
        <img class="heart-img" :src="heartImg" alt="" loading="eager" />
      </div>
      <div class="controls-wrapper">
        <ABtn
          class="q-px-xl"
          :label="$t('components.done_popup.done_btn')"
          @click="onclick"
        />
      </div>
    </div>
  </ADialog>
</template>

<style scoped lang="scss">
.popup {
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

      p {
        font-size: 1.3rem;
        margin-bottom: 1rem;
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
}
</style>
