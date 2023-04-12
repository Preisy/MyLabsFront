<script setup lang="ts">
import ABtn from 'src/components/ABtn.vue';
interface SuccessDialogProps {
  i: number;
}
defineProps<SuccessDialogProps>();
defineEmits<{
  (e: 'close'): void;
}>();
</script>

<template>
  <div class="content-wrapper">
    <h2 class="title">{{ $t('pages.landing.header.auth.success.title') }}</h2>
    <div class="body-wrapper">
      <p>{{ $t('pages.landing.header.auth.success.text') }}</p>
      <img
        class="heart-img"
        src="src/assets/pop_up/heart.png"
        alt=""
        loading="eager"
      />
    </div>
    <div class="controls-wrapper">
      <ABtn
        class="q-px-xl"
        to="/"
        :label="$t('pages.landing.header.auth.success.button')"
        @click="$emit('close')"
      />
    </div>
    <div class="page-counter">{{ i }} / {{ i }}</div>
  </div>
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
</style>
