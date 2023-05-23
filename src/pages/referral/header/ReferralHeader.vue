<script setup lang="ts">
import { QScrollObserver, Screen } from 'quasar';
import { computed, onMounted, ref } from 'vue';
import ABtn from 'components/ABtn.vue';
import { QScrollDetailsEvent } from 'src/global/types';
import { SignUpDialog, LoginDialog } from 'pages/landing/header/ui/auth';
import { useI18n } from 'vue-i18n';
import HeaderBtn from './ui';
import { useAuthStore } from 'src/stores/AuthStore';
import { useUserStore } from 'src/stores/UserStore';
import defaultPhoto from 'assets/user/default_photo.png';
import mylabsLogo from 'assets/my_labs_logo.png';

const { t } = useI18n();
const currentLinkIndex = ref(1);

const elements: HTMLElement[] = [];
const buttonLinks = [
  {
    label: t('pages.referrals.header.home'),
    value: '/',
  },
  {
    label: t('pages.referrals.header.referrals'),
    value: '/referrals',
  },
];

const isCompact = ref(false);
const scrollHandler = (details: QScrollDetailsEvent) => {
  const top = details.position.top;
  isCompact.value = top > 100;

  let el: HTMLElement | undefined = undefined;
  let min = 999999;
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const middlePoint = (rect.top + rect.bottom) / 2;
    const delta = Math.abs(Screen.height / 2 - middlePoint);

    if (delta < min) {
      min = delta;
      el = element;
    }
  });

  if (el) currentLinkIndex.value = elements.indexOf(el);
};

const isMobile = computed(() => Screen.lt.lg);
const isMenuOpened = ref(false);
const userStore = useUserStore();

let signup = ref<InstanceType<typeof SignUpDialog>>();
let login = ref<InstanceType<typeof LoginDialog>>();

const isSignupOpened = computed(() => signup.value?.isOpened);
const isLoginOpened = computed(() => login.value?.isOpened);

onMounted(async () => {
  await userStore.getPhoto();
});
</script>

<template>
  <q-header
    class="header"
    :class="{ compact: isCompact && !isMobile, mobile: isMobile }"
  >
    <QScrollObserver axis="vertical" @scroll="scrollHandler" />
    <img :src="mylabsLogo" alt="" class="logo" />

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
          :target="link.value"
          :to="link.value"
          class="header-link"
        />
      </div>

      <div
        class="right-btns"
        :class="{ 'row items-center': !isMobile, 'column reverse': isMobile }"
      >
        <div class="auth-btns" :class="{ 'q-mb-md': isMobile }">
          <ABtn
            v-if="!useAuthStore().isAuth"
            class="auth-login right-btn"
            theme="light"
            :label="$t('pages.landing.header.login')"
            @click="
              if (!isSignupOpened) {
                login?.open();
                isMenuOpened = false;
              }
            "
          />
          <ABtn
            v-if="!useAuthStore().isAuth"
            class="auth-signup right-btn"
            theme="dark"
            :label="$t('pages.landing.header.signup')"
            @click="
              if (!isLoginOpened) {
                signup?.open();
                isMenuOpened = false;
              }
            "
          />
        </div>
        <q-btn
          class="photo-wrapper-btn"
          flat
          v-if="useAuthStore().isAuth"
          to="mpc/tasks"
        >
          <img
            class="user-photo"
            :src="userStore.userPhotoUrl ?? defaultPhoto"
          />
        </q-btn>
        <LoginDialog ref="login" />
        <SignUpDialog ref="signup" :is-full="false" />
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

    <div
      v-if="isMobile"
      class="bg-prevent"
      :class="{ open: isMenuOpened }"
      @click="isMenuOpened = false"
    />
  </q-header>
  <!-- <ADialogHolder ref="dialogComp" /> -->
</template>

<style scoped lang="scss">
.header {
  border-radius: 0 0 2rem 2rem;
  background-color: $primary;
  position: fixed;
  z-index: 9999;

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
    padding: 1.8rem 3.5rem;

    .header-buttons {
      .header-link {
        margin-right: 1.5rem;
        text-decoration: unset;

        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }

  .bg-prevent {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 100%;
    transition: 0.2s ease-in-out all;

    &.open {
      bottom: 0;
      background-color: #ffffff99;
    }
  }

  .photo-wrapper-btn {
    width: min-content;

    .user-photo {
      --size: 2.25rem;
      --max-size: 2.4rem;
      width: var(--max-size);
      height: var(--size);
      border-radius: 100%;
      box-shadow: 0 0 4px 0 #00000066;
    }
  }

  .right-btns {
    .auth-login {
      margin-right: 0.75rem;
    }
  }

  &.compact {
    box-shadow: 0px 0px 50px rgba(191, 205, 243, 0.5);
    .header-toolbar {
      padding-top: 0.6rem;
      padding-bottom: 0.6rem;
    }
  }

  &.mobile {
    --header-height: 3rem;
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
