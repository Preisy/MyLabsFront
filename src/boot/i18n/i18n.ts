import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { mergeI18n } from './merge';

// import messages from 'src/i18n';
import { useLocaleStore } from 'boot/i18n/useLocaleStore';

import { THomePageI18n } from 'pages/landing/homePage';
import { TCounterBlockI18n } from 'pages/landing/counterBlock';
import { TFooterBlockI18n } from 'src/pages/landing/footer';
import { TReviewsBlockI18n } from 'src/pages/landing/reviewsBlock';
import { TOurSkillsBlockI18n } from 'src/pages/landing/ourSkillsBlock';
import { TExamplesBlockI18n } from 'src/pages/landing/examplesBlock';
import { TFaqBlockI18n } from 'src/pages/landing/faqBlock';
import { THeaderComponentI18n } from 'src/components/header';
import { TDialogsI18n } from 'src/components/dialog';

const localeStore = useLocaleStore();

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: localeStore.locale, // todo switch
    legacy: false,
    messages: mergeI18n(
      TDialogsI18n,
      THeaderComponentI18n,
      THomePageI18n,
      TCounterBlockI18n,
      TOurSkillsBlockI18n,
      TExamplesBlockI18n,
      TReviewsBlockI18n,
      TFaqBlockI18n,
      TFooterBlockI18n
    ),
  });

  // Set i18n instance on app
  app.use(i18n);
});
