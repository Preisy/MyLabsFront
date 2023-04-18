<script setup lang="ts">
import { useLocaleStore } from 'src/boot/i18n/useLocaleStore';
import { Locale } from 'src/boot/i18n/types';

interface LangBtnProps {
  locale: Locale;
  label: string;
}
const props = defineProps<LangBtnProps>();

const localeStore = useLocaleStore();
const onclick = () => {
  console.log(props.locale);
  localeStore.setLocale(props.locale);
  setTimeout(() => {
    window.location.reload();
  }, 50);
};
</script>

<template>
  <q-btn
    class="lang-btn"
    flat
    no-caps
    text-color="dark"
    :ripple="false"
    :label="label"
    @click="onclick"
  />
</template>

<style scoped lang="scss">
.lang-btn {
  --highlight-padding: -1rem;
  --highlight-width: calc(100% + var(--highlight-padding));
  --highlight-middlepoint: calc(var(--highlight-width) / 2);
  --highlight-offset: calc(-1 * var(--highlight-padding) / 2);

  font-weight: 600;
  height: 1.4rem;
  font-size: 1rem;

  &::before {
    content: '';
    top: 75%;
    left: var(--highlight-middlepoint);
    width: 0;
    height: 0.25rem;
    background-color: $accent;

    transition: 0.2s all ease-in-out;
  }

  &.active::before,
  &:hover::before {
    left: var(--highlight-offset);
    width: var(--highlight-width);
  }
}

.lang-btn:hover,
.lang-btn:focus,
.lang-btn:active {
  :deep(.q-focus-helper) {
    background: $primary !important;
    opacity: 0 !important;
  }
}
</style>
