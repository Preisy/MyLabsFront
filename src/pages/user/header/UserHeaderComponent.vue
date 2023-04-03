<script setup lang="ts">
import { QScrollObserver, Screen } from 'quasar';
import { computed, ref } from 'vue';
import ABtn from 'components/ABtn.vue';
import { SignUpDialog, LoginDialog } from './ui';
import HeaderBtn from './ui';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const currentLinkIndex = ref(0);

const buttonLinks = [
  { label: t('pages.user.header.home'), value: 'possibilities' },
  { label: t('pages.landing.header.examples'), value: 'examples' },
  { label: t('pages.landing.header.reviews'), value: 'reviews' },
  { label: t('pages.landing.header.FAQ'), value: 'FAQ' },
];

const isMobile = computed(() => Screen.lt.md);
const isMenuOpened = ref(false);

let signup = ref<InstanceType<typeof SignUpDialog>>();
let login = ref<InstanceType<typeof LoginDialog>>();
</script>

<template>
  <q-header
    class="header"
    :class="{ compact: isCompact && !isMobile, mobile: isMobile }"
  >
    <img src="src/assets/my_labs_logo.png" alt="" class="logo" />

    <q-toolbar
      class="header-toolbar justify-between"
      :class="{ opened: isMenuOpened, column: isMobile }"
    >
      <div class="header-buttons" :class="{ 'column items-start': isMobile }">
        <HeaderBtn
          v-for="(link, index) in buttonLinks"
          :key="index"
          v-model="currentLinkIndex"
          :id="index"
          :label="link.label"
          class="header-btn"
        ></HeaderBtn>
      </div>

      <div class="auth">
        <ABtn
          class="auth-login q-px-xl"
          color="grey"
          text-color="dark"
          :label="$t('pages.user.header.contacts')"
          @click="login?.open()"
        ></ABtn>
        <ABtn
          class="auth-signup"
          :label="$t('pages.user.header.inviteFriend')"
          @click="signup?.open()"
        ></ABtn>
        <LoginDialog ref="login" />
        <SignUpDialog ref="signup" />
      </div>
    </q-toolbar>

    <div v-if="isMobile" class="btn-holder">
      <q-btn
        size="1.2rem"
        flat
        color="dark"
        :icon="isMenuOpened ? 'close' : 'menu'"
        @click="isMenuOpened = !isMenuOpened"
      />
    </div>

    <div v-if="isMobile" class="bg-prevent" :class="{ open: isMenuOpened }" />
  </q-header>

  <!-- <ADialogHolder ref="dialogComp" /> -->
</template>

<style scoped lang="scss">
.header {
  border-radius: 0 0 2rem 2rem;
  background-color: $primary;
  // background: url('src/assets/my_labs_logo.png');
  // background-size: 4rem 2.25rem;
  // background-position: 50% 50%;
  // background-repeat: no-repeat;

  position: fixed;

  .logo {
    --width: 4rem;
    --height: 2.25rem;

    user-select: none;
    width: var(--width);
    height: var(--height);
    position: absolute;
    top: calc(50% - var(--height) / 2);
    left: calc(50% - var(--width) / 2);
  }

  .header-toolbar {
    transition: 0.2s all ease-in-out;
    padding: 1.1rem 3.5rem;

    .header-buttons {
      .header-btn {
        margin-right: 1.5rem;
        text-decoration: unset;

        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }

  .auth {
    .auth-login {
      margin-right: 0.75rem;
    }
  }

  &.mobile {
    --header-height: 3rem;
    border-radius: 0;
    height: var(--header-height);

    .logo {
      left: calc(15% - var(--width) / 2);
      z-index: 2;
    }

    .header-toolbar {
      position: absolute;
      background: $primary;
      top: -1000%;
      z-index: 1;

      padding: 2rem;
      padding-top: calc(var(--header-height) + 1rem);
      border-radius: 1.5rem;

      align-items: flex-start;

      .header-buttons {
        margin-bottom: 2.5rem;
      }

      &.opened {
        top: 0;
      }
    }

    .btn-holder {
      display: flex;
      align-items: center;
      height: 100%;
      justify-content: flex-end;
      position: relative;
      z-index: 2;
    }
  }

  @media (min-width: $screen-xl) {
    .header-toolbar {
      width: 90rem;
      margin: 0 auto;
    }
  }
  @media (max-width: $screen-lg) {
    .header-toolbar {
      padding-left: 8rem;
    }
    .logo {
      left: 2.4rem;
    }
  }
}
</style>
