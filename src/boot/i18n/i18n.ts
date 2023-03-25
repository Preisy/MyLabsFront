import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { mergeI18n } from './merge';


// import messages from 'src/i18n';
import { THomePageI18n } from 'pages/landing/homePage';
import { TCounterPageI18n } from 'pages/landing/counterPage';

import { useLocaleStore } from 'boot/i18n/useLocaleStore';


// export type MessageLanguages = keyof typeof messages;
// Type-define 'en-US' as the master schema for the resource
// export type MessageSchema = typeof messages['en-US'];

// See https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
/* eslint-disable @typescript-eslint/no-empty-interface */
// declare module 'vue-i18n' {
//   // define the locale messages schema
//   export interface DefineLocaleMessage extends MessageSchema {
//   }
//
//   // define the datetime format schema
//   export interface DefineDateTimeFormat {
//   }
//
//   // define the number format schema
//   export interface DefineNumberFormat {
//   }
// }
/* eslint-enable @typescript-eslint/no-empty-interface */

const localeStore = useLocaleStore();

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: localeStore.locale, // todo switch
    legacy: false,
    messages: mergeI18n(
      THomePageI18n,
      TCounterPageI18n
    )
  });

  // Set i18n instance on app
  app.use(i18n);
});

