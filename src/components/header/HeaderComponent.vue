<script setup lang="ts">
import { QScrollObserver } from 'quasar';
import { ref } from 'vue';
import ButtonComponent from '../ABtn.vue';
import AHeaderBtn from './AHeaderBtn.vue';

// const model = ref('possibilities');
const current_link_index = ref(0);

const button_links = [
  { label: 'Возможности', value: 'possibilities' },
  { label: 'Примеры работ', value: 'examples' },
  { label: 'Отзывы', value: 'reviews' },
  { label: 'FAQ', value: 'FAQ' },
];

const isCompact = ref(false);
const scrollHandler = (val: any) => {
  const top = val.position.top;
  isCompact.value = top > 500;
};
</script>

<template>
  <q-header class="header" :class="{ compact: isCompact }">
    <QScrollObserver axis="vertical" @scroll="scrollHandler" />
    <q-toolbar class="header-toolbar justify-between">
      <div class="header-buttons">
        <router-link
          class="header-router"
          v-for="(link, index) in button_links"
          :key="index"
          :to="''"
        >
          <AHeaderBtn
            v-model="current_link_index"
            :id="index"
            :label="link.label"
          ></AHeaderBtn>
        </router-link>
      </div>

      <div class="auth">
        <button-component
          class="auth-login q-px-xl"
          color="grey"
          text-color="dark"
          label="Войти"
        ></button-component>
        <button-component
          class="auth-signup"
          label="Регистрация"
        ></button-component>
      </div>
    </q-toolbar>
  </q-header>
</template>

<style scoped lang="scss">
.header {
  border-radius: 0 0 2rem 2rem;
  background: url('src/assets/my_labs_logo.png');
  background-color: $primary;
  background-size: 4rem 2.25rem;
  background-position: 50% 50%;
  background-repeat: no-repeat;

  &.compact {
    .header-toolbar {
      padding: 0.6rem 3.5rem;
    }
  }

  .header-toolbar {
    transition: 0.2s all ease-in-out;
    padding: 1.8rem 3.5rem;

    .header-buttons {
      .header-router {
        margin-right: 1.5rem;

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
}
</style>
