<script setup lang="ts">
import { ref } from 'vue';
import ButtonComponent from './ABtn.vue';

// const model = ref('possibilities');
const current_link_index = ref(0);

const button_links = [
  { label: 'Возможности', value: 'possibilities' },
  { label: 'Примеры работ', value: 'examples' },
  { label: 'Отзывы', value: 'reviews' },
  { label: 'FAQ', value: 'FAQ' },
];
</script>

<template>
  <q-header class="header">
    <q-toolbar class="header__toolbar justify-between">
      <div class="toolbar__buttons">
        <router-link
          class="toolbar__router"
          v-for="(link, index) in button_links"
          :key="index"
          :to="''"
        >
          <q-btn
            class="toolbar__button q-pa-xs"
            :class="{ active: index === current_link_index }"
            color="dark"
            no-caps
            flat
            :label="link.label"
            @click="current_link_index = index"
          />
        </router-link>
      </div>

      <div class="auth">
        <button-component
          class="auth__login"
          color="grey"
          text-color="dark"
          label="Войти"
        ></button-component>
        <button-component
          class="auth__sign-up"
          label="Зарегистрироваться"
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

  .header__toolbar {
    padding: 1.8rem 3.5rem;
    .toolbar__buttons {
      .toolbar__router {
        margin-right: 1.5rem;
        &:last-of-type {
          margin-right: 0;
        }
      }
      .toolbar__button {
        --highlight-padding: 5%;
        --highlight-width: calc(100% + var(--highlight-padding));
        --highlight-middlepoint: calc(var(--highlight-width) / 2);
        --highlight-offset: calc(-1 * var(--highlight-padding) / 2);

        font-weight: 600;
        height: 1.4rem;

        &::before {
          content: '';
          top: 85%;
          left: var(--highlight-middlepoint);
          width: 0;
          height: 0.25rem;
          background-color: $accent;

          transition: 0.2s all ease-in-out;
        }

        &.active::before {
          left: var(--highlight-offset);
          width: var(--highlight-width);
        }
      }
    }

    .header__toolbar__title {
      display: flex;
      font-size: var(--font-size);

      padding: 1.4rem 0;

      .toolbar__logo {
        height: 2.25rem;
      }
    }
  }
  .auth__login {
    margin-right: 0.75rem;
  }
}
</style>
