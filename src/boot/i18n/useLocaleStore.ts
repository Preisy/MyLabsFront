import { defineStore } from 'pinia';
import { Locale } from 'boot/i18n/types';
import { ref, watch } from 'vue';

export const useLocaleStore = defineStore('localeStore', () => {
  const _locale = localStorage.getItem('locale');
  if (_locale !== 'ru-RU' && _locale !== 'en-US') localStorage.setItem('locale', 'ru-RU');

  const locale = ref<Locale>(localStorage.getItem('locale') as Locale);
  watch(() => locale, (state) => {
    localStorage.setItem('locale', state.value);
  });

  const setLocale = (newLocale: Locale) => {
    locale.value = newLocale;
  };

  return {
    locale,
    setLocale
  };
});
