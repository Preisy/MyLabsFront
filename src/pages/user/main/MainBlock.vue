<script setup lang="ts">
import ABtn from 'src/components/ABtn.vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const balance = ref<number>(3000);
</script>

<template>
  <div class="main-block">
    <div class="content-wrapper structure">
      <div class="column items-center text-primary">
        <p class="balance">{{ $t('pages.user.main.balance') }}</p>
        <h1 class="balance-count">{{ balance }}</h1>
        <img class="profile-icon" src="src/assets/user/profile.png" alt="" />
        <ABtn
          class="br-15px q-px-xl glow"
          color="grey"
          text-color="dark"
          :label="t('pages.user.main.order')"
        />
      </div>
    </div>
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
  .content-wrapper {
    margin-top: 8rem;
    margin-bottom: 7rem;

    .balance-count {
      margin-bottom: 1rem;
    }
    .profile-icon {
      --size: 8rem;
      width: var(--size);
      height: var(--size);
      border-radius: 100%;

      margin-bottom: 1.5rem;
    }

    .glow {
      box-shadow: 0 0 10px 0 rgba(234, 234, 238, 0.5);
    }
  }
}
</style>